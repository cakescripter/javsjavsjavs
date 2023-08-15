const quoteContainer = document.querySelector('#quote-container')
const quoteText = document.querySelector('#quote')
const authorText = document.querySelector('#author')
const twitterBtn = document.querySelector('#twitter')
const newQuoteBtn = document.querySelector('#new-quote')
const loader = document.querySelector('#loader')

let apiQuotes = [];

// Show Loading
function loading() {
    loading.hidden = false
    quoteContainer.hidden = true
}

// Hide Loading
function complete() {
    loader.hidden = true
    quoteContainer.hidden = false
}

// Show New Quote
function newQuote() {
    loading()
    // Pick random
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    // Check if Author unknown
    if (!quote.author) {
        authorText.textContent = 'Unknown'
    } else {
        authorText.textContent = quote.author
    }
    // Check quote length
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text
    complete()
}

// Get Quotes from API
async function getQuotes() {
    loading()
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {

    }
}

// Tweet Quote
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl, '_blank')
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote)
twitterBtn.addEventListener('click', tweetQuote)

//on load
getQuotes()