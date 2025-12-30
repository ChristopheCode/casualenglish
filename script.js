// -----------------------------
// Theme (dark / light)
// -----------------------------
let dark = (localStorage.getItem('dark') === "true");
if (dark === undefined || dark === null) {
  localStorage.setItem('dark', 'false');
  dark = false;
}

const buttonImg = document.querySelector('.dark-mode img');
const style = document.documentElement.style;
const images = document.querySelectorAll('.container img');
const ham = document.querySelector('.ham');

const menu = document.querySelector('.menu');
const overlay = document.querySelector('.menu-overlay'); // <-- NEW (add overlay div in HTML)
let show = false;

const help = document.querySelector('.help');

const toggleDark = () => {
  dark = !dark;
  localStorage.setItem('dark', dark);
  changeTheme();
};

const toggleQues = () => {
  help.classList.toggle('show');
};

const changeTheme = () => {
  if (dark === true) {
    buttonImg.src = './img/sun.svg';
    style.setProperty("--text-color-primary", "#FFFFFF");
    style.setProperty("--text-color-secondary", "#2A2727");
    style.setProperty("--bg-color-primary", "#4B4B4B");
    style.setProperty("--bg-color-secondary", "#AEAEAE");
    style.setProperty("--button-bg-primary", "#2A2727");
    style.setProperty("--prog-bar-color", "#2A2727");

    images.forEach((ele) => ele.classList.add('dark'));
    ham.style.filter = 'grayscale() brightness(5)';
  } else {
    buttonImg.src = './img/moon.svg';
    style.setProperty("--text-color-primary", "#0071BC");
    style.setProperty("--text-color-secondary", "#0071BC");
    style.setProperty("--bg-color-primary", "#DDE8FD");
    style.setProperty("--bg-color-secondary", "#FFFFFF88");
    style.setProperty("--button-bg-primary", "#3662C1");
    style.setProperty("--prog-bar-color", "#EE6D6B");

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
