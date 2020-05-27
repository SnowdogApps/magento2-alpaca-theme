define([], function () {
  'use strict'

  class MarketingBar {
    constructor() {
      this.closing = document.querySelectorAll('.marketing-bar__close');
      this.bars = document.querySelectorAll('.marketing-bar');

      this.start();
    }
    closeBar(el) {
      const marketingBar = el.currentTarget.parentElement.parentElement,
            dataType      = marketingBar.dataset.type,
            focusable     = document.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]');

      marketingBar.classList.add('marketing-bar--closed');
      localStorage.setItem(dataType, 'closed');
      // after closing message box move focus on first visible focusable element on the page
      if (focusable.length) {
        let firstFocusable = [...focusable].find(el => {
          return el.offsetParent !== null
        })
        firstFocusable.focus();
      }
    }
    setListeners() {
      this.closing.forEach(el => {
        el.addEventListener('click', this.closeBar);
      });
    }
    start() {
      // Display message if it wasn't closed before
      this.bars.forEach(el => {
        const dataType = el.dataset.type;
        if (localStorage.getItem(dataType) !== 'closed') {
          el.classList.remove('marketing-bar--closed')
        }
      });
      this.setListeners();
    }
  }
  new MarketingBar();
});
