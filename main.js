const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuMobile = document.querySelector('.menu-mobile');

hamburgerMenu.addEventListener('click', menuClickHandler);

function menuClickHandler(event) {
    hamburgerMenu.classList.toggle('active');
    menuMobile.classList.toggle('active');
    hamburgerMenu.blur();
}
