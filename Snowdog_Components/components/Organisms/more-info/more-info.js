'use strict';

class MoreInfo {
  constructor(element) {
    this.moreInfo = element;
    this.trigger = this.moreInfo.querySelector('[aria-expanded]');
    this.content = this.moreInfo.querySelector('[aria-hidden]');
    this.closeButton = this.moreInfo.querySelector('.more-info__close');

    this.createGlobalEventHandlers();
    this.moreInfo.addEventListener('click', this.onToggleEvent);
  }


  open(state) {
    this.content.setAttribute('aria-hidden', state);
    this.content.focus();
    // Add events only if tooltip is open - prevent overuse.
    this.initListeners();
  }

  close(state) {
    this.content.setAttribute('aria-hidden', state);
    this.trigger.focus();
    this.killListeners();
  }

  toggle() {
    let currentState = this.trigger.getAttribute('aria-expanded'),
        triggerNewState = currentState === 'true' ? 'false'  : 'true';
    this.trigger.setAttribute('aria-expanded', triggerNewState)

    if (currentState === 'false') {
      this.open(currentState);
    }
    else {
      this.close(currentState);
    }
  }

  createGlobalEventHandlers() {
    this.onEscapeEvent = event => {
      // TODO
      // issue: this event is overwritten by dropdown-list keydown event
      if (event.which === 27) {
        this.toggle();
      }
    }

    this.onToggleEvent = () => {
      this.toggle()
    }

    this.onOutsideEvent = event => {
      if (!(this.moreInfo.contains(event.target) && !this.closeButton.contains(event.target))) {
        this.toggle()
      }
    }
  }

  initListeners() {
    window.addEventListener('resize', this.onToggleEvent);
    this.moreInfo.addEventListener('keydown', this.onEscape);
    window.addEventListener('click', this.onOutsideEvent);
  }

  killListeners() {
    window.removeEventListener('resize', this.onToggleEvent);
    this.moreInfo.removeEventListener('keydown', this.onEscapeEvent);
    window.removeEventListener('click', this.onOutsideEvent);
  }
}

const moreInfos = [...document.querySelectorAll('.more-info')];

moreInfos.forEach(item => new MoreInfo(item));
