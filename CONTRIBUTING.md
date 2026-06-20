# 🤝 Contributing to Casual English

Thank you for your interest in improving **Casual English**.

This project is a simple educational website focused on helping students learn and practice English irregular verbs.

---

## 📌 Before you start

Please keep contributions simple, clear, and easy to review.

Good contributions include:

- fixing small bugs
- improving accessibility
- improving security or code quality
- adding useful English learning content
- improving documentation

---

## 🗂 Where to make changes

Use this quick guide to find the right file:

- add or edit irregular verbs: `data/irregular-verbs.js`
- update shared verb helpers: `verb-utils.js`
- update the Learn page behavior: `learn.js`
- update the Exercises page behavior: `exercises.js`
- update the Exam page behavior: `exam.js`
- update shared site behavior: `script.js`
- update visual styles: `style.css`
- update project documentation: `README.md`, `CONTRIBUTING.md`, or `docs/architecture.md`

---

## 🛠 How to contribute

1. Fork the repository
2. Create a new branch
3. Make a focused change
4. Test the site manually
5. Open a Pull Request

Example branch names:

- `fix/exam-next-button`
- `docs/update-readme`
- `accessibility/add-skip-link`

---

## ✅ Manual checks

Before opening a Pull Request, please check the pages affected by your change.

For most changes, use this simple checklist:

- open the home page
- open Learn
- open Exercises
- open Exam
- test light mode
- test dark mode
- test mobile display
- test keyboard navigation with `Tab`
- test arrow key navigation where available
- test main buttons and links
- check that GitHub security checks pass

For Learn, check:

- difficulty selection works
- Next works
- Speak works when available
- verb data looks correct

For Exercises, check:

- a question is displayed
- answer choices work
- feedback appears after an answer
- Next moves to another question
- keyboard controls work when available

For Exam, check:

- 10 questions can be completed
- answer choices work
- feedback appears after an answer
- Next moves to another question
- the final badge appears
- Restart Exam works
- keyboard controls work when available

For learning content changes, check:

- verb spelling
- past simple form
- past participle form
- example sentences
- Exercises, Learn, and Exam consistency when relevant

---

## 🔐 Security guidelines

Please avoid unsafe patterns such as:

- inline JavaScript
- external scripts from unknown sources
- unvalidated redirects
- unnecessary external images or resources

Security-related reports should follow the process described in `SECURITY.md`.

---

## ♿ Accessibility guidelines

Please try to keep the site usable with:

- keyboard navigation
- readable text contrast
- meaningful button labels
- clear focus states
- simple page structure

Small accessibility improvements are welcome.

---

## 📄 Pull Request style

A good Pull Request should explain:

- what changed
- why it changed
- how it was tested

Please keep Pull Requests focused on one clear improvement when possible.
