const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuMobile = document.querySelector('.menu-mobile');

hamburgerMenu.addEventListener('click', menuClickHandler);

function menuClickHandler(event) {
    if (menuMobile.classList.contains('active')) {
        menuMobile.classList.add('out');
    }

    hamburgerMenu.classList.toggle('active');
    menuMobile.classList.toggle('active');
    hamburgerMenu.blur();

    menuMobile.classList.remove('out');
}
