const verbs = [
  // EASY
  { base: "be", past: "was were", pp: "been", difficulty: "easy", sentences: { base: "I want to ____ more confident.", past: "Yesterday I ____ at home.", pp: "I have ____ very busy this week." } },
  { base: "become", past: "became", pp: "become", difficulty: "easy", sentences: { base: "I want to ____ a designer.", past: "I ____ interested in English last year.", pp: "I have ____ more relaxed recently." } },
  { base: "begin", past: "began", pp: "begun", difficulty: "easy", sentences: { base: "Classes ____ at 9 a.m.", past: "The lesson ____ late yesterday.", pp: "The meeting has ____ already." } },
  { base: "bend", past: "bent", pp: "bent", difficulty: "easy", sentences: { base: "I can ____ this wire by hand.", past: "She ____ the spoon yesterday.", pp: "The metal has ____ out of shape." } },
  { base: "bet", past: "bet", pp: "bet", difficulty: "easy", sentences: { base: "I never ____ money on games.", past: "He ____ five euros yesterday.", pp: "I have ____ on that team before." } },
  { base: "break", past: "broke", pp: "broken", difficulty: "easy", sentences: { base: "I try not to ____ my phone.", past: "I ____ my glasses yesterday.", pp: "I have ____ the rule once." } },
  { base: "bring", past: "brought", pp: "brought", difficulty: "easy", sentences: { base: "I always ____ my notebook.", past: "I ____ a gift yesterday.", pp: "They have ____ enough food." } },
  { base: "build", past: "built", pp: "built", difficulty: "easy", sentences: { base: "I want to ____ a small website.", past: "We ____ a shelf yesterday.", pp: "They have ____ a new school." } },
  { base: "buy", past: "bought", pp: "bought", difficulty: "easy", sentences: { base: "I ____ bread every morning.", past: "I ____ a new jacket yesterday.", pp: "I have ____ too many snacks." } },
  { base: "come", past: "came", pp: "come", difficulty: "easy", sentences: { base: "I ____ home at 6 p.m.", past: "They ____ late yesterday.", pp: "They have ____ back already." } },
  { base: "cost", past: "cost", pp: "cost", difficulty: "easy", sentences: { base: "Tickets ____ ten euros.", past: "The repair ____ a lot yesterday.", pp: "It has ____ too much money." } },
  { base: "cut", past: "cut", pp: "cut", difficulty: "easy", sentences: { base: "I ____ vegetables every evening.", past: "I ____ my finger yesterday.", pp: "I have ____ the paper already." } },
  { base: "do", past: "did", pp: "done", difficulty: "easy", sentences: { base: "I ____ my homework after school.", past: "I ____ my best yesterday.", pp: "I have ____ the work already." } },
  { base: "drink", past: "drank", pp: "drunk", difficulty: "easy", sentences: { base: "I ____ water every day.", past: "I ____ coffee this morning.", pp: "I have ____ enough today." } },
  { base: "drive", past: "drove", pp: "driven", difficulty: "easy", sentences: { base: "I ____ to work every day.", past: "I ____ to Lyon yesterday.", pp: "I have ____ all night." } },
  { base: "eat", past: "ate", pp: "eaten", difficulty: "easy", sentences: { base: "I ____ breakfast at 7.", past: "We ____ pizza yesterday.", pp: "I have ____ too much today." } },
  { base: "feed", past: "fed", pp: "fed", difficulty: "easy", sentences: { base: "I ____ the cat every morning.", past: "I ____ the dog yesterday.", pp: "I have ____ the baby already." } },
  { base: "find", past: "found", pp: "found", difficulty: "easy", sentences: { base: "I ____ this app useful.", past: "I ____ my keys yesterday.", pp: "I have ____ the answer." } },
  { base: "get", past: "got", pp: "gotten got", difficulty: "easy", sentences: { base: "I ____ up early.", past: "I ____ a message yesterday.", pp: "I have ____ better at English." } },
  { base: "give", past: "gave", pp: "given", difficulty: "easy", sentences: { base: "I ____ my friend a gift.", past: "I ____ you the link yesterday.", pp: "I have ____ you my answer." } },
  { base: "go", past: "went", pp: "gone", difficulty: "easy", sentences: { base: "I ____ to school by bus.", past: "We ____ to Paris yesterday.", pp: "They have ____ home already." } },
  { base: "have", past: "had", pp: "had", difficulty: "easy", sentences: { base: "I ____ a lot of work today.", past: "I ____ a great time yesterday.", pp: "I have ____ enough practice." } },
  { base: "hit", past: "hit", pp: "hit", difficulty: "easy", sentences: { base: "I ____ the ball hard.", past: "The ball ____ the window yesterday.", pp: "The car has ____ the wall." } },
  { base: "hurt", past: "hurt", pp: "hurt", difficulty: "easy", sentences: { base: "Loud noise can ____ my ears.", past: "I ____ my knee yesterday.", pp: "I have ____ my back." } },
  { base: "know", past: "knew", pp: "known", difficulty: "easy", sentences: { base: "I ____ the answer.", past: "I ____ her in college.", pp: "I have ____ him for years." } },
  { base: "let", past: "let", pp: "let", difficulty: "easy", sentences: { base: "My parents ____ me cook dinner.", past: "She ____ me borrow her pen yesterday.", pp: "They have ____ us in." } },
  { base: "make", past: "made", pp: "made", difficulty: "easy", sentences: { base: "I ____ coffee every morning.", past: "I ____ a cake yesterday.", pp: "I have ____ a big mistake." } },
  { base: "put", past: "put", pp: "put", difficulty: "easy", sentences: { base: "I ____ my keys on the table.", past: "I ____ the box there yesterday.", pp: "I have ____ everything away." } },
  { base: "run", past: "ran", pp: "run", difficulty: "easy", sentences: { base: "I ____ 5 km every week.", past: "I ____ to catch the bus yesterday.", pp: "I have ____ out of time." } },
  { base: "say", past: "said", pp: "said", difficulty: "easy", sentences: { base: "I always ____ hello.", past: "I ____ sorry yesterday.", pp: "I have ____ it many times." } },
  { base: "see", past: "saw", pp: "seen", difficulty: "easy", sentences: { base: "I ____ my friends often.", past: "I ____ a great movie yesterday.", pp: "I have ____ this place before." } },
  { base: "set", past: "set", pp: "set", difficulty: "easy", sentences: { base: "I ____ my alarm at night.", past: "I ____ the table yesterday.", pp: "I have ____ a new goal." } },
  { base: "show", past: "showed", pp: "shown showed", difficulty: "easy", sentences: { base: "I ____ my ID at the door.", past: "She ____ me the photo yesterday.", pp: "They have ____ us the way." } },
  { base: "shut", past: "shut", pp: "shut", difficulty: "easy", sentences: { base: "Please ____ the door quietly.", past: "I ____ the window yesterday.", pp: "The shop has ____ early." } },
  { base: "take", past: "took", pp: "taken", difficulty: "easy", sentences: { base: "I ____ the bus to work.", past: "I ____ a photo yesterday.", pp: "I have ____ notes in class." } },
  { base: "tell", past: "told", pp: "told", difficulty: "easy", sentences: { base: "I ____ the truth.", past: "I ____ you yesterday.", pp: "I have ____ you many times." } },
  { base: "think", past: "thought", pp: "thought", difficulty: "easy", sentences: { base: "I ____ about my future.", past: "I ____ it was easy yesterday.", pp: "I have ____ about it a lot." } },
  { base: "understand", past: "understood", pp: "understood", difficulty: "easy", sentences: { base: "I ____ the question now.", past: "I ____ the lesson yesterday.", pp: "I have ____ the problem." } },
  { base: "wake", past: "woke", pp: "woken", difficulty: "easy", sentences: { base: "I ____ up at 7 a.m.", past: "I ____ up late yesterday.", pp: "I have ____ up early all week." } },
  { base: "wear", past: "wore", pp: "worn", difficulty: "easy", sentences: { base: "I ____ jeans at work.", past: "I ____ a coat yesterday.", pp: "I have ____ these shoes before." } },
  { base: "win", past: "won", pp: "won", difficulty: "easy", sentences: { base: "I want to ____ this game.", past: "Our team ____ yesterday.", pp: "They have ____ three matches." } },
  { base: "write", past: "wrote", pp: "written", difficulty: "easy", sentences: { base: "I ____ emails every day.", past: "I ____ a letter yesterday.", pp: "I have ____ a new story." } },
  { base: "read", past: "read", pp: "read", difficulty: "easy", sentences: { base: "I ____ a book every week.", past: "I ____ this article yesterday.", pp: "I have ____ it already." } },
  { base: "speak", past: "spoke", pp: "spoken", difficulty: "easy", sentences: { base: "I ____ English at work.", past: "I ____ to him yesterday.", pp: "I have ____ to the manager." } },
  { base: "meet", past: "met", pp: "met", difficulty: "easy", sentences: { base: "I ____ my friends on weekends.", past: "I ____ him yesterday.", pp: "I have ____ her before." } },
  { base: "leave", past: "left", pp: "left", difficulty: "easy", sentences: { base: "I ____ home at 8.", past: "I ____ early yesterday.", pp: "I have ____ my bag at home." } },

  // MEDIUM
  { base: "beat", past: "beat", pp: "beaten", difficulty: "medium", sentences: { base: "We often ____ our record in training.", past: "We ____ them last night.", pp: "They have ____ every team so far." } },
  { base: "bite", past: "bit", pp: "bitten", difficulty: "medium", sentences: { base: "Dogs sometimes ____ when they are scared.", past: "A mosquito ____ me last night.", pp: "I have ____ my tongue before." } },
  { base: "blow", past: "blew", pp: "blown", difficulty: "medium", sentences: { base: "The wind can ____ hard in winter.", past: "The storm ____ the door open.", pp: "The candle has ____ out." } },
  { base: "burst", past: "burst", pp: "burst", difficulty: "medium", sentences: { base: "Balloons can ____ near heat.", past: "The pipe ____ yesterday.", pp: "The bag has ____ open." } },
  { base: "catch", past: "caught", pp: "caught", difficulty: "medium", sentences: { base: "I ____ the bus at 8.", past: "I ____ a cold last week.", pp: "I have ____ a lot of fish." } },
  { base: "choose", past: "chose", pp: "chosen", difficulty: "medium", sentences: { base: "I usually ____ the simple option.", past: "I ____ the wrong one yesterday.", pp: "I have ____ a new plan." } },
  { base: "draw", past: "drew", pp: "drawn", difficulty: "medium", sentences: { base: "I ____ pictures for fun.", past: "I ____ a map for you yesterday.", pp: "I have ____ this many times." } },
  { base: "fall", past: "fell", pp: "fallen", difficulty: "medium", sentences: { base: "I sometimes ____ asleep early.", past: "I ____ down the stairs yesterday.", pp: "The leaves have ____ already." } },
  { base: "feel", past: "felt", pp: "felt", difficulty: "medium", sentences: { base: "I ____ better today.", past: "I ____ sick yesterday.", pp: "I have ____ nervous all day." } },
  { base: "fight", past: "fought", pp: "fought", difficulty: "medium", sentences: { base: "They ____ for their rights.", past: "They ____ last night.", pp: "They have ____ many battles." } },
  { base: "fly", past: "flew", pp: "flown", difficulty: "medium", sentences: { base: "I ____ to London once a year.", past: "I ____ to Madrid last month.", pp: "I have ____ many times." } },
  { base: "forget", past: "forgot", pp: "forgotten", difficulty: "medium", sentences: { base: "I sometimes ____ names.", past: "I ____ my password yesterday.", pp: "I have ____ my keys again." } },
  { base: "freeze", past: "froze", pp: "frozen", difficulty: "medium", sentences: { base: "Water can ____ in winter.", past: "The lake ____ last night.", pp: "My hands have ____ outside." } },
  { base: "grow", past: "grew", pp: "grown", difficulty: "medium", sentences: { base: "Plants ____ fast in spring.", past: "I ____ taller when I was a teen.", pp: "The company has ____ a lot." } },
  { base: "hang", past: "hung", pp: "hung", difficulty: "medium", sentences: { base: "I ____ my coat by the door.", past: "She ____ the picture yesterday.", pp: "They have ____ the lights." } },
  { base: "hear", past: "heard", pp: "heard", difficulty: "medium", sentences: { base: "I ____ music from my room.", past: "I ____ a strange noise yesterday.", pp: "I have ____ this song before." } },
  { base: "hide", past: "hid", pp: "hidden", difficulty: "medium", sentences: { base: "I ____ my wallet in a safe place.", past: "I ____ the gift yesterday.", pp: "I have ____ it somewhere." } },
  { base: "hold", past: "held", pp: "held", difficulty: "medium", sentences: { base: "I ____ the door for you.", past: "I ____ my breath yesterday.", pp: "They have ____ the meeting already." } },
  { base: "keep", past: "kept", pp: "kept", difficulty: "medium", sentences: { base: "I ____ my promises.", past: "I ____ the ticket yesterday.", pp: "I have ____ it for years." } },
  { base: "lead", past: "led", pp: "led", difficulty: "medium", sentences: { base: "Good teachers ____ by example.", past: "She ____ the team yesterday.", pp: "He has ____ the project well." } },
  { base: "lie", past: "lay", pp: "lain", difficulty: "medium", sentences: { base: "I ____ down when I am tired.", past: "The book ____ on the table yesterday.", pp: "I have ____ awake for hours." } },
  { base: "lose", past: "lost", pp: "lost", difficulty: "medium", sentences: { base: "I sometimes ____ my keys.", past: "I ____ my wallet yesterday.", pp: "I have ____ my phone again." } },
  { base: "mean", past: "meant", pp: "meant", difficulty: "medium", sentences: { base: "What does this word ____?", past: "I ____ to call you yesterday.", pp: "I have ____ well all along." } },
  { base: "pay", past: "paid", pp: "paid", difficulty: "medium", sentences: { base: "I ____ by card most days.", past: "I ____ the bill yesterday.", pp: "I have ____ for the tickets." } },
  { base: "ride", past: "rode", pp: "ridden", difficulty: "medium", sentences: { base: "I ____ my bike to work.", past: "I ____ a horse once.", pp: "I have ____ this train many times." } },
  { base: "ring", past: "rang", pp: "rung", difficulty: "medium", sentences: { base: "Bells ____ on Sundays.", past: "The phone ____ twice yesterday.", pp: "The bell has ____ already." } },
  { base: "rise", past: "rose", pp: "risen", difficulty: "medium", sentences: { base: "Prices ____ every year.", past: "The sun ____ early yesterday.", pp: "The temperature has ____ today." } },
  { base: "sell", past: "sold", pp: "sold", difficulty: "medium", sentences: { base: "They ____ fresh bread here.", past: "We ____ our old car yesterday.", pp: "They have ____ all the tickets." } },
  { base: "send", past: "sent", pp: "sent", difficulty: "medium", sentences: { base: "I ____ emails every morning.", past: "I ____ the file yesterday.", pp: "I have ____ you a message." } },
  { base: "shake", past: "shook", pp: "shaken", difficulty: "medium", sentences: { base: "I ____ hands when I meet someone.", past: "I ____ the bottle yesterday.", pp: "I have ____ the box too hard." } },
  { base: "shoot", past: "shot", pp: "shot", difficulty: "medium", sentences: { base: "Photographers ____ many pictures.", past: "She ____ a video yesterday.", pp: "They have ____ the scene twice." } },
  { base: "sing", past: "sang", pp: "sung", difficulty: "medium", sentences: { base: "I ____ in the shower.", past: "We ____ a song yesterday.", pp: "They have ____ this song before." } },
  { base: "sink", past: "sank", pp: "sunk", difficulty: "medium", sentences: { base: "Heavy stones ____ in water.", past: "The boat ____ last night.", pp: "The ship has ____ near the coast." } },
  { base: "sit", past: "sat", pp: "sat", difficulty: "medium", sentences: { base: "I ____ near the window.", past: "I ____ next to her yesterday.", pp: "I have ____ here for an hour." } },
  { base: "sleep", past: "slept", pp: "slept", difficulty: "medium", sentences: { base: "I ____ eight hours.", past: "I ____ badly last night.", pp: "I have ____ enough today." } },
  { base: "spend", past: "spent", pp: "spent", difficulty: "medium", sentences: { base: "I ____ time with my family.", past: "I ____ too much yesterday.", pp: "I have ____ all my money." } },
  { base: "spread", past: "spread", pp: "spread", difficulty: "medium", sentences: { base: "I ____ butter on toast.", past: "The news ____ quickly yesterday.", pp: "The fire has ____ fast." } },
  { base: "stand", past: "stood", pp: "stood", difficulty: "medium", sentences: { base: "I ____ near the door.", past: "I ____ in line yesterday.", pp: "I have ____ here too long." } },
  { base: "steal", past: "stole", pp: "stolen", difficulty: "medium", sentences: { base: "Some people ____ bikes.", past: "Someone ____ my bag yesterday.", pp: "My phone has been ____." } },
  { base: "teach", past: "taught", pp: "taught", difficulty: "medium", sentences: { base: "I ____ English online.", past: "She ____ me yesterday.", pp: "He has ____ for ten years." } },

  // HARD
  { base: "broadcast", past: "broadcast", pp: "broadcast", difficulty: "hard", sentences: { base: "They ____ the news every evening.", past: "They ____ the interview yesterday.", pp: "They have ____ this show many times." } },
  { base: "creep", past: "crept", pp: "crept", difficulty: "hard", sentences: { base: "Cats ____ quietly at night.", past: "I ____ into the room silently.", pp: "The fog has ____ over the hills." } },
  { base: "deal", past: "dealt", pp: "dealt", difficulty: "hard", sentences: { base: "I ____ with problems calmly.", past: "She ____ with the issue yesterday.", pp: "They have ____ with this before." } },
  { base: "dig", past: "dug", pp: "dug", difficulty: "hard", sentences: { base: "I ____ in the garden on weekends.", past: "We ____ a hole yesterday.", pp: "They have ____ all day." } },
  { base: "flee", past: "fled", pp: "fled", difficulty: "hard", sentences: { base: "People ____ when there is danger.", past: "They ____ the city yesterday.", pp: "They have ____ the war." } },
  { base: "forbid", past: "forbade", pp: "forbidden", difficulty: "hard", sentences: { base: "They ____ smoking here.", past: "The teacher ____ phones yesterday.", pp: "They have ____ it for years." } },
  { base: "forgive", past: "forgave", pp: "forgiven", difficulty: "hard", sentences: { base: "I try to ____ people.", past: "I ____ him yesterday.", pp: "I have ____ you." } },
  { base: "kneel", past: "knelt", pp: "knelt", difficulty: "hard", sentences: { base: "I ____ to tie my shoes.", past: "I ____ in the church yesterday.", pp: "They have ____ in front of the statue." } },
  { base: "lay", past: "laid", pp: "laid", difficulty: "hard", sentences: { base: "I ____ the book on the table.", past: "I ____ the keys here yesterday.", pp: "I have ____ everything out." } },
  { base: "lend", past: "lent", pp: "lent", difficulty: "hard", sentences: { base: "I never ____ money.", past: "I ____ ten euros yesterday.", pp: "I have ____ my book to a friend." } },
  { base: "light", past: "lit", pp: "lit", difficulty: "hard", sentences: { base: "I ____ a candle at dinner.", past: "I ____ the fire yesterday.", pp: "They have ____ the room well." } },
  { base: "seek", past: "sought", pp: "sought", difficulty: "hard", sentences: { base: "I ____ help when I need it.", past: "They ____ a solution yesterday.", pp: "They have ____ advice." } },
  { base: "sew", past: "sewed", pp: "sewn", difficulty: "hard", sentences: { base: "I ____ buttons on my shirt.", past: "I ____ it yesterday.", pp: "I have ____ a new dress." } },
  { base: "shine", past: "shone", pp: "shone", difficulty: "hard", sentences: { base: "The stars ____ at night.", past: "The sun ____ brightly yesterday.", pp: "The lamp has ____ all evening." } },
  { base: "shrink", past: "shrank", pp: "shrunk", difficulty: "hard", sentences: { base: "Clothes sometimes ____ in the wash.", past: "My sweater ____ yesterday.", pp: "It has ____ after washing." } },
  { base: "slide", past: "slid", pp: "slid", difficulty: "hard", sentences: { base: "I ____ on the ice in winter.", past: "I ____ on the floor yesterday.", pp: "The box has ____ under the bed." } },
  { base: "spin", past: "spun", pp: "spun", difficulty: "hard", sentences: { base: "The wheel can ____ very fast.", past: "The wheel ____ quickly yesterday.", pp: "It has ____ for a long time." } },
  { base: "split", past: "split", pp: "split", difficulty: "hard", sentences: { base: "I ____ the bill with my friend.", past: "We ____ the pizza yesterday.", pp: "They have ____ the work." } },
  { base: "spring", past: "sprang", pp: "sprung", difficulty: "hard", sentences: { base: "I ____ out of bed in the morning.", past: "The cat ____ onto the table yesterday.", pp: "A new idea has ____ to mind." } },
  { base: "spit", past: "spat", pp: "spat", difficulty: "hard", sentences: { base: "People should not ____ on the street.", past: "He ____ out the bad food yesterday.", pp: "The child has ____ the water out." } },
  { base: "stick", past: "stuck", pp: "stuck", difficulty: "hard", sentences: { base: "I ____ notes on the wall.", past: "I ____ a label on it yesterday.", pp: "The paper has ____ to the table." } },
  { base: "sting", past: "stung", pp: "stung", difficulty: "hard", sentences: { base: "Bees ____ when they feel threatened.", past: "A bee ____ me yesterday.", pp: "I have ____ my hand on a nettle." } },
  { base: "stink", past: "stank", pp: "stunk", difficulty: "hard", sentences: { base: "Trash can ____ in summer.", past: "The room ____ yesterday.", pp: "The fish has ____ all day." } },
  { base: "strike", past: "struck", pp: "struck", difficulty: "hard", sentences: { base: "Lightning can ____ at any time.", past: "Lightning ____ the tree yesterday.", pp: "A good idea has ____ me." } },
  { base: "swear", past: "swore", pp: "sworn", difficulty: "hard", sentences: { base: "I never ____ in front of kids.", past: "I ____ yesterday.", pp: "I have ____ to tell the truth." } },
  { base: "sweep", past: "swept", pp: "swept", difficulty: "hard", sentences: { base: "I ____ the floor on Saturdays.", past: "I ____ the kitchen yesterday.", pp: "I have ____ the whole house." } },
  { base: "swim", past: "swam", pp: "swum", difficulty: "hard", sentences: { base: "I ____ every weekend.", past: "I ____ in the sea yesterday.", pp: "I have ____ 1,000 meters." } },
  { base: "swing", past: "swung", pp: "swung", difficulty: "hard", sentences: { base: "I ____ on the playground.", past: "The door ____ open yesterday.", pp: "The pendulum has ____ for hours." } },
  { base: "tear", past: "tore", pp: "torn", difficulty: "hard", sentences: { base: "I sometimes ____ paper by hand.", past: "I ____ my shirt yesterday.", pp: "My jeans have ____ again." } },
  { base: "throw", past: "threw", pp: "thrown", difficulty: "hard", sentences: { base: "I ____ the ball to you.", past: "I ____ it away yesterday.", pp: "I have ____ the trash out." } },
  { base: "weep", past: "wept", pp: "wept", difficulty: "hard", sentences: { base: "I sometimes ____ during sad movies.", past: "I ____ yesterday.", pp: "I have ____ a lot lately." } },
  { base: "withdraw", past: "withdrew", pp: "withdrawn", difficulty: "hard", sentences: { base: "I ____ cash when I travel.", past: "I ____ money yesterday.", pp: "I have ____ my request." } },
];

const templates = [
  { label: "Present Simple", form: "base" },
  { label: "Past Simple", form: "past" },
  { label: "Present Perfect", form: "pp" },
];

const storedDifficulty = safeGet(localStorage, "selectedDifficulty");
const allowedDifficulties = ["easy", "medium", "hard"];
const difficulty = allowedDifficulties.includes(storedDifficulty) ? storedDifficulty : "easy";
const filteredVerbs = verbs.filter(verb => verb.difficulty === difficulty);

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
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.value);
}

function correctAnswer(verb, template) {
  return verb[template.form];
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
  sentenceEl.textContent = verb.sentences[template.form];

  const hintStrong = document.createElement("strong");
  hintStrong.textContent = verb.base;
  hintEl.replaceChildren(document.createTextNode("Verb: "), hintStrong);

  const answer = correctAnswer(verb, template);
  const options = shuffle([verb.base, verb.past, verb.pp]);
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
