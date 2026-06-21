/*
 * Flashcard progress helper.
 * Stores local learning progress for irregular verbs without sending data anywhere.
 */
(function () {
  const STORAGE_KEY = "casualEnglishFlashcardProgress";
  const REVIEW_DELAYS_DAYS = [0, 1, 3, 7, 14, 30];

  const readProgress = () => {
    try {
      const raw = typeof safeGet === "function"
        ? safeGet(localStorage, STORAGE_KEY)
        : localStorage[STORAGE_KEY];
      const parsed = JSON.parse(raw || "{}");

      return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
    } catch {
      return {};
    }
  };

  const writeProgress = progress => {
    try {
      const value = JSON.stringify(progress);

      if (typeof safeSet === "function") {
        safeSet(localStorage, STORAGE_KEY, value);
      } else {
        localStorage[STORAGE_KEY] = value;
      }
    } catch {}
  };

  const keyForVerb = verb => [verb.base, verb.past, verb.pp]
    .map(value => String(value || "").trim().toLowerCase())
    .join("|");

  const addDays = (date, days) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + days);
    return nextDate;
  };

  const emptyProgress = () => ({
    views: 0,
    correct: 0,
    wrong: 0,
    level: 0,
    lastSeen: null,
    nextReview: null,
  });

  const recordAnswer = (verb, isCorrect) => {
    if (!verb || typeof verb !== "object") return null;

    const progress = readProgress();
    const key = keyForVerb(verb);
    const current = { ...emptyProgress(), ...progress[key] };
    const now = new Date();

    current.views += 1;
    current.correct += isCorrect ? 1 : 0;
    current.wrong += isCorrect ? 0 : 1;
    current.level = isCorrect
      ? Math.min(current.level + 1, REVIEW_DELAYS_DAYS.length - 1)
      : 0;
    current.lastSeen = now.toISOString();
    current.nextReview = addDays(now, REVIEW_DELAYS_DAYS[current.level]).toISOString();

    progress[key] = current;
    writeProgress(progress);

    return current;
  };

  const recordView = verb => {
    if (!verb || typeof verb !== "object") return null;

    const progress = readProgress();
    const key = keyForVerb(verb);
    const current = { ...emptyProgress(), ...progress[key] };

    current.views += 1;
    current.lastSeen = new Date().toISOString();

    progress[key] = current;
    writeProgress(progress);

    return current;
  };

  const getProgress = verb => {
    if (!verb || typeof verb !== "object") return emptyProgress();

    return { ...emptyProgress(), ...readProgress()[keyForVerb(verb)] };
  };

  window.FlashcardProgress = {
    storageKey: STORAGE_KEY,
    getProgress,
    recordAnswer,
    recordView,
  };
}());
