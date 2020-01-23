'use strict';
class QuantityUpdate {
  constructor(htmlDivElement) {
    this.elem        = htmlDivElement;
    this.plus        = this.elem.querySelector('.quantity-update__button--plus');
    this.minus       = this.elem.querySelector('.quantity-update__button--minus');
    this.input       = this.elem.querySelector('.quantity-update__input');
    this.activeClass = 'quantity-update--active';
    this.events();
    this.evaluateConditions();
  }
  events() {
    this.plus.addEventListener('click', () => {
      this.increment();
      this.evaluateConditions();
    });
    this.minus.addEventListener('click', () => {
      this.decrement();
      this.evaluateConditions();
    });
    this.input.addEventListener('focusin', () => {
      this.elem.classList.add(this.activeClass);
    });
    this.input.addEventListener('focusout', () => {
      this.elem.classList.remove(this.activeClass);
    });
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
    this.minus.classList.remove('quantity-update__button--disabled')
  }
  enableMinus() {
    this.minus.classList.add('quantity-update__button--disabled')
  }
}

(function quantityUpdateObjectsInit() {
  [...document.querySelectorAll('.quantity-update')].forEach((htmlDivElement) => {
    new QuantityUpdate(htmlDivElement);
  });
})();
