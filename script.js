const menu = document.getElementById('menu')
const menuToggle = document.getElementById('menu-toggle')
const supportLi = document.getElementById('support-li')
const coursesLi = document.getElementById('courses-li')
var menuSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
var closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'

const menuEvents = {
    menuIsOpened: false,
    openMenu: () => {
        menu.innerHTML = closeSvg
        document.body.style.overflow = 'hidden'
        coursesLi.style= `z-index: 10; display: flex; position: absolute; margin-top: 20rem`
        supportLi.style= `z-index: 10; display: flex; position: absolute; margin-top: 30rem`
        menuEvents.menuIsOpened = true
        menuToggle.classList.toggle('menu-toggle')
    },
    closeMenu: () => {
        menu.innerHTML = menuSvg
        document.body.style.overflow = 'initial'
        coursesLi.style = ''
        supportLi.style = ''
        menuEvents.menuIsOpened = false
        menuToggle.classList.toggle('menu-toggle')
    },
    menuClick: () => {
        menu.addEventListener('click', function menuClick() {
            if (menuEvents.menuIsOpened == false) {
                menuEvents.openMenu()
            } else if (menuEvents.menuIsOpened == true) {
                menuEvents.closeMenu()
            }
        })
    },
    coursesClick: () => {
        coursesLi.addEventListener('click', function coursesClick() {
            menuEvents.closeMenu()
            menuToggle.classList.remove('menu-toggle')
        })
    },
    supportClick: () => {
        supportLi.addEventListener('click', function supportClick() {
            menuEvents.closeMenu()
            menuToggle.classList.remove('menu-toggle')
        })
    }
}

menuEvents.menuClick()
menuEvents.coursesClick()
menuEvents.supportClick()

function mediaQueries(media) {
    if (media.matches) {
        menuEvents.closeMenu()
        menuToggle.classList.remove('menu-toggle')
    } else {
        menuEvents.closeMenu()
        menuToggle.classList.remove('menu-toggle')
    }
}

var media = window.matchMedia("(max-width: 400px)")
mediaQueries(media)
media.addListener(mediaQueries)


// LOADING PAGE

const loader = document.getElementById('loader')
window.addEventListener("load", function() {
    loader.style.display = 'none'
    document.body.style.overflow = 'initial'
})