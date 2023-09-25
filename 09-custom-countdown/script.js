const inputContainer = document.querySelector('#input-container')
const countdownForm = document.querySelector('#countdownForm')
const dateEl = document.querySelector('#date-picker')

const countdownEl = document.querySelector('#countdown')

let countdownTitle = ''
let countdownDate = ''

let countdownValue = Date;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0]
dateEl.setAttribute('min', today)

// Form Handler
function updateCountdown(e) {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value

    countdownValue = new dateEl(countdownDate).getTime()
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown)