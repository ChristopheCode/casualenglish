/*
 * Learn page logic.
 * Uses shared verb data from data/irregular-verbs.js.
 * Shows one verb at a time and handles Next and Speak controls.
 */
const irregularVerbs = Array.isArray(window.IRREGULAR_VERBS) ? window.IRREGULAR_VERBS : [];

// Difficulty
const storedDifficulty = safeGet(localStorage, "selectedDifficulty");
const allowedDifficulties = ["easy", "medium", "hard"];
const difficulty = allowedDifficulties.includes(storedDifficulty) ? storedDifficulty : "easy";

const filteredVerbs = irregularVerbs.filter(
  v => v.difficulty === difficulty
);

// DOM
const speakButton = document.getElementById("speakButton");
const verbPrompt = document.getElementById("verbPrompt");
const answerText = document.getElementById("answerText");
const nextButton = document.getElementById("nextButton");
const progBar = document.getElementById("progBar");

// State
let currentVerb = null;
let countdown = -1;
let intervalId = null;

// Init
document.addEventListener("DOMContentLoaded", () => {
  if (filteredVerbs.length === 0) {
    verbPrompt.textContent = "No verbs available.";
    nextButton.disabled = true;
    speakButton.disabled = true;
    return;
  }

  showNewVerb();

  nextButton.addEventListener("click", () => {
    showNewVerb();
  });

  setupSpeech();
});

// Show Verb
function showNewVerb() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  countdown = 2;
  answerText.textContent = "";

  const randomIndex = Math.floor(
    Math.random() * filteredVerbs.length
  );

  currentVerb = filteredVerbs[randomIndex];
  window.FlashcardProgress?.recordView(currentVerb);
  verbPrompt.textContent = currentVerb.base;
  restartProgressAnimation((countdown + 1) * 1000);

  intervalId = setInterval(() => {
    countdown--;

    if (countdown === -1) {
      clearInterval(intervalId);
      intervalId = null;

      answerText.textContent =
        `${currentVerb.base} ${currentVerb.past} ${currentVerb.pp}`;
    }
  }, 1000);
}

// Progress animation
function restartProgressAnimation(durationMs) {
  if (!progBar) return;

  progBar.getAnimations().forEach(anim => anim.cancel());
  progBar.style.width = "0%";
  progBar.offsetWidth;

  progBar.animate(
    [
      { width: "0%" },
      { width: "100%" }
    ],
    {
      duration: durationMs,
      fill: "forwards"
    }
  );
}

// Speak button
function setupSpeech() {
  if (!("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    speakButton.disabled = true;
    speakButton.title = "Text-to-speech not supported";
    return;
  }

  speakButton.addEventListener("click", () => {
    if (!currentVerb) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(
      `${currentVerb.base}, ${currentVerb.past}, ${currentVerb.pp}`
    );

    utterance.rate = 0.9;
    utterance.volume = 1;

    const voices = window.speechSynthesis.getVoices();

    const englishVoice =
      voices.find(v => v.lang === "en-US") ||
      voices.find(v => v.lang === "en-GB") ||
      voices.find(v => v.lang.startsWith("en"));

    if (englishVoice) {
      utterance.voice = englishVoice;
      utterance.lang = englishVoice.lang;
    } else {
      utterance.lang = "en-US";
    }

    window.speechSynthesis.speak(utterance);
  });
}

// Instagram detection
function isInstagramWebView() {
  const ua = navigator.userAgent || "";
  return ua.includes("Instagram");
}

document.addEventListener("DOMContentLoaded", () => {
  const speakButton = document.getElementById("speakButton");

  if (isInstagramWebView()) {
    speakButton.style.display = "none";
  }
});
