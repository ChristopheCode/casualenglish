/*
 * Exam page logic.
 * Builds a 10-question quiz from shared verb data and VerbUtils helpers.
 * Tracks score, feedback, final badge, and restart behavior.
 */
const allVerbs = Array.isArray(window.IRREGULAR_VERBS) ? window.IRREGULAR_VERBS : [];
const difficulty = window.VerbUtils.getSelectedDifficulty();
const verbs = window.VerbUtils.getVerbsForDifficulty(allVerbs, difficulty);
const templates = window.VerbUtils.templates;

const TOTAL = 10;

const progressEl = document.getElementById('progress');
const sentenceEl = document.getElementById('sentence');
const hintEl = document.getElementById('hint');
const choicesEl = document.getElementById('choices');
const feedbackEl = document.getElementById('feedback');
const nextExamBtn = document.getElementById('nextExamBtn');
const resultBox = document.getElementById('result');
const resultTitle = document.getElementById('resultTitle');
const resultScore = document.getElementById('resultScore');
const badge = document.getElementById('badge');
const restartBtn = document.getElementById('restartBtn');

let qIndex = 0;
let score = 0;
let locked = false;
let lastKey = null;
let currentV = null;
let currentT = null;

function pickRandom() {
  let v, t, key;
  do {
    v = verbs[Math.floor(Math.random() * verbs.length)];
    t = templates[Math.floor(Math.random() * templates.length)];
    key = `${v.base}-${t.form}`;
  } while (key === lastKey && verbs.length > 1);
  lastKey = key;
  return { v, t };
}

function renderQuestion() {
  document.getElementById('card').classList.remove('hidden-question');

  locked = false;
  feedbackEl.textContent = '';
  feedbackEl.className = 'exercise-feedback';
  resultBox.style.display = 'none';
  nextExamBtn.style.display = 'block';

  progressEl.textContent = `(Question ${qIndex + 1}/${TOTAL})`;

  const { v, t } = pickRandom();
  currentV = v;
  currentT = t;

  sentenceEl.textContent = v.sentences[t.form];
  const tenseStrong = document.createElement('strong');
  tenseStrong.textContent = t.label;
  const verbStrong = document.createElement('strong');
  verbStrong.textContent = v.base;
  hintEl.replaceChildren(
    document.createTextNode('Tense: '),
    tenseStrong,
    document.createTextNode(' · Verb: '),
    verbStrong
  );

  const options = window.VerbUtils.shuffle([v.base, v.past, v.pp]);
  choicesEl.replaceChildren();
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'exercise-choice';
    btn.textContent = opt;
    btn.addEventListener('click', () => onPick(opt, btn));
    choicesEl.appendChild(btn);
  });

  nextExamBtn.textContent = (qIndex === TOTAL - 1) ? 'Finish' : 'Next';
}

function onPick(value, btn) {
  if (locked) return;
  locked = true;

  const ans = window.VerbUtils.correctAnswer(currentV, currentT);
  choicesEl.querySelectorAll('button').forEach(b => b.disabled = true);

  if (value === ans) {
    score++;
    btn.classList.add('correct');
    feedbackEl.textContent = '✅ Correct!';
    feedbackEl.classList.add('ok');
  } else {
    btn.classList.add('wrong');
    feedbackEl.textContent = `❌ Wrong — correct answer: ${ans}`;
    feedbackEl.classList.add('bad');
    choicesEl.querySelectorAll('button').forEach(b => {
      if (b.textContent === ans) b.classList.add('correct');
    });
  }
}

function showResult() {
  nextExamBtn.style.display = 'none';

  document.getElementById('card').classList.add('hidden-question');

  resultBox.style.display = 'block';
  choicesEl.replaceChildren();
  sentenceEl.textContent = '';
  hintEl.textContent = '';
  feedbackEl.textContent = '';
  progressEl.textContent = '';
  resultScore.textContent = `${score} / ${TOTAL}`;

  if (score <= 4) {
    resultTitle.textContent = 'Keep going 💪';
    badge.textContent = '🏅';
  } else if (score <= 7) {
    resultTitle.textContent = 'Good job 👍';
    badge.textContent = '🥈';
  } else {
    resultTitle.textContent = 'Congratulations 🎉';
    badge.textContent = '🏆';
  }
}

function showUnavailableExam() {
  document.getElementById('card').classList.remove('hidden-question');
  progressEl.textContent = '';
  sentenceEl.textContent = 'No verbs available.';
  hintEl.textContent = '';
  choicesEl.replaceChildren();
  feedbackEl.textContent = '';
  nextExamBtn.disabled = true;
  restartBtn.disabled = true;
}

nextExamBtn.addEventListener('click', () => {
  if (!locked) {
    feedbackEl.textContent = 'Please choose an answer first 🙂';
    feedbackEl.className = 'exercise-feedback bad';
    return;
  }
  qIndex++;
  if (qIndex >= TOTAL) { showResult(); return; }
  renderQuestion();
});

restartBtn.addEventListener('click', () => {
  qIndex = 0;
  score = 0;
  lastKey = null;
  renderQuestion();
});

if (verbs.length === 0) {
  showUnavailableExam();
} else {
  renderQuestion();
}
