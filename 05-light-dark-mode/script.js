const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector('#nav');
const toggleIcon = document.querySelector('#toggle-icon');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');

// Function to toggle between dark and light modes
function toggleDarkMode(isDarkMode) {
    const navColor = isDarkMode ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    const textBoxColor = isDarkMode ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    const toggleText = isDarkMode ? 'Dark Mode' : 'Light Mode';
    const toggleIconClass = isDarkMode ? ['fa-sun', 'fa-moon'] : ['fa-moon', 'fa-sun'];
    const imageSuffix = isDarkMode ? '_dark' : '_light';

    nav.style.backgroundColor = navColor;
    textBox.style.backgroundColor = textBoxColor;
    toggleIcon.children[0].textContent = toggleText;
    toggleIcon.children[1].classList.replace(toggleIconClass[0], toggleIconClass[1]);
    image1.src = `img/undraw_proud_coder${imageSuffix}.svg`;
    image2.src = `img/undraw_feeling_proud${imageSuffix}.svg`;
    image3.src = `img/undraw_conceptual_idea${imageSuffix}.svg`;
}

// Switch Theme Dynamically
function switchTheme(event) {
    const isDarkMode = event.target.checked;
    if (isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }

    toggleDarkMode(isDarkMode);
}

toggleSwitch.addEventListener('change', switchTheme);
