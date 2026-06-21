/*
 * Shared irregular verb helpers.
 * Used by Exercises and Exam to select difficulty, filter verbs,
 * shuffle choices, and read the correct answer.
 */
const verbUtilsConfig = window.APP_CONFIG || {};
const verbForms = Array.isArray(verbUtilsConfig.verbForms)
  ? verbUtilsConfig.verbForms
  : [
      { label: "Present Simple", form: "base" },
      { label: "Past Simple", form: "past" },
      { label: "Present Perfect", form: "pp" },
    ];
const allowedDifficulties = Array.isArray(verbUtilsConfig.difficulties)
  ? verbUtilsConfig.difficulties
  : ["easy", "medium", "hard"];

window.VerbUtils = {
  templates: verbForms,

  getSelectedDifficulty() {
    const storedDifficulty = safeGet(localStorage, "selectedDifficulty");
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
