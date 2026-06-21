# ✅ Casual English Testing

This document explains the automated browser tests used by **Casual English**.

The goal is to keep testing simple, useful, and easy to understand.

---

## 🧪 What Playwright is used for

Playwright opens the site in a real browser and checks that important pages still work.

These tests are not meant to replace manual review.

They are a safety net to catch simple regressions before a Pull Request is merged.

---

## 📁 Test files

The browser tests are stored in:

- `tests/smoke.spec.js`

The Playwright configuration is stored in:

- `playwright.config.js`

The GitHub Actions workflow is stored in:

- `.github/workflows/playwright.yml`

---

## ✅ Current checks

The current smoke tests verify that:

- Home can switch between Learn, Exercises, and Exam
- Home can select Easy, Medium, and Hard
- Legal pages load and keep the zoom-friendly viewport
- Learn loads an irregular verb and the Next button stays usable
- Exercises can display a question, accept an answer, and move to the next question
- Exam can complete 10 questions and show the final result screen

They also check that the tested pages do not raise browser JavaScript errors.

---

## ▶️ How to run tests locally

Install dependencies first:

```bash
npm install
```

Then run the tests:

```bash
npm test
```

You can also run the same command explicitly:

```bash
npx playwright test
```

---

## 🤖 When tests run automatically

The Playwright tests run automatically on GitHub when a Pull Request is opened or updated.

This helps verify that important user flows still work after a change.

---

## 🧭 When to add or update a test

Add or update a Playwright test when a change affects:

- Home page navigation or difficulty selection
- Learn navigation
- Exercises questions or answers
- Exam flow or final result
- legal page viewport or layout
- shared JavaScript used by those pages
- important keyboard navigation

Keep tests small and focused.

A good browser test should check one important user flow without becoming hard to read.
