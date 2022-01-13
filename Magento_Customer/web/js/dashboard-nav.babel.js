define([], function () {
  'use strict';

  return function () {
    const content = document.querySelector('.dashboard-nav__content');
    const currentItem = content.querySelector('.item.current');
    const mobileNav = document.querySelector('.dashboard-nav__mobile');

    if (currentItem) {
      mobileNav.innerHTML = currentItem.textContent;
    }

    mobileNav.addEventListener('click', () => {
      const ariaExpandedCurrent = mobileNav.getAttribute('aria-expanded');
      const ariaExpandedNew = (ariaExpandedCurrent === 'true');

      mobileNav.classList.toggle('dashboard-nav__mobile--active');
      mobileNav.setAttribute('aria-expanded', `${!ariaExpandedNew}`);
      content.classList.toggle('dashboard-nav__content--visible');
    });
  };
});
