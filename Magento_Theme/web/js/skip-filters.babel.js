'use strict';

class SkipFilters {
  constructor(element) {
    this.trigger = element;
    this.init();
  }

  init() {
    this.trigger.addEventListener('click', () => {
      this.skipToProducts();
    });
  }

  skipToProducts() {
    const gridBtn = document.querySelector('.toolbar__mode-button');
    gridBtn.focus();
  }
}

define(() => (config, element) => {
  new SkipFilters(element);
});
