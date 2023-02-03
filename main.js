const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuMobile = document.querySelector('.menu-mobile');

hamburgerMenu.addEventListener('click', menuClickHandler);

function menuClickHandler(event) {
    if (menuMobile.classList.contains('active')) {
        addOrRemoveClass(menuMobile, 'out', 'add');
    }

    addOrRemoveClass(hamburgerMenu, 'active');
    addOrRemoveClass(menuMobile, 'active');

    hamburgerMenu.blur();

    addOrRemoveClass(menuMobile, 'out', 'remove');
}

function addOrRemoveClass(element, className, method = 'toggle') {
    element.classList[method](className);
}
