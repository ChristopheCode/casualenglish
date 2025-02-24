let dark = (localStorage.getItem('dark') == "true")
if (dark === undefined) {
    localStorage.setItem('dark', 'false')
}

const buttonImg = document.querySelector('.dark-mode img')
const style = document.documentElement.style
const images = document.querySelectorAll('.container img')
const ham = document.querySelector('.ham')

const menu = document.querySelector('.menu')
let show = false

const help = document.querySelector('.help')

const toggleDark = () => {
    dark = !dark
    localStorage.setItem('dark', dark)
    changeTheme()
}

const toggleQues = () => {
    help.classList.toggle('show')
}

const changeTheme = () => {
    if (dark == true) {
        buttonImg.src = './img/sun.svg'
        style.setProperty("--text-color-primary", "#FFFFFF");
        style.setProperty("--text-color-secondary", "#2A2727");
        style.setProperty("--bg-color-primary", "#4B4B4B");
        style.setProperty("--bg-color-secondary", "#AEAEAE");
        style.setProperty("--button-bg-primary", "#2A2727");
        style.setProperty("--prog-bar-color", "#2A2727");
        images.forEach((ele) => {
            ele.classList.add('dark')
        })
        ham.style.filter = 'grayscale() brightness(5)'
    }
    else {
        buttonImg.src = './img/moon.svg'
        style.setProperty("--text-color-primary", "#0071BC");
        style.setProperty("--text-color-secondary", "#0071BC");
        style.setProperty("--bg-color-primary", "#DDE8FD");
        style.setProperty("--bg-color-secondary", "#FFFFFF88");
        style.setProperty("--button-bg-primary", "#3662C1");
        style.setProperty("--prog-bar-color", "#EE6D6B");
        images.forEach((ele) => {
            ele.classList.remove('dark')
        })
        if (show) {
            ham.style.filter = 'grayscale() brightness(5)'
        }
        else {
            ham.style.filter = ''
        }
    }
}

changeTheme()

const toggleMenu = () => {
    show = !show
    if (show) {
        menu.classList.add('show')
        ham.style.filter = 'grayscale() brightness(5)'
    }
    else {
        menu.classList.remove('show')
        if (dark) {
            ham.style.filter = 'grayscale() brightness(5)'
        }
        else {
            ham.style.filter = ''
        }
    }
}