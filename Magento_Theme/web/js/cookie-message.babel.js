define([], function () {
  'use strict';

  class CookieMessage {
    constructor() {
      this.closing = document.querySelectorAll('.cookie-message__close');
      this.cookies = document.querySelectorAll('.cookie-message');

      this.start();
    }
    closeBar(el) {
      const cookieMessage = el.currentTarget.parentElement.parentElement,
            dataType      = cookieMessage.dataset.type,
            focusable     = document.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]');

      cookieMessage.classList.remove('cookie-message--open');
      localStorage.setItem(dataType, 'closed');
      // after closing message box move focus on first focusable element on the page
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
      this.cookies.forEach(el => {
        const dataType = el.dataset.type;
        if (localStorage.getItem(dataType) !== 'closed') {
          el.classList.add('cookie-message--open')
        }
      });
      this.setListeners();
    }
  }

  return function (config, element) {
    new CookieMessage(element);
  };
});
