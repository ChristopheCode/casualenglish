// ── Safe browser storage helpers
const safeGet = (storage, key) => {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};

const safeSet = (storage, key, value) => {
  try {
    storage.setItem(key, value);
  } catch {}
};

const safeRemove = (storage, key) => {
  try {
    storage.removeItem(key);
  } catch {}
};

// ── Theme (dark / light) 
let dark = safeGet(localStorage, 'dark') === 'true';

const style    = document.documentElement.style;
const images   = document.querySelectorAll('.container img');
const ham      = document.querySelector('.ham');
const siteLogo = document.getElementById('siteLogo');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay'); 
const help     = document.getElementById('helpPanel');
const btnGroup = document.getElementById('btnGroup');
const socialContainer = document.querySelector('.social-container');
const arrowBackIcon = document.querySelector('.arrow-back-icon');
const container = document.querySelector('.container');

if (document.querySelector('.words .footer') && !document.querySelector('link[href="./app-footer.css"]')) {
  const appFooterStyles = document.createElement('link');
  appFooterStyles.rel = 'stylesheet';
  appFooterStyles.href = './app-footer.css';
  document.head.appendChild(appFooterStyles);
}

let menuOpen = false;  
let show = false;

const toggleDark = () => {
  dark = !dark;
  safeSet(localStorage, 'dark', dark);
  applyTheme();
};

const applyTheme = () => {
  const moonImg = document.querySelector('.dark-mode img'); 

  if (dark) {
    if (moonImg)   moonImg.src = './img/sun.svg';
    style.setProperty('--text-color-primary',    '#FFFFFF');
    style.setProperty('--text-color-secondary',  '#2A2727');
    style.setProperty('--bg-color-primary',      '#4B4B4B');
    style.setProperty('--bg-color-secondary',    '#AEAEAE');
    style.setProperty('--button-bg-primary',     '#2A2727');
    style.setProperty('--prog-bar-color',        '#2A2727');
    if (siteLogo) siteLogo.src = './img/logodark.png';
    images.forEach(img => img.classList.add('dark'));
    if (ham) ham.style.filter = 'grayscale() brightness(5)';

    if (btnGroup) btnGroup.classList.add('dark');  
    if (arrowBackIcon) arrowBackIcon.classList.add('dark');
    if (socialContainer) socialContainer.classList.add('dark');  
    if (container) container.classList.add('dark');  
  } else {
    if (moonImg)   moonImg.src = './img/moon.svg';
    style.setProperty('--text-color-primary',    '#0071BC');
    style.setProperty('--text-color-secondary',  '#0071BC');
    style.setProperty('--bg-color-primary',      '#DDE8FD');
    style.setProperty('--bg-color-secondary',    '#FFFFFF88');
    style.setProperty('--button-bg-primary',     '#3662C1');
    style.setProperty('--prog-bar-color',        '#EE6D6B');
    if (siteLogo) siteLogo.src = './img/logo.png';
    images.forEach(img => img.classList.remove('dark'));
    if (ham) ham.style.filter = menuOpen ? 'grayscale() brightness(5)' : '';
    if (btnGroup) btnGroup.classList.remove('dark');  
    if (container) container.classList.remove('dark');
    if (arrowBackIcon) arrowBackIcon.classList.remove('dark');
    if (socialContainer) socialContainer.classList.remove('dark'); 
  }
};

applyTheme();


// ── Menu (burger)
const closeMenu = () => {
  menuOpen = false;
  if (menu)    menu.classList.remove('show');
  if (overlay) overlay.classList.remove('show');
  if (ham)     ham.style.filter = dark ? 'grayscale() brightness(5)' : '';
};

const toggleMenu = () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    if (menu)    menu.classList.add('show');
    if (overlay) overlay.classList.add('show');
    if (ham)     ham.style.filter = 'grayscale() brightness(5)';
  } else {
    closeMenu();
  }
};

if (ham && !ham.hasAttribute('onclick')) ham.addEventListener('click', toggleMenu);
const darkModeButton = document.querySelector('.dark-mode');
if (darkModeButton && !darkModeButton.hasAttribute('onclick')) darkModeButton.addEventListener('click', toggleDark);

if (overlay) overlay.addEventListener('click', closeMenu);
if (menu) {
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

// Arrow Back Button Previous page
document.querySelector('.back-button')?.addEventListener('click', () => {
  const back = safeGet(sessionStorage, 'backPage');
  if (back) safeRemove(sessionStorage, 'backPage'); // clean up
  if (back) {
    try {
      const backUrl = new URL(back, window.location.origin);
      if (backUrl.origin === window.location.origin) {
        window.location.href = backUrl.pathname + backUrl.search + backUrl.hash;
      } else {
        window.history.back(); // fallback
      }
    } catch {
      window.history.back(); // fallback
    }
  } else {
    window.history.back(); // fallback
  }
});


// ── Help panel 
const toggleQues = () => {
  if (help) help.classList.toggle('show');
};

const helpButton = document.querySelector('.ques');
if (helpButton && !helpButton.hasAttribute('onclick')) helpButton.addEventListener('click', toggleQues);

document.addEventListener('click', e => {
  const clickedHelp    = help    && help.contains(e.target);
  const clickedHelpBtn = e.target instanceof Element && e.target.closest('.ques');
  if (!clickedHelp && !clickedHelpBtn && help) {
    help.classList.remove('show');
  }
});

// ── Home page selector (Learn / Exercises / Exam) ──────
const pages = [
  { name: 'Learn',     link: './iregularverbsenglish.html' },
  { name: 'Exercises', link: './exercises.html'            },
  { name: 'Exam',      link: './exam.html'                 },
];

let currentIndex = 0;

const mainAction = document.getElementById('mainAction');
const prevBtn    = document.getElementById('prevBtn');
const nextBtn    = document.getElementById('nextBtn');

if (mainAction && prevBtn && nextBtn) {
  const updateSelector = () => {
    mainAction.textContent = pages[currentIndex].name;
    mainAction.href        = pages[currentIndex].link;
  };

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    updateSelector();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % pages.length;
    updateSelector();
  });

  updateSelector();
}

// ── Difficulty buttons 
const slider   = document.getElementById('slider');

if (btnGroup && slider) {
  const diffBtns = btnGroup.querySelectorAll('.diff-btn');
  const allowedDiffs = ['easy', 'medium', 'hard'];
  const storedDiff = safeGet(localStorage, 'selectedDifficulty');
  const savedDiff = allowedDiffs.includes(storedDiff) ? storedDiff : 'easy';

  const moveSlider = btn => {
    const groupRect = btnGroup.getBoundingClientRect();
    const btnRect   = btn.getBoundingClientRect();
    slider.style.left  = (btnRect.left - groupRect.left) + 'px';
    slider.style.width = btnRect.width + 'px';
  };

  const activateDiff = btn => {
    const selectedDiff = allowedDiffs.includes(btn.dataset.value) ? btn.dataset.value : 'easy';
    diffBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    safeSet(localStorage, 'selectedDifficulty', selectedDiff);
    moveSlider(btn);
  };

  diffBtns.forEach(btn => {
    btn.addEventListener('click', () => activateDiff(btn));
  });

  const initialBtn = [...diffBtns].find(b => b.dataset.value === savedDiff) || diffBtns[0];

  // Initialize as fast as possible without waiting for the image/logo to finish
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => activateDiff(initialBtn));
  } else {
    activateDiff(initialBtn);
  }

  // Especially for HP when changing screen orientation (Portrait <-> Landscape)
  window.addEventListener('resize', () => {
    const active = btnGroup.querySelector('.diff-btn.active');
    if (active) moveSlider(active);
  });
}

// Keyboard controls for Exercises answer choices
const setupExerciseKeyboardControls = () => {
  const choicesContainer = document.getElementById('choices');
  if (!choicesContainer) return;

  const choiceSelector = '.exercise-choice';
  const moveKeys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];

  choicesContainer.addEventListener('click', event => {
    const clickedChoice = event.target instanceof Element && event.target.closest(choiceSelector);
    if (!clickedChoice) return;

    window.setTimeout(() => {
      document.getElementById('nextExercise')?.focus();
    }, 0);
  });

  document.addEventListener('keydown', event => {
    if (!moveKeys.includes(event.key)) return;

    const choices = [...choicesContainer.querySelectorAll(choiceSelector)]
      .filter(choice => !choice.disabled);

    if (choices.length === 0) return;

    event.preventDefault();

    const currentIndex = choices.indexOf(document.activeElement);
    const movingForward = event.key === 'ArrowDown' || event.key === 'ArrowRight';

    if (currentIndex === -1) {
      choices[movingForward ? 0 : choices.length - 1].focus();
      return;
    }

    const nextIndex = movingForward
      ? (currentIndex + 1) % choices.length
      : (currentIndex - 1 + choices.length) % choices.length;

    choices[nextIndex].focus();
  });
};

setupExerciseKeyboardControls();

// block zoom in mobile
document.addEventListener('touchmove', (e) => {
  if (e.touches.length > 1 || (e.scale && e.scale !== 1)) {
    e.preventDefault();
  }
}, { passive: false });