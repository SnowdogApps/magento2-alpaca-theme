define([], function () {
  'use strict';

  class BannerCollapsible {
    constructor(element) {
      this.element = element;
      this.triggerButton = element.querySelector('.banner__button-collapse');
      this.triggerButtonTextOpen = this.triggerButton.querySelector('.banner__button-text--open');
      this.triggerButtonTextClose = this.triggerButton.querySelector('.banner__button-text--close');
      this.closeButton = element.querySelector('.banner__button-close');
      this.content = element.querySelector('.banner__content--category');

      this.triggerButton.addEventListener('click', () => this.toggle());
      this.createGlobalEventHandlers();
    }

    open() {
      this.element.classList.add('banner--is-open');
      this.setAccesbilityAttr('aria-hidden', 'false');
      this.toggleText();
      this.content.focus();
      this.initListeners();
    }

    close() {
      this.element.classList.remove('banner--is-open');
      this.setAccesbilityAttr('aria-hidden', 'true');
      this.toggleText();
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

    toggleText() {
      if (this.triggerButtonTextOpen && this.triggerButtonTextClose) {
        if (this.triggerButtonTextOpen.classList.contains('display-none')) {
          this.triggerButtonTextOpen.classList.remove('display-none');
          this.triggerButtonTextClose.classList.add('display-none');
        }
        else {
          this.triggerButtonTextOpen.classList.add('display-none');
          this.triggerButtonTextClose.classList.remove('display-none');
        }
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

  return function (config, element) {
    new BannerCollapsible(element);
  };
});
