const path = require('path');
const { pathToFileURL } = require('url');
const { test, expect } = require('@playwright/test');

const pageUrl = fileName => pathToFileURL(path.join(__dirname, '..', fileName)).href;

const trackPageErrors = page => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  return errors;
};

test('Home page selector and difficulty buttons stay usable', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('index.html'));

  await expect(page.locator('#mainAction')).toHaveText('Learn');
  await expect(page.locator('#mainAction')).toHaveAttribute('href', /learn\.html$/);

  await page.locator('#nextBtn').click();
  await expect(page.locator('#mainAction')).toHaveText('Exercises');
  await expect(page.locator('#mainAction')).toHaveAttribute('href', /exercises\.html$/);

  await page.locator('#nextBtn').click();
  await expect(page.locator('#mainAction')).toHaveText('Exam');
  await expect(page.locator('#mainAction')).toHaveAttribute('href', /exam\.html$/);

  await page.locator('.diff-btn[data-value="medium"]').click();
  await expect(page.locator('.diff-btn[data-value="medium"]')).toHaveAttribute('aria-pressed', 'true');

  await page.locator('.diff-btn[data-value="hard"]').click();
  await expect(page.locator('.diff-btn[data-value="hard"]')).toHaveAttribute('aria-pressed', 'true');

  await page.locator('.diff-btn[data-value="easy"]').click();
  await expect(page.locator('.diff-btn[data-value="easy"]')).toHaveAttribute('aria-pressed', 'true');

  expect(errors).toEqual([]);
});

test('Legal pages load and allow mobile zoom', async ({ page }) => {
  const legalPages = ['mention.html', 'cookies.html', 'confidentialite.html', 'condition.html'];

  for (const legalPage of legalPages) {
    const errors = trackPageErrors(page);

    await page.goto(pageUrl(legalPage));

    await expect(page.locator('meta[name="viewport"]')).toHaveAttribute(
      'content',
      'width=device-width, initial-scale=1.0'
    );
    await expect(page.locator('h1').last()).not.toHaveText('');
    expect(errors).toEqual([]);
  }
});

test('Learn loads verbs, saves views, and keeps Next usable', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('learn.html'));

  await expect(page.locator('#verbPrompt')).not.toHaveText('');
  await expect(page.locator('#nextButton')).toBeEnabled();

  const progressRaw = await page.evaluate(() => window.localStorage.casualEnglishFlashcardProgress || null);
  expect(progressRaw).not.toBeNull();

  const progress = JSON.parse(progressRaw);
  const firstEntry = Object.values(progress)[0];
  expect(firstEntry.views).toBe(1);
  expect(firstEntry.correct).toBe(0);
  expect(firstEntry.wrong).toBe(0);

  await page.locator('#nextButton').click();

  await expect(page.locator('#verbPrompt')).not.toHaveText('');
  expect(errors).toEqual([]);
});

test('Exercises can answer, save progress, and move to next question', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('exercises.html'));

  await expect(page.locator('#sentence')).not.toHaveText('');
  await expect(page.locator('.exercise-choice')).toHaveCount(3);

  await page.locator('.exercise-choice').first().click();
  await expect(page.locator('#feedback')).not.toHaveText('');

  const progressRaw = await page.evaluate(() => window.localStorage.casualEnglishFlashcardProgress || null);
  expect(progressRaw).not.toBeNull();

  const progress = JSON.parse(progressRaw);
  const firstEntry = Object.values(progress)[0];
  expect(firstEntry.views).toBe(1);
  expect(firstEntry.correct + firstEntry.wrong).toBe(1);

  await page.locator('#nextExercise').click();
  await expect(page.locator('.exercise-choice')).toHaveCount(3);
  expect(errors).toEqual([]);
});

test('Exam can complete 10 questions, save progress, and show final result', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('exam.html'));

  for (let question = 0; question < 10; question += 1) {
    await page.locator('.exercise-choice:not([disabled])').first().click();
    await page.locator('#nextExamBtn').click();
  }

  const progressRaw = await page.evaluate(() => window.localStorage.casualEnglishFlashcardProgress || null);
  expect(progressRaw).not.toBeNull();

  const progress = JSON.parse(progressRaw);
  const totalViews = Object.values(progress).reduce((sum, entry) => sum + entry.views, 0);
  expect(totalViews).toBe(10);

  await expect(page.locator('#result')).toBeVisible();
  await expect(page.locator('#resultScore')).toContainText('/ 10');
  await expect(page.locator('#restartBtn')).toBeVisible();
  expect(errors).toEqual([]);
});
