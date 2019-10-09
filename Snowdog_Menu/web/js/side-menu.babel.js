'use strict';

class SideMenu {
  constructor(sideMenuContainer) {
    this.sideMenuContainer = sideMenuContainer;
    this.sideMenuOverlay = this.sideMenuContainer.querySelector('.side-menu__overlay');
    this.menuTrigger = this.sideMenuContainer.querySelectorAll('.side-menu__trigger');
    this.init();
  }

  toggleSideMenu() {
    this.sideMenuContainer.classList.toggle('side-menu--is-open');

    if (this.sideMenuContainer.classList.contains('side-menu--is-open')) {
      document.body.style.overflow = 'hidden';
    }
    else {
      document.body.style.overflow = 'auto';
    }
  }

  setListeners() {
    this.menuTrigger.forEach(el => {
      el.addEventListener('click', () => {
        this.toggleSideMenu();
      });
    });

    this.sideMenuOverlay.addEventListener('click', () => {
      this.toggleSideMenu();
    });
  }

  init() {
    this.setListeners();
  }
}

define(() => (config, element) => {
  new SideMenu(element);
});
