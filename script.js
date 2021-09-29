const menu = document.getElementById('menu')
const supportLi = document.getElementById('support-li')
const coursesLi = document.getElementById('courses-li')
const menuToggle = document.getElementById('menu-toggle')

var menuSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'

var closeSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'

var menuOpen = true

function openMenu() {
    menuToggle.classList.toggle('menu-toggle')
    menu.innerHTML = closeSvg
    menuOpen = false
    document.body.style.overflow = 'hidden'

    coursesLi.style= `z-index: 10; display: flex; position: absolute; margin-top: 20rem;`
    supportLi.style= `z-index: 10; display: flex; position: absolute; margin-top: 30rem;`
}

function closeMenu() {
    menu.innerHTML = menuSvg
    menuOpen = true
    document.body.style.overflow = 'inherit'

    coursesLi.style = ''
    supportLi.style = ''
}

function mediaQueries(media) {
    document.body.style.backgroundColor = 'yellow'
    if(media.matches) {
        closeMenu()
        menuOpen = true
        menu.addEventListener('click', () => {
            console.log(menuOpen)
            if (menuOpen == true) {
                console.log('a')
                openMenu()
            } else if (menuOpen == false) {
                console.log('b')
                closeMenu()
                menuToggle.classList.toggle('menu-toggle')
            }
        })
        
        supportLi.addEventListener('click', () => {
            closeMenu()
            menuToggle.classList.toggle('menu-toggle')
        })
        
        coursesLi.addEventListener('click', () => {
            closeMenu()
            menuToggle.classList.toggle('menu-toggle')
        })
    } else {
        document.body.style.backgroundColor = 'green'
        closeMenu()
        menuToggle.classList.toggle('menu-toggle')
        menu.removeEventListener('click', () => {})
        supportLi.removeEventListener('click', () => {})
        coursesLi.removeEventListener('click', () => {})
    }
}

var media = window.matchMedia("(max-width: 400px)")
mediaQueries(media)
media.addListener(mediaQueries)