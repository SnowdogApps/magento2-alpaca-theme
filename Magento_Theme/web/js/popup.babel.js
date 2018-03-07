'use strict';

class Popup {
  constructor(button, popup = '.popup') {
    this.active = 'popup--active';
    this.body = document.querySelector('body');
    this.button = button;
    this.buttonId = button.dataset.popuptrigger;
    this.fullWidth = 'popup--full-width';
    this.popup = document.querySelector(`${popup}[data-popup=${this.buttonId}]`);
    this.popupContent = this.popup.querySelector('.popup__content');
    this.closeButton = this.popup.querySelector('.popup__close-button');

    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggle();
    });

    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.hide();
      });
    }

    window.addEventListener('click', (e) => {
      if ((e.target !== this.button) &&
        (!this.popup.contains(e.target)) &&
        (!this.button.contains(e.target))
      ) {
        if (this.isActive()) {
          this.hide();
        }
      }
    });
  }

  toggle() {
    if (this.isActive()) {
      this.hide();
    } else {
      this.show();
    }
  }

  show() {
    this.popup.classList.add(this.active);
    this.popup.open = true;
    this.popupContent.focus();
    window.addEventListener('keydown', this.keyboardClosePopup.bind(this));
  }

  hide() {
    this.popup.classList.remove(this.active);
    this.button.focus();
    this.popup.open = false;
  }

  isActive() {
    return this.popup.classList.contains(this.active);
  }

  keyboardClosePopup(event) {
    if (event.which === 27) {
      if (this.isActive()) {
        event.preventDefault();
        this.hide();
      }
    }
  }
}

define(() => (config, element) => {
  new Popup(element);
});
