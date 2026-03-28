// -----------------------------
// Language
// -----------------------------
const params = new URLSearchParams(window.location.search);
let lang = params.get('lang') || localStorage.getItem('learn-lang') || 'en';

// -----------------------------
// State
// -----------------------------
let irregularVerbs = [];
let countdown = -1;
let currentVerb = null;
let intervalId = null;

// -----------------------------
// DOM refs
// -----------------------------
const speakButton = document.getElementById('speakButton');
const nextButton  = document.getElementById('nextButton');
const promptEl    = document.getElementById('french');
const answerEl    = document.getElementById('english');
const progressSpan = document.querySelector('.words .word .progressbar span');

// -----------------------------
// Boot: load data then start
// -----------------------------
fetch('./data/verbs.json')
  .then(r => r.json())
  .then(data => {
    irregularVerbs = data;
    showNewVerb();
  });

document.addEventListener('DOMContentLoaded', () => {
  nextButton.addEventListener('click', () => showNewVerb());
  setupSpeech();
  updateLangButtons();

  if (/Instagram/.test(navigator.userAgent)) {
    speakButton.style.display = 'none';
  }
});

// -----------------------------
// Language float
// -----------------------------
let langFloatOpen = false;

function toggleLangFloat(e) {
  e.stopPropagation();
  langFloatOpen = !langFloatOpen;
  document.getElementById('langFloat').classList.toggle('open', langFloatOpen);
}

function switchLang(e, newLang) {
  e.stopPropagation();
  if (!langFloatOpen) {
    langFloatOpen = true;
    document.getElementById('langFloat').classList.add('open');
    return;
  }
  lang = newLang;
  localStorage.setItem('learn-lang', lang);
  history.replaceState(null, '', `?lang=${lang}`);
  langFloatOpen = false;
  document.getElementById('langFloat').classList.remove('open');
  updateLangButtons();
  showNewVerb();
}

function updateLangButtons() {
  document.querySelectorAll('.lang-float-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// Close when clicking outside
document.addEventListener('click', () => {
  if (!langFloatOpen) return;
  langFloatOpen = false;
  document.getElementById('langFloat').classList.remove('open');
});

// -----------------------------
// Core logic
// -----------------------------
function showNewVerb() {
  if (!irregularVerbs.length) return;

  if (intervalId) { clearInterval(intervalId); intervalId = null; }

  countdown = 2;
  promptEl.textContent = '';
  answerEl.textContent = '';

  const randomIndex = Math.floor(Math.random() * irregularVerbs.length);
  currentVerb = irregularVerbs[randomIndex];

  const promptKey = { en: 'english', fr: 'fr', hi: 'hi' }[lang] || 'english';
  promptEl.textContent = currentVerb[promptKey];

  restartProgressAnimation((countdown + 1) * 1000);

  intervalId = setInterval(() => {
    countdown--;
    if (countdown === -1) {
      clearInterval(intervalId);
      intervalId = null;
      answerEl.textContent =
        `${currentVerb.english}  ${currentVerb.pastSimple}  ${currentVerb.pastParticiple}`;
    }
  }, 1000);
}

function restartProgressAnimation(durationMs) {
  if (!progressSpan) return;
  progressSpan.getAnimations().forEach(anim => anim.cancel());
  progressSpan.style.width = '0%';
  progressSpan.offsetWidth; // force reflow
  progressSpan.animate(
    [{ width: '0%' }, { width: '100%' }],
    { duration: durationMs, fill: 'forwards' }
  );
}

function setupSpeech() {
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    speakButton.disabled = true;
    speakButton.title = 'Text-to-speech not supported';
    return;
  }

  speakButton.addEventListener('click', () => {
    if (!currentVerb) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(
      `${currentVerb.english}, ${currentVerb.pastSimple}, ${currentVerb.pastParticiple}`
    );
    utterance.lang = 'en-GB';
    window.speechSynthesis.speak(utterance);
  });
}
