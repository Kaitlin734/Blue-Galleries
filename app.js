const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('.navbarMenu');

// Drop down menu bar that forms an x when activated
const Menu = () => {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
};

menu.addEventListener('click', Menu)