'use strict';

class Banner {
  constructor(element) {
    this.element = element;
    this.triggerButton = element.querySelector('.banner__button-collapse');
    this.closeButton = element.querySelector('.banner__button-close');
    this.content = element.querySelector('.banner__content--category');

    this.triggerButton.addEventListener('click', () => this.toggle());
    this.createGlobalEventHandlers();
  }

  open() {
    this.element.classList.add('banner--is-open');
    this.setAccesbilityAttr('aria-hidden', 'false');
    this.content.focus();
    this.initListeners();
  }

  close() {
    this.element.classList.remove('banner--is-open');
    this.setAccesbilityAttr('aria-hidden', 'true');
    this.triggerButton.focus();
    this.killListeners();
  }

  toggle() {
    if (this.element.classList.contains('banner--is-open')) {
      this.close();
    }
    else {
      this.open();
    }
  }

  setAccesbilityAttr(type, variable) {
    this.content.setAttribute(type, variable);
  }

  initListeners() {
    window.addEventListener('keydown', this.onEscapeEvent);
    this.closeButton.addEventListener('click', this.onCloseEvent)
  }

  killListeners() {
    window.removeEventListener('keydown', this.onEscapeEvent);
    this.closeButton.removeEventListener('click', this.onCloseEvent)
  }

  createGlobalEventHandlers() {
    this.onCloseEvent = () => this.close();

    this.onEscapeEvent = e => {
      if (e.which === 27) {
        this.close();
      }
    }
  }
}

new Banner(document.querySelector('.banner.banner--category'));
