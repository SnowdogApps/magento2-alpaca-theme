'use strict';
define(function($) {
  return function(options, element) {
    const filters = {
      init() {
        this.switcher = element.parentNode.querySelector('.filters__switcher');
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
        this.switcher.innerText = this.switcher.dataset.stateDisplayText;
        this.switcher.dataset.stateCurrent = 'display'
      },
      hide() {
        this.filters.classList.add('filters__list--mobile-hidden');
        this.switcher.innerText = this.switcher.dataset.stateHiddenText;
        this.switcher.dataset.stateCurrent = 'hidden';
      }
    };
    filters.init();
  }
});
