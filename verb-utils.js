// Shared helpers for pages that ask irregular verb questions.
window.VerbUtils = {
  templates: [
    { label: "Present Simple", form: "base" },
    { label: "Past Simple", form: "past" },
    { label: "Present Perfect", form: "pp" },
  ],

  getSelectedDifficulty() {
    const storedDifficulty = safeGet(localStorage, "selectedDifficulty");
    const allowedDifficulties = ["easy", "medium", "hard"];
    return allowedDifficulties.includes(storedDifficulty) ? storedDifficulty : "easy";
  },

  getVerbsForDifficulty(verbs, difficulty) {
    return verbs.filter(verb => verb.difficulty === difficulty);
  },

  shuffle(arr) {
    return arr
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(item => item.value);
  },

  correctAnswer(verb, template) {
    return verb[template.form];
  },
};
