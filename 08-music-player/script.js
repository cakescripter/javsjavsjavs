const img = document.querySelector('img')
const title = document.querySelector('#title')
const artist = document.querySelector('#artist')
const music = document.querySelector('audio')

const progressContainer = document.querySelector('#progress-container')
const progress = document.querySelector('#progress')

const currentTimeEl = document.querySelector('#current-time')
const durationEl = document.querySelector('#duration')

const prevBtn = document.querySelector('#prev')
const playBtn = document.querySelector('#play')
const nextBtn = document.querySelector('#next')

const songs = [
    {
        name: 'jacinto-1',
        displayName: 'Electric Chill Machine',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-2',
        displayName: 'Seven Nation Army (Remix)',
        artist: 'Jacinto Design',
    },
    {
        name: 'jacinto-3',
        displayName: 'Goodnight, Disco Queen',
        artist: 'Jacinto Design',
    },
]

let isPlaying = false;

function playSong() {
    isPlaying = true
    playBtn.classList.replace('fa-play', 'fa-pause')
    playBtn.setAttribute('title', 'Pause')
    music.play()
}
function pauseSong() {
    isPlaying = false
    playBtn.classList.replace('fa-pause', 'fa-play')
    playBtn.setAttribute('title', 'Play')
    music.pause()
}

function loadSong(song) {
    title.textContent = song.displayName
    artist.textContent = song.artist
    music.src = `music/${song.name}.mp3`
    img.src = `img/${song.name}.jpg`
}

let songIndex = 0;

function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length - 1
    }
    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++
    if (songIndex > songs.length - 1) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

//Wowzers
function updateProgressBar(e) {
    if (isPlaying) {
        const { currentTime, duration } = e.srcElement
        // Update progress bar width
        const progressPercent = (currentTime / duration) * 100
        progress.style.width = `${progressPercent}%`
        //Calculate display for duration
        const durationMinutes = Math.floor(duration / 60)
        // remainder %
        let durationSec = Math.floor(duration % 60)
        if (durationSec < 10) {
            durationSec = `0${durationSec}`
        }
        //Delay switching duration to avoid NaN
        if (durationSec) {
            durationEl.textContent = `${durationMinutes}:${durationSec}`
        }
        //Calculate display for currentTime
        const currentMinutes = Math.floor(currentTime / 60)
        // remainder %
        let currentSec = Math.floor(currentTime % 60)
        if (currentSec < 10) {
            currentSec = `0${currentSec}`
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSec}`
    }
}

function setProgressBar(e) {
    const { duration } = music
    music.currentTime = (e.offsetX / this.clientWidth) * duration
}

// Bottom
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()))

loadSong(songs[songIndex])

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
music.addEventListener('timeupdate', updateProgressBar)
music.addEventListener('ended', nextSong)
progressContainer.addEventListener('click', setProgressBar)