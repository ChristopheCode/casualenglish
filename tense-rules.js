(() => {
  const tenses = [
    {
      title: "Present Simple 1/5",
      rule: "Use it for habits, routines, facts, and regular actions. (I/you/we/they + base verb).",
      example: "I go to the gym on Mondays.",
      signals: "always, usually, often, sometimes, never, every day/week"
    },
    {
      title: "Past Simple 2/5",
      rule: "Use it for finished actions in the past. Time is finished (yesterday, last week...).",
      example: "We went to Paris yesterday.",
      signals: "yesterday, last night, last week, in 2020, two days ago"
    },
    {
      title: "Present Perfect 3/5",
      rule: "Use it for life experience, recent actions with a result now, or actions that started in the past and continue now. (have/has + past participle).",
      example: "I have been to London three times.",
      signals: "ever, never, already, yet, just, since, for, recently"
    },
    {
      title: "Present Continuous 4/5",
      rule: "Use it for actions happening now or temporary situations. (am/is/are + verb-ing).",
      example: "I am studying right now.",
      signals: "now, right now, at the moment, today"
    },
    {
      title: "Future, will 5/5",
      rule: "Use it for quick decisions, predictions, promises, and offers. (will + base verb).",
      example: "I will call you later.",
      signals: "tomorrow, later, soon, I think..., probably"
    }
  ];

  let index = 0;

  function renderCard(elements) {
    const tense = tenses[index];
    elements.title.textContent = `(${tense.title})`;
    elements.rule.textContent = tense.rule;
    elements.example.textContent = tense.example;
    elements.signals.textContent = tense.signals;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const elements = {
      title: document.getElementById("tenseTitle"),
      rule: document.getElementById("tenseRule"),
      example: document.getElementById("tenseExample"),
      signals: document.getElementById("tenseSignals"),
      nextButton: document.getElementById("nextTense")
    };

    if (!elements.title || !elements.rule || !elements.example || !elements.signals || !elements.nextButton) {
      return;
    }

    elements.nextButton.addEventListener("click", () => {
      index += 1;
      if (index >= tenses.length) index = 0;
      renderCard(elements);
    });

    renderCard(elements);
  });
})();
