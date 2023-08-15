const imageContainer = document.querySelector('#image-container')
const loader = document.querySelector('#loader')

let photosArray = []

// Unsplash API
const count = 10
const apiKey = 'kwcdDXLFId37XLHv1Kc--xgNR1T6AffoxQ2jYuPM1Gk'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`

// Dry Set Attribute
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key])
    }
}

function displayPhotos() {
    photosArray.forEach((photo) => {
        // Create <a>
        const item = document.createElement('a')
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank'
        })
        // Create img
        const img = document.createElement('img')
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description
        })

        // Stack items
        item.appendChild(img)
        imageContainer.appendChild(item)
    })
}

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl)
        photosArray = await response.json()
        displayPhotos()
    } catch (e) {

    }
}

// On Load
getPhotos()