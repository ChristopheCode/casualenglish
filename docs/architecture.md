# 🧱 Casual English Architecture

This document explains how the main files of **Casual English** are organized.

The goal is to keep the project simple, readable, and easy to improve.

---

## 📌 Main idea

Casual English is a vanilla frontend project.

It uses:

- HTML for page structure
- CSS for visual design
- JavaScript for page behavior
- one shared data file for irregular verbs

There is no framework or build tool for now. This keeps the project easy to open, read, and test.

---

## 📚 Data

The irregular verb list is stored in:

- `data/irregular-verbs.js`

This file is the single source of truth for irregular verbs.

Each verb should include:

- base form
- past simple form
- past participle form
- difficulty level
- example sentences

When a verb is added or corrected here, the change can be reused by Learn, Exercises, and Exam.

---

## ⚙️ Shared configuration

Common app settings are stored in:

- `app-config.js`

This file is the single place for small shared settings used by several pages.

Examples:

- difficulty levels
- home page links
- exam question count
- verb form labels

When a shared setting changes here, the pages that read `APP_CONFIG` can reuse the same value.

---

## 🧠 Shared logic

Common verb helper functions are stored in:

- `verb-utils.js`

This file contains small reusable helpers used by Exercises and Exam.

Examples:

- choose the selected difficulty
- filter verbs by difficulty
- shuffle answer choices
- get the correct answer for a verb form

The goal is to avoid copying the same logic in several page files.

---

## 📄 Page files

Each main page keeps its own behavior in a matching JavaScript file.

- `learn.html` uses `learn.js`
- `exercises.html` uses `exercises.js`
- `exam.html` uses `exam.js`
- `index.html` uses `script.js`

This makes the project easier to read because each page has a clear pair of files.

---

## 🎨 Design

The main visual style is stored in:

- `style.css`

This file contains the shared design for the site.

It includes:

- layout
- buttons
- cards
- dark mode
- mobile styles
- accessibility helpers such as skip links and focus states

CSS comments are used to separate the main sections and make the file easier to scan.

---

## 🔐 Security checks

Automatic checks are stored in:

- `.github/workflows/security-checks.yml`

These checks help detect risky patterns before changes are merged.

They check for issues such as:

- unsafe scripts
- external resources
- missing security meta tags
- Git conflict markers
- invalid irregular verb data

---

## ✅ How to add a new irregular verb

1. Open `data/irregular-verbs.js`
2. Add the new verb entry
3. Include all required forms and example sentences
4. Open a Pull Request
5. Let the automatic checks run
6. Manually test Learn, Exercises, and Exam if the data change affects them

---

## 🧭 Current architecture goal

The project should stay beginner-friendly.

A good change should be:

- small
- easy to review
- easy to test manually
- consistent with the existing file structure

Future improvements can continue step by step without rewriting the whole project at once.
