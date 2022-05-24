class QuantityUpdate {
  constructor(element) {
    this.plus  = element.querySelector('.quantity-update__button--plus');
    this.minus = element.querySelector('.quantity-update__button--minus');
    this.input = element.querySelector('.quantity-update__input');
    this.events();
    this.evaluateConditions();
  }

  events() {
    this.plus.addEventListener('click', e => {
      this.increment();
      this.evaluateConditions();
      this.triggerInput(e);
    });
    this.minus.addEventListener('click', e => {
      this.decrement();
      this.evaluateConditions();
      this.triggerInput(e);
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

  triggerInput() {
    const event = new Event('change', {
      'bubbles': true,
      'cancelable': true
    });

    this.input.dispatchEvent(event);
  }

  disableMinus() {
    this.minus.classList.remove('quantity-update__button--disabled')
  }

  enableMinus() {
    this.minus.classList.add('quantity-update__button--disabled')
  }
}

define(() => (config, element) => {
  new QuantityUpdate(element);
});
