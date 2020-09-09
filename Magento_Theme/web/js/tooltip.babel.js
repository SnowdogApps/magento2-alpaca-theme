define([], function () {
  'use strict';

  class Tooltip {
    constructor(element) {
      this.element = element;
      this.triggerButton = element.querySelector('.tooltip__trigger-button');
      this.closeButton = element.querySelector('.tooltip__close-button');
      this.contentWrapper = element.querySelector('.tooltip__content-wrapper');
      this.mq = '(max-width: 767px)';
      this.openClass = 'tooltip--is-open';

      // Global instances of event handlers to allow unbinding events
      this.createGlobalEventHandlers();

      // Init listeners
      this.triggerButton.addEventListener('click', this.onToggleEvent);
    }

    open() {
      this.element.classList.add(this.openClass);
      this.contentWrapper.setAttribute('aria-hidden', 'false');
      this.calculatePosition();
      this.contentWrapper.focus();

      // Add events only if tooltip is open - prevent overuse.
      this.initListeners();
    }

    close() {
      this.element.classList.remove(this.openClass);
      this.contentWrapper.setAttribute('aria-hidden', 'true');
      this.setContentPosition(null, null);
      this.triggerButton.focus();
      this.killListeners();
    }

    setContentPosition(left, width) {
      this.contentWrapper.style.left = left;
      this.contentWrapper.style.width = width;
    }

    // TODO: This calculation needs refactor - There's a lot of issues on different viewports size.
    calculatePosition() {
      let currentPosition = this.contentWrapper.getBoundingClientRect(),
          leftBound = currentPosition.left,
          rightBound = currentPosition.right,
          windowWidth = window.innerWidth;

      if (window.matchMedia(this.mq).matches) {
        // Calculate full-width tooltip__content (it's positioned absolutly)
        this.setContentPosition(-leftBound, windowWidth);
      }
      else {
        if (leftBound <= 0) {
          // Move tooltip__content inside window, if it bound to the left border
          this.setContentPosition(-leftBound + 20, null);
        }
        else if (rightBound >= windowWidth) {
          // Move tooltip__content inside window, if it bound to the right border
          this.setContentPosition(-(rightBound - windowWidth), null);
        }
        else {
          // Reset tooltip__content position
          this.setContentPosition(null, null);
        }
      }
    }

    createGlobalEventHandlers() {
      this.onEscapeEvent = event => {
        if (event.which === 27) {
          this.close();
        }
      }

      this.onCloseEvent = () => this.close();

      this.onToggleEvent = () => {
        if (this.element.classList.contains(this.openClass)) {
          this.close();
        }
        else {
          this.open();
        }
      }

      this.onOutsideEvent = event => {
        if (!(this.element.contains(event.target) && !this.closeButton.contains(event.target))) {
          this.close()
        }
      }
    }

    initListeners() {
      window.addEventListener('resize', this.onCloseEvent);
      window.addEventListener('keydown', this.onEscapeEvent);
      window.addEventListener('click', this.onOutsideEvent);
    }

    killListeners() {
      window.removeEventListener('resize', this.onCloseEvent);
      window.removeEventListener('keydown', this.onEscapeEvent);
      window.removeEventListener('click', this.onOutsideEvent);
    }
  }

  return function (config, element) {
    new Tooltip(element);
  };
});
