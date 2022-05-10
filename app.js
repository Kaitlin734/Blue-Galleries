const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('.navbarMenu');

const Menu = () => {
menu.classList.toggle('is-active');
menuLinks.classList.toggle('active');
};

menu.addEventListener('click', Menu)