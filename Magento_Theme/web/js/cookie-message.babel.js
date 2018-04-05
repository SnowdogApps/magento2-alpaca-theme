'use strict';

class CookieMessage {
  constructor(wrapper) {
    this.cookies = wrapper;
    this.closing = wrapper.querySelectorAll('.cookie-message__close');

    this.init();
  }
  closeBar(el) {
    const cookieMessage = el.currentTarget.parentElement.parentElement,
          dataType      = cookieMessage.dataset.type;

    cookieMessage.classList.remove('cookie-message--open');
    localStorage.setItem(dataType, 'closed')
  }
  setListeners() {
    this.closing.forEach(el => {
      el.addEventListener('click', this.closeBar);
    });
  }
  init() {
    // Display message if it wasn't closed before
    const dataType = this.cookies.dataset.type;
    if (localStorage.getItem(dataType) !== 'closed') {
      this.cookies.classList.add('cookie-message--open')
    }
    this.setListeners();
  }
}

define(() => (config, element) => {
  new CookieMessage(element);
});
