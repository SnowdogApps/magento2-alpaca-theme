define([], function () {
  'use strict';

  return function (config, element) {
    const content = document.querySelector('.dashboard-nav__content'),
      currentItem = content.querySelector('.item.current'),
      mobileNav = document.querySelector('.dashboard-nav__mobile');

    if (currentItem) {
      mobileNav.innerHTML = currentItem.textContent;
    }

    mobileNav.addEventListener('click', () => {
      const ariaExpandedCurrent = mobileNav.getAttribute('aria-expanded'),
            ariaExpandedNew = (ariaExpandedCurrent === 'true');

      mobileNav.classList.toggle('dashboard-nav__mobile--active');
      mobileNav.setAttribute('aria-expanded', `${!ariaExpandedNew}`);
      content.classList.toggle('dashboard-nav__content--visible');
    });
  };
});
