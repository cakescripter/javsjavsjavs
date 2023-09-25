const inputContainer = document.querySelector('#input-container')
const countdownForm = document.querySelector('#countdownForm')
const dateEl = document.querySelector('#date-picker')

const countdownEl = document.querySelector('#countdown')
const countdownElTitle = document.querySelector('#countdown-title')
const countdownBtn = document.querySelector('#countdown-button')
const timeElements = document.querySelectorAll('span')

const completeEl = document.querySelector('#complete')
const completeElInfo = document.querySelector('#complete-info')
completeBtn = document.querySelector('#complete-button')

let countdownTitle = ''
let countdownDate = ''
let countdownValue = Date;
let countdownActive

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0]
dateEl.setAttribute('min', today)

function updateDOM() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownValue - now

        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day) / hour)
        const minutes = Math.floor((distance % hour) / minute)
        const seconds = Math.floor((distance % minute) / second)

        inputContainer.hidden = true
        // If the countdown has ended, show complete
        if (distance < 0) {
            countdownEl.hidden = true
            clearInterval(countdownActive)
            completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`
            completeEl.hidden = false
        } else {
            // Else, show the countdown in progress
            countdownElTitle.textContent = `${countdownTitle}`
            timeElements[0].textContent = `${days}`
            timeElements[1].textContent = `${hours}`
            timeElements[2].textContent = `${minutes}`
            timeElements[3].textContent = `${seconds}`
            completeEl.hidden = true
            countdownEl.hidden = false
        }
    }, second)
}



// Form Handler
function updateCountdown(e) {
    e.preventDefault()
    countdownTitle = e.srcElement[0].value
    countdownDate = e.srcElement[1].value

    countdownValue = new Date(countdownDate).getTime()
    updateDOM()
}

// Reset All Values
function reset() {
    //Hide Countdowns, show Input
    countdownEl.hidden = true
    completeEl.hidden = true
    inputContainer.hidden = false
    //Stop the countdown
    clearInterval(countdownActive)
    // Reset values
    let countdownTitle = ''
    let countdownDate = ''
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown)
countdownBtn.addEventListener('click', reset)
completeBtn.addEventListener('click', reset)