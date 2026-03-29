// -----------------------------
// Theme (dark / light)
// -----------------------------
let dark = (localStorage.getItem('dark') === "true");
if (dark === undefined || dark === null) {
  localStorage.setItem('dark', 'false');
  dark = false;
}

const style = document.documentElement.style;
const images = document.querySelectorAll('.container img');
const ham = document.querySelector('.ham');
const siteLogo = document.getElementById("siteLogo");

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay');
let show = false;

const help = document.querySelector('.help');
const helpOverlay = document.querySelector('.help-overlay');

const swapDarkIcon = (isDark) => {
  const btnImg = document.querySelector('.dark-mode img');
  if (!btnImg) return;
  btnImg.src = isDark ? './img/sun.svg' : './img/moon.svg';
};

const toggleDark = () => {
  dark = !dark;
  localStorage.setItem('dark', dark);
  changeTheme();
};

const toggleQues = () => {
  help.classList.toggle('show');
  if (helpOverlay) helpOverlay.classList.toggle('show');
};

const changeTheme = () => {
  if (dark === true) {
    swapDarkIcon(true);
    style.setProperty("--text-color-primary", "#e8f4ff");
    style.setProperty("--text-color-secondary", "#b8d4f0");
    style.setProperty("--bg-color-primary", "#0c1a2e");
    style.setProperty("--bg-color-secondary", "rgba(20, 42, 78, 0.85)");
    style.setProperty("--button-bg-primary", "#3662C1");
    style.setProperty("--prog-bar-color", "#EE6D6B");
    style.setProperty("--btn-float-bg", "rgba(12, 26, 50, 0.75)");
    style.setProperty("--btn-float-icon", "#7ab3e0");
    style.setProperty("--help-bg", "#0f2040");
    style.setProperty("--help-text", "#d0e8ff");
    style.setProperty("--shadow-card", "0 8px 28px rgba(0,0,0,0.5)");
    style.setProperty("--shadow-btn", "0 4px 0 #1e3a6e");
    style.setProperty("--shadow-btn-pressed", "0 1px 0 #1e3a6e");
    style.setProperty("--correct-color", "#4ade80");
    style.setProperty("--wrong-color", "#f87171");
    if (siteLogo) siteLogo.src = "./img/logodark.png";

    images.forEach((ele) => ele.classList.add('dark'));
    ham.style.filter = 'grayscale() brightness(5)';
  } else {
    swapDarkIcon(false);
    style.setProperty("--text-color-primary", "#0071BC");
    style.setProperty("--text-color-secondary", "#0071BC");
    style.setProperty("--bg-color-primary", "#DDE8FD");
    style.setProperty("--bg-color-secondary", "#FFFFFF88");
    style.setProperty("--button-bg-primary", "#3662C1");
    style.setProperty("--prog-bar-color", "#EE6D6B");
    style.setProperty("--btn-float-bg", "rgba(255, 255, 255, 0.6)");
    style.setProperty("--btn-float-icon", "#3662C1");
    style.setProperty("--help-bg", "#ffffff");
    style.setProperty("--help-text", "#1e293b");
    style.setProperty("--shadow-card", "0 8px 24px rgba(0, 113, 188, 0.12), 0 2px 8px rgba(0,0,0,0.06)");
    style.setProperty("--shadow-btn", "0 4px 0 rgba(0,0,0,0.18)");
    style.setProperty("--shadow-btn-pressed", "0 1px 0 rgba(0,0,0,0.18)");
    style.setProperty("--correct-color", "#22c55e");
    style.setProperty("--wrong-color", "#ef4444");
    if (siteLogo) siteLogo.src = "./img/logo.png";

    images.forEach((ele) => ele.classList.remove('dark'));

    if (show) {
      ham.style.filter = 'grayscale() brightness(5)';
    } else {
      ham.style.filter = '';
    }
  }
};

changeTheme();

// -----------------------------
// Menu (burger) + overlay close
// -----------------------------
const closeMenu = () => {
  show = false;
  menu.classList.remove('show');
  if (overlay) overlay.classList.remove('show');

  if (dark) {
    ham.style.filter = 'grayscale() brightness(5)';
  } else {
    ham.style.filter = '';
  }
};

const toggleMenu = () => {
  show = !show;

  if (show) {
    menu.classList.add('show');
    if (overlay) overlay.classList.add('show');
    ham.style.filter = 'grayscale() brightness(5)';
  } else {
    closeMenu();
  }
};

if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// -----------------------------
// Home slider (infinite loop)
// -----------------------------
if (document.querySelector('.home-swiper')) {
  const wrapper = document.querySelector('.swiper-wrapper');
  const slides = Array.from(wrapper.querySelectorAll('.swiper-slide'));
  const total = slides.length;

  // Prepend clone of last slide, append clone of first slide
  const firstClone = slides[0].cloneNode(true);
  const lastClone  = slides[total - 1].cloneNode(true);
  firstClone.setAttribute('aria-hidden', 'true');
  lastClone.setAttribute('aria-hidden', 'true');
  wrapper.appendChild(firstClone);
  wrapper.insertBefore(lastClone, slides[0]);

  // Start at real first slide (index 1 because of prepended clone)
  let current = 1;
  let transitioning = false;

  wrapper.style.transition = 'none';
  wrapper.style.transform = `translateX(-${current * 100}%)`;

  function slideTo(index) {
    if (transitioning) return;
    transitioning = true;
    current = index;
    wrapper.style.transition = 'transform 0.35s ease';
    wrapper.style.transform = `translateX(-${current * 100}%)`;
  }

  wrapper.addEventListener('transitionend', () => {
    transitioning = false;
    if (current === 0) {
      // Slid left past lastClone → snap to real last slide
      wrapper.style.transition = 'none';
      current = total;
      wrapper.style.transform = `translateX(-${current * 100}%)`;
    } else if (current === total + 1) {
      // Slid right past firstClone → snap to real first slide
      wrapper.style.transition = 'none';
      current = 1;
      wrapper.style.transform = `translateX(-${current * 100}%)`;
    }
  });

  document.querySelector('.home-nav-prev').addEventListener('click', () => slideTo(current - 1));
  document.querySelector('.home-nav-next').addEventListener('click', () => slideTo(current + 1));
}
