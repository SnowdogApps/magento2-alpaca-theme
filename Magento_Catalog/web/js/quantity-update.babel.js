class QuantityUpdate {
  constructor(element) {
    this.plus  = element.querySelector('.quantity-update__button--plus');
    this.minus = element.querySelector('.quantity-update__button--minus');
    this.input = element.querySelector('.quantity-update__input');
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

define(() => (config, element) => {
  new QuantityUpdate(element);
});


