'use strict';

class Collapsible { // eslint-disable-line
  constructor(wrapper) {
    this.wrapperElem = wrapper;
    this.trigger = this.wrapperElem.querySelector('.collapsible__trigger');
    this.content = this.wrapperElem.querySelector('.collapsible__content');
    this.listener();
  }
  toggle() {
    let currentState = this.trigger.getAttribute('aria-expanded'),
        newState = currentState === 'true' ? 'false' : 'true';
    this.trigger.setAttribute('aria-expanded', newState);
  }

  listener() {
    this.trigger.addEventListener('click', () => {
      this.toggle();
    })
  }
}
