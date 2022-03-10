'use strict'

const content = document.querySelector('.dashboard-nav__content');
const currentItem = content.querySelector('.dashboard-nav__item.current');
const mobileNav = document.querySelector('.dashboard-nav__mobile');

mobileNav.innerHTML = currentItem.textContent;

mobileNav.addEventListener('click', () => {
  mobileNav.classList.toggle('dashboard-nav__mobile--active');
  content.classList.toggle('dashboard-nav__content--visible');
});
