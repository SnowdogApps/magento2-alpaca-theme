'use strict'
class Filters {
  constructor(element) {
    this.element = element;
    this.triggerButtons = element.querySelectorAll('.filters__trigger--open'),
    this.mq = '(max-width: 1023px)';
    this.openClass = 'filters__item--is-open';

    // Global instances of event handlers to allow unbinding events
    this.createGlobalEventHandlers();

    // Init listeners
    this.triggerButtons.forEach(button => button.addEventListener('click', e => this.toggle(e)));
  }

  open() {
    this.closeOtherFilters();
    this.classListBody('add', 'no-scroll');
    this.itemWrapper.classList.add(this.openClass);
    this.setAccesbilityAttr('aria-hidden', 'false');
    this.content.focus();
    this.initListeners();
  }

  close() {
    this.classListBody('remove', 'no-scroll');
    this.itemWrapper.classList.remove(this.openClass);
    this.setAccesbilityAttr('aria-hidden', 'true');
    this.content.focus();
    this.killListeners();
  }

  closeOtherFilters() {
    this.element.querySelectorAll('.filters__item').forEach(i => i.classList.remove(this.openClass))
  }

  isMediumMq() {
    return window.matchMedia(this.mq).matches;
  }

  classListBody(type, className) {
    document.getElementsByTagName('body')[0].classList[type](className);
  }

  setAccesbilityAttr(type, variable) {
    this.content.setAttribute(type, variable);
  }

  setContext(target) {
    this.itemWrapper = target;
    this.content = this.itemWrapper.querySelector('.filters__content-wrapper');
    this.closeButton = this.itemWrapper.querySelector('.filters__trigger--close');
  }

  createGlobalEventHandlers() {
    this.onCloseEvent = () => this.close();

    this.onEscapeEvent = e => {
      if (e.which === 27) {
        this.close();
      }
    }

    this.onOutsideEvent = e => {
      if (!(this.content.contains(e.target) && !this.closeButton.contains(e.target))) {
        this.close();
      }
    }
  }

  initListeners() {
    window.addEventListener('keydown', this.onEscapeEvent);
    window.addEventListener('resize', this.onCloseEvent);
    window.addEventListener('click', this.onOutsideEvent);
  }

  killListeners() {
    window.removeEventListener('keydown', this.onEscapeEvent);
    window.removeEventListener('resize', this.onCloseEvent);
    window.removeEventListener('click', this.onOutsideEvent);
  }

  toggle(e) {
    const parentNode = e.target.parentNode;

    e.stopPropagation();
    this.setContext(parentNode);

    if (parentNode.classList.contains(this.openClass)) {
      this.close();
    }
    else {
      this.open();
    }
  }
}

new Filters(document.querySelector('.filters'));

// TODO addvfocus trap
