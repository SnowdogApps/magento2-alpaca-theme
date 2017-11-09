'use strict'

const content     = document.querySelector('.dashboard-nav__content'),
      currentItem = content.querySelector('.dashboard-nav__list .item.current'),
      mobileNav   = document.querySelector('.dashboard-nav__mobile'),
      windowSize  = window.matchMedia('(max-width: 768px)');

if (windowSize.match) {
  mobileNav.innerHTML = currentItem.textContent;

  mobileNav.addEventListener('click', () => {
    mobileNav.classList.toggle('dashboard-nav__mobile--active');
    content.classList.toggle('dashboard-nav__content--visible');
  });
}
