'use strict';
define(function($) {
  return function(options, element) {
    const filters = {
      init() {
        this.switcher = element.parentNode.querySelector('.filters__switcher');
        this.icon = this.switcher.querySelector('.filters__switcher-icon');
        this.filters  = element;
        this.switcher.addEventListener('click', this.toggle.bind(this));
      },
      toggle() {
        switch (this.switcher.dataset.stateCurrent) {
        case 'hidden':
          this.show();
          break;
        case 'display':
          this.hide();
          break
        }
      },
      show() {
        this.filters.classList.remove('filters__list--mobile-hidden');
        this.icon.classList.add('filters__switcher-icon--active');
        this.switcher.dataset.stateCurrent = 'display'
      },
      hide() {
        this.filters.classList.add('filters__list--mobile-hidden');
        this.icon.classList.remove('filters__switcher-icon--active');
        this.switcher.dataset.stateCurrent = 'hidden';
      }
    };
    filters.init();
  }
});
