define(() => (config, element) => {
  'use strict'

  const content     = element.querySelector('.dashboard-nav__content'),
        currentItem = content.querySelector('.dashboard-nav__list .item.current'),
        mobileNav   = element.querySelector('.dashboard-nav__mobile'),
        windowSize  = window.matchMedia('(max-width: 768px)');

  makeDropdown();

  window.addEventListener('resize', () => {
    makeDropdown();
  });

  function makeDropdown() {
    if (windowSize.matches) {
      mobileNav.innerHTML = currentItem.textContent;

      mobileNav.addEventListener('click', () => {
        mobileNav.classList.toggle('dashboard-nav__mobile--active');
        content.classList.toggle('dashboard-nav__content--visible');
      });
    }
  }
});
