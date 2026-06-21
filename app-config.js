/*
 * Shared application configuration.
 * Keep common values here so future pages and features can reuse
 * the same difficulties, page links, exam size, and verb form labels.
 */
window.APP_CONFIG = {
  difficulties: ["easy", "medium", "hard"],

  pages: [
    { name: "Learn", link: "./learn.html" },
    { name: "Exercises", link: "./exercises.html" },
    { name: "Exam", link: "./exam.html" },
  ],

  examTotalQuestions: 10,

  verbForms: [
    { label: "Present Simple", form: "base" },
    { label: "Past Simple", form: "past" },
    { label: "Present Perfect", form: "pp" },
  ],
};
