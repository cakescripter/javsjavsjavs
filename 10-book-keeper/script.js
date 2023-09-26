const modal = document.querySelector('#modal')
const modalShow = document.querySelector('#show-modal')
const modalClose = document.querySelector('#close-modal')
const bookmarkForm = document.querySelector('#bookmark-form')
const websiteNameEl = document.querySelector('#website-name')
const websiteUrlEl = document.querySelector('#website-url')
const bookmarksContainer = document.querySelector('#bookmarks-container')

// Show Modal, Focus on Input
function showModal() {
    modal.classList.add('show-modal')
    websiteNameEl.focus()
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal)
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'))
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false))

function validate(nameValue, urlValue) {
    const expression = /https ?: \/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g
    const regex = new RegExp(expression)
    if (!nameValue || !urlValue) {
        alert('Submit both fields')
        return false
    }
    if (!urlValue.match(regex)) {
        alert('provide url')
        return false
    }
    return true
}

// Handle Data from Form
function storeBookmark(e) {
    e.preventDefault()
    const nameValue = websiteNameEl.value
    let urlValue = websiteUrlEl.value

    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
        urlValue = `https://${urlValue}`;
    }
    if (!validate(nameValue, urlValue)) {
        return false
    }
}


// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark)