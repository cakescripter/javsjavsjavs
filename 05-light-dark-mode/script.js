const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.querySelector('#nav')
const toggleIcon = document.querySelector('#toggle-icon')
const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')
const image3 = document.querySelector('#image3')
const textBox = document.querySelector('#text-box')

function applyTheme(isDarkMode) {
    const theme = isDarkMode ? 'dark' : 'light'
    const bblack = 'rgb(0 0 0 / 50%)'
    const wwhite = 'rgb(255 255 255 / 50%)'
    const navColor = isDarkMode ? bblack : wwhite
    const textBoxColor = isDarkMode ? wwhite : bblack
    const toggleText = isDarkMode ? 'Dark Mode' : 'Light Mode'
    const toggleIconClass = isDarkMode ? ['fa-sun', 'fa-moon'] : ['fa-moon', 'fa-sun']
    const imageSuffix = isDarkMode ? '_dark' : '_light'

    nav.style.backgroundColor = navColor
    textBox.style.backgroundColor = textBoxColor
    toggleIcon.children[0].textContent = toggleText
    toggleIcon.children[1].classList.replace(toggleIconClass[0], toggleIconClass[1])
    image1.src = `img/undraw_proud_coder${imageSuffix}.svg`
    image2.src = `img/undraw_feeling_proud${imageSuffix}.svg`
    image3.src = `img/undraw_conceptual_idea${imageSuffix}.svg`

    document.documentElement.setAttribute('data-theme', theme)
}

function switchTheme(event) {
    const isDarkMode = event.target.checked
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
    applyTheme(isDarkMode)
}

toggleSwitch.addEventListener('change', switchTheme)

const currentTheme = localStorage.getItem('theme')
if (currentTheme === 'dark') {
    toggleSwitch.checked = true
    applyTheme(true)
} else {
    toggleSwitch.checked = false
    applyTheme(false)
}
