const path = require('path');
const { pathToFileURL } = require('url');
const { test, expect } = require('@playwright/test');

const pageUrl = fileName => pathToFileURL(path.join(__dirname, '..', fileName)).href;

const trackPageErrors = page => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  return errors;
};

test('Learn loads verbs and Next stays usable', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('learn.html'));

  await expect(page.locator('#verbPrompt')).not.toHaveText('');
  await expect(page.locator('#nextButton')).toBeEnabled();

  await page.locator('#nextButton').click();

  await expect(page.locator('#verbPrompt')).not.toHaveText('');
  expect(errors).toEqual([]);
});

test('Exercises can answer and move to next question', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('exercises.html'));

  await expect(page.locator('#sentence')).not.toHaveText('');
  await expect(page.locator('.exercise-choice')).toHaveCount(3);

  await page.locator('.exercise-choice').first().click();
  await expect(page.locator('#feedback')).not.toHaveText('');

  await page.locator('#nextExercise').click();
  await expect(page.locator('.exercise-choice')).toHaveCount(3);
  expect(errors).toEqual([]);
});

test('Exam can complete 10 questions and show final result', async ({ page }) => {
  const errors = trackPageErrors(page);

  await page.goto(pageUrl('exam.html'));

  for (let question = 0; question < 10; question += 1) {
    await page.locator('.exercise-choice:not([disabled])').first().click();
    await page.locator('#nextExamBtn').click();
  }

  await expect(page.locator('#result')).toBeVisible();
  await expect(page.locator('#resultScore')).toContainText('/ 10');
  await expect(page.locator('#restartBtn')).toBeVisible();
  expect(errors).toEqual([]);
});
