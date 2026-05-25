// ── Theme (dark / light) 
let dark = localStorage.getItem('dark') === 'true';

const style    = document.documentElement.style;
const images   = document.querySelectorAll('.container img');
const ham      = document.querySelector('.ham');
const siteLogo = document.getElementById('siteLogo');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay'); 
const help     = document.getElementById('helpPanel');
const btnGroup = document.getElementById('btnGroup');
const socialContainer = document.querySelector('.social-container');


let menuOpen = false;  
let show = false;

const toggleDark = () => {
  dark = !dark;
  localStorage.setItem('dark', dark);
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
    if (socialContainer) socialContainer.classList.add('dark');  
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

if (overlay) overlay.addEventListener('click', closeMenu);
if (menu) {
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
}

// ── Help panel 
const toggleQues = () => {
  if (help) help.classList.toggle('show');
};

document.addEventListener('click', e => {
  const clickedHelp    = help    && help.contains(e.target);
  const clickedHelpBtn = e.target.closest('.ques');
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
  const savedDiff = localStorage.getItem('selectedDifficulty') || 'easy';

  const moveSlider = btn => {
    const groupRect = btnGroup.getBoundingClientRect();
    const btnRect   = btn.getBoundingClientRect();
    slider.style.left  = (btnRect.left - groupRect.left) + 'px';
    slider.style.width = btnRect.width + 'px';
  };

  const activateDiff = btn => {
    diffBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    localStorage.setItem('selectedDifficulty', btn.dataset.value);
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