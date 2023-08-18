const button = document.querySelector('#button')
const audioElement = document.querySelector('#audio')
// // Disable/Enable Button
// function toggleButton() {
//     button.disabled = !button.disabled;
// }

// Function to remove old joke from the webpage
function removeOldJoke() {
    const container = document.querySelector('.container');
    const jokeElement = container.querySelector('.joke');
    if (jokeElement) {
        container.removeChild(jokeElement);
    }
}

// Function to display a joke on the webpage
function displayJoke(joke) {
    removeOldJoke(); // Remove old joke if exists
    const jokeElement = document.createElement('p');
    jokeElement.classList.add('joke'); // Add a class to identify the joke paragraph
    jokeElement.textContent = joke;
    document.querySelector('.container').appendChild(jokeElement);
}

// Passing Joke to VoiceRSS API
function tellMe(joke) {
    VoiceRSS.speech({
        key: '9f123720199944cfb42cb7376f33b1dc',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0,
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

// Get Jokes from Joke API
async function getJokes() {
    let joke = '';
    const apiUrl = 'https://v2.jokeapi.dev/joke/Programming';
    // https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`;
        } else {
            joke = data.joke;
        }
        tellMe(joke);
        displayJoke(joke);
        // toggleButton();
    } catch (error) {
        console.log(error);
    }
}


// Event Listeners
button.addEventListener('click', getJokes)
// audioElement.addEventListener('ended', toggleButton)