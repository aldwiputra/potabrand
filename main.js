const hamburgerMenu = document.querySelector('.hamburger-menu');

hamburgerMenu.addEventListener('click', menuClickHandler);

function menuClickHandler(event) {
	hamburgerMenu.classList.toggle('active');
	hamburgerMenu.blur();
}
