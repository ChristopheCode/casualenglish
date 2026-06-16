const verbs = [
  // EASY
  { base: "be", past: "was were", pp: "been", difficulty: "easy" },
  { base: "become", past: "became", pp: "become", difficulty: "easy" },
  { base: "begin", past: "began", pp: "begun", difficulty: "easy" },
  { base: "break", past: "broke", pp: "broken", difficulty: "easy" },
  { base: "bring", past: "brought", pp: "brought", difficulty: "easy" },
  { base: "build", past: "built", pp: "built", difficulty: "easy" },
  { base: "buy", past: "bought", pp: "bought", difficulty: "easy" },
  { base: "come", past: "came", pp: "come", difficulty: "easy" },
  { base: "do", past: "did", pp: "done", difficulty: "easy" },
  { base: "drink", past: "drank", pp: "drunk", difficulty: "easy" },
  { base: "drive", past: "drove", pp: "driven", difficulty: "easy" },
  { base: "eat", past: "ate", pp: "eaten", difficulty: "easy" },
  { base: "find", past: "found", pp: "found", difficulty: "easy" },
  { base: "get", past: "got", pp: "gotten got", difficulty: "easy" },
  { base: "give", past: "gave", pp: "given", difficulty: "easy" },
  { base: "go", past: "went", pp: "gone", difficulty: "easy" },
  { base: "have", past: "had", pp: "had", difficulty: "easy" },
  { base: "know", past: "knew", pp: "known", difficulty: "easy" },
  { base: "make", past: "made", pp: "made", difficulty: "easy" },
  { base: "run", past: "ran", pp: "run", difficulty: "easy" },
  { base: "say", past: "said", pp: "said", difficulty: "easy" },
  { base: "see", past: "saw", pp: "seen", difficulty: "easy" },
  { base: "take", past: "took", pp: "taken", difficulty: "easy" },
  { base: "tell", past: "told", pp: "told", difficulty: "easy" },
  { base: "think", past: "thought", pp: "thought", difficulty: "easy" },
  { base: "write", past: "wrote", pp: "written", difficulty: "easy" },
  { base: "read", past: "read", pp: "read", difficulty: "easy" },
  { base: "speak", past: "spoke", pp: "spoken", difficulty: "easy" },
  { base: "meet", past: "met", pp: "met", difficulty: "easy" },
  { base: "leave", past: "left", pp: "left", difficulty: "easy" },

  // MEDIUM
  { base: "beat", past: "beat", pp: "beaten", difficulty: "medium" },
  { base: "bite", past: "bit", pp: "bitten", difficulty: "medium" },
  { base: "blow", past: "blew", pp: "blown", difficulty: "medium" },
  { base: "catch", past: "caught", pp: "caught", difficulty: "medium" },
  { base: "choose", past: "chose", pp: "chosen", difficulty: "medium" },
  { base: "draw", past: "drew", pp: "drawn", difficulty: "medium" },
  { base: "fall", past: "fell", pp: "fallen", difficulty: "medium" },
  { base: "feel", past: "felt", pp: "felt", difficulty: "medium" },
  { base: "fight", past: "fought", pp: "fought", difficulty: "medium" },
  { base: "fly", past: "flew", pp: "flown", difficulty: "medium" },
  { base: "forget", past: "forgot", pp: "forgotten", difficulty: "medium" },
  { base: "freeze", past: "froze", pp: "frozen", difficulty: "medium" },
  { base: "grow", past: "grew", pp: "grown", difficulty: "medium" },
  { base: "hear", past: "heard", pp: "heard", difficulty: "medium" },
  { base: "hide", past: "hid", pp: "hidden", difficulty: "medium" },
  { base: "hold", past: "held", pp: "held", difficulty: "medium" },
  { base: "keep", past: "kept", pp: "kept", difficulty: "medium" },
  { base: "lead", past: "led", pp: "led", difficulty: "medium" },
  { base: "lose", past: "lost", pp: "lost", difficulty: "medium" },
  { base: "pay", past: "paid", pp: "paid", difficulty: "medium" },
  { base: "ride", past: "rode", pp: "ridden", difficulty: "medium" },
  { base: "ring", past: "rang", pp: "rung", difficulty: "medium" },
  { base: "rise", past: "rose", pp: "risen", difficulty: "medium" },
  { base: "sell", past: "sold", pp: "sold", difficulty: "medium" },
  { base: "send", past: "sent", pp: "sent", difficulty: "medium" },
  { base: "shake", past: "shook", pp: "shaken", difficulty: "medium" },
  { base: "shoot", past: "shot", pp: "shot", difficulty: "medium" },
  { base: "sing", past: "sang", pp: "sung", difficulty: "medium" },
  { base: "sit", past: "sat", pp: "sat", difficulty: "medium" },
  { base: "sleep", past: "slept", pp: "slept", difficulty: "medium" },

  // HARD
  { base: "broadcast", past: "broadcast", pp: "broadcast", difficulty: "hard" },
  { base: "creep", past: "crept", pp: "crept", difficulty: "hard" },
  { base: "deal", past: "dealt", pp: "dealt", difficulty: "hard" },
  { base: "dig", past: "dug", pp: "dug", difficulty: "hard" },
  { base: "flee", past: "fled", pp: "fled", difficulty: "hard" },
  { base: "forbid", past: "forbade", pp: "forbidden", difficulty: "hard" },
  { base: "forgive", past: "forgave", pp: "forgiven", difficulty: "hard" },
  { base: "kneel", past: "knelt", pp: "knelt", difficulty: "hard" },
  { base: "lay", past: "laid", pp: "laid", difficulty: "hard" },
  { base: "lend", past: "lent", pp: "lent", difficulty: "hard" },
  { base: "light", past: "lit", pp: "lit", difficulty: "hard" },
  { base: "seek", past: "sought", pp: "sought", difficulty: "hard" },
  { base: "sew", past: "sewed", pp: "sewn", difficulty: "hard" },
  { base: "shrink", past: "shrank", pp: "shrunk", difficulty: "hard" },
  { base: "slide", past: "slid", pp: "slid", difficulty: "hard" },
  { base: "spin", past: "spun", pp: "spun", difficulty: "hard" },
  { base: "split", past: "split", pp: "split", difficulty: "hard" },
  { base: "spring", past: "sprang", pp: "sprung", difficulty: "hard" },
  { base: "stick", past: "stuck", pp: "stuck", difficulty: "hard" },
  { base: "sting", past: "stung", pp: "stung", difficulty: "hard" },
  { base: "stink", past: "stank", pp: "stunk", difficulty: "hard" },
  { base: "strike", past: "struck", pp: "struck", difficulty: "hard" },
  { base: "swear", past: "swore", pp: "sworn", difficulty: "hard" },
  { base: "sweep", past: "swept", pp: "swept", difficulty: "hard" },
  { base: "swim", past: "swam", pp: "swum", difficulty: "hard" },
  { base: "swing", past: "swung", pp: "swung", difficulty: "hard" },
  { base: "tear", past: "tore", pp: "torn", difficulty: "hard" },
  { base: "throw", past: "threw", pp: "thrown", difficulty: "hard" },
  { base: "weep", past: "wept", pp: "wept", difficulty: "hard" },
  { base: "withdraw", past: "withdrew", pp: "withdrawn", difficulty: "hard" },
];

const templates = [
  { label: "Base form", form: "base", prompt: "Choose the base form." },
  { label: "Past Simple", form: "past", prompt: "Choose the past simple form." },
  { label: "Past Participle", form: "pp", prompt: "Choose the past participle form." },
];

const storedDifficulty = safeGet(localStorage, "selectedDifficulty");
const allowedDifficulties = ["easy", "medium", "hard"];
const difficulty = allowedDifficulties.includes(storedDifficulty) ? storedDifficulty : "easy";
const filteredVerbs = verbs.filter(v => v.difficulty === difficulty);

const tenseLabel = document.getElementById("tenseLabel");
const sentenceEl = document.getElementById("sentence");
const hintEl = document.getElementById("hint");
const choicesEl = document.getElementById("choices");
const feedbackEl = document.getElementById("feedback");
const nextButton = document.getElementById("nextExercise");

let locked = false;
let lastKey = null;

function shuffle(arr) {
  return arr
    .map(v => ({ v, s: Math.random() }))
    .sort((a, b) => a.s - b.s)
    .map(x => x.v);
}

function correctAnswer(verb, template) {
  return verb[template.form];
}

function allAnswerForms() {
  return [...new Set(verbs.flatMap(verb => [verb.base, verb.past, verb.pp]))];
}

function buildChoices(answer) {
  const distractors = shuffle(allAnswerForms().filter(form => form !== answer)).slice(0, 2);
  return shuffle([answer, ...distractors]);
}

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
  sentenceEl.textContent = template.prompt;

  const hintStrong = document.createElement("strong");
  hintStrong.textContent = verb.base;
  hintEl.replaceChildren(document.createTextNode("Verb: "), hintStrong);

  const answer = correctAnswer(verb, template);
  const options = buildChoices(answer);
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

nextButton.addEventListener("click", renderExercise);
renderExercise();
