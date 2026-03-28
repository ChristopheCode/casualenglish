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

const swapDarkIcon = (iconName) => {
  const btn = document.querySelector('.dark-mode');
  if (!btn) return;
  btn.innerHTML = `<i data-lucide="${iconName}"></i>`;
  if (typeof lucide !== 'undefined') lucide.createIcons();
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
    swapDarkIcon('sun');
    style.setProperty("--text-color-primary", "#FFFFFF");
    style.setProperty("--text-color-secondary", "#2A2727");
    style.setProperty("--bg-color-primary", "#4B4B4B");
    style.setProperty("--bg-color-secondary", "#AEAEAE");
    style.setProperty("--button-bg-primary", "#2A2727");
    style.setProperty("--prog-bar-color", "#2A2727");
    style.setProperty("--btn-float-bg", "rgba(255, 255, 255, 0.1)");
    style.setProperty("--btn-float-icon", "#ffffff");
    style.setProperty("--help-bg", "#1e293b");
    style.setProperty("--help-text", "#e2e8f0");
    if (siteLogo) siteLogo.src = "./img/logodark.png";

    images.forEach((ele) => ele.classList.add('dark'));
    ham.style.filter = 'grayscale() brightness(5)';
  } else {
    swapDarkIcon('moon');
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

  // restore burger icon filter depending on theme
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

// Close menu when clicking outside (overlay)
// (If you use onclick="closeMenu()" in HTML overlay, this is optional but helpful as a fallback.)
if (overlay) {
  overlay.addEventListener('click', closeMenu);
}

// Optional: close menu when a menu link is clicked (nice UX on mobile)
document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// -----------------------------
// Home Swiper slider
// -----------------------------
if (document.querySelector('.home-swiper')) {
  new Swiper('.home-swiper', {
    loop: true,
    navigation: {
      nextEl: '.home-nav-next',
      prevEl: '.home-nav-prev',
    },
  });
}



