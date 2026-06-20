// Exercises page uses shared verb data and helpers.
const verbs = Array.isArray(window.IRREGULAR_VERBS) ? window.IRREGULAR_VERBS : [];
const templates = window.VerbUtils.templates;
const difficulty = window.VerbUtils.getSelectedDifficulty();
const filteredVerbs = window.VerbUtils.getVerbsForDifficulty(verbs, difficulty);

const tenseLabel = document.getElementById("tenseLabel");
const sentenceEl = document.getElementById("sentence");
const hintEl = document.getElementById("hint");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("nextExercise");

let locked = false;
let lastKey = null;

function renderExercise() {
  locked = false;
  feedbackEl.textContent = "";
  feedbackEl.className = "exercise-feedback";

  let verb, template, key;
  do {
    verb = filteredVerbs[Math.floor(Math.random() * filteredVerbs.length)];
    template = templates[Math.floor(Math.random() * templates.length)];
    key = `${verb.base}-${template.form}`;
  } while (key === lastKey && filteredVerbs.length > 1);

  lastKey = key;

  tenseLabel.textContent = `(${template.label})`;
  sentenceEl.textContent = verb.sentences[template.form];

  const hintStrong = document.createElement("strong");
  hintStrong.textContent = verb.base;
  hintEl.replaceChildren(document.createTextNode("Verb: "), hintStrong);

  const answer = window.VerbUtils.correctAnswer(verb, template);
  const options = window.VerbUtils.shuffle([verb.base, verb.past, verb.pp]);
  choicesEl.replaceChildren();

  options.forEach(option => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "exercise-choice";
    button.textContent = option;
    button.addEventListener("click", () => onPick(option, button, answer));
    choicesEl.appendChild(button);
  });
}

function onPick(value, button, answer) {
  if (locked) return;
  locked = true;

  choicesEl.querySelectorAll("button").forEach(choice => {
    choice.disabled = true;
  });

  if (value === answer) {
    button.classList.add("correct");
    feedbackEl.textContent = "Correct!";
    feedbackEl.classList.add("ok");
    return;
  }

  button.classList.add("wrong");
  feedbackEl.textContent = `Wrong - correct answer: ${answer}`;
  feedbackEl.classList.add("bad");
  choicesEl.querySelectorAll("button").forEach(choice => {
    if (choice.textContent === answer) choice.classList.add("correct");
  });
}

function showUnavailableExercise() {
  tenseLabel.textContent = "";
  sentenceEl.textContent = "No verbs available.";
  hintEl.textContent = "";
  feedbackEl.textContent = "";
  choicesEl.replaceChildren();
  nextButton.disabled = true;
}

nextButton.addEventListener("click", renderExercise);

if (filteredVerbs.length === 0) {
  showUnavailableExercise();
} else {
  renderExercise();
}
