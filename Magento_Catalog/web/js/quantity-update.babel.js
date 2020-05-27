define([], function () {
  'use strict';

  class QuantityUpdate {
    constructor(element) {
      this.elem        = element;
      this.plus        = this.elem.querySelector('.quantity-update__button--plus');
      this.minus       = this.elem.querySelector('.quantity-update__button--minus');
      this.input       = this.elem.querySelector('.quantity-update__input');
      this.activeClass = 'quantity-update--active';
      this.events();
      this.evaluateConditions();
    }

    events() {
      this.plus.addEventListener('click', (ev) => {
        this.increment();
        this.evaluateConditions();
        this.triggerInput(ev);
      });
      this.minus.addEventListener('click', (ev) => {
        this.decrement();
        this.evaluateConditions();
        this.triggerInput(ev);
      });
      this.input.addEventListener('focusin', () => {
        this.elem.classList.add(this.activeClass);
      });
      this.input.addEventListener('focusout', () => {
        this.elem.classList.remove(this.activeClass);
      });
    }

    triggerInput() {
      const event = new Event('change', {
        'bubbles': true,
        'cancelable': true
      });

      this.input.dispatchEvent(event);
    }

    evaluateConditions() {
      this.input.value > 0 ? this.disableMinus() : this.enableMinus();
    }

    increment() {
      this.input.value = Number(this.input.value) + 1;
    }

    decrement() {
      if (this.input.value >= 1) {
        this.input.value = Number(this.input.value) - 1;
      }
    }

    disableMinus() {
      this.minus.classList.remove('quantity-update__button--disabled');
    }

    enableMinus() {
      this.minus.classList.add('quantity-update__button--disabled');
    }
  }

  return function (config, element) {
    new QuantityUpdate(element);
  };
});
