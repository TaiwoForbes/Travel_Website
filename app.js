const preloader = document.querySelector("[data-preloader]")
const remove_preloader = () => {
    preloader.classList.add('remove')
}
window.addEventListener('load', remove_preloader)

/* Add even on multiple elements */

const addEventOnElements = function (elements, evenType, callback) {
    elements.forEach(elements => {
        elements.addEventListener(evenType, callback)
    });
}


/* NavBar toggler for mobile */
const NavBar = document.querySelector('[data-navbar]')
const navTogglers = document.querySelectorAll('[data-nav-toggler]')
const overlay = document.querySelector('[data-overlay]')

const toggleNav = function () {
    NavBar.classList.toggle('active')
    overlay.classList.toggle('active')
    document.body.classList.toggle('nav-active')
}

addEventOnElements(navTogglers, 'click', toggleNav)


/* Header */
const header = document.querySelector("[data-header]")
window.addEventListener('scroll',function(){
    header.classList[window.scrollY > 100 ?"add":"remove"]('active')
})