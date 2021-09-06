module.exports = {
  context: {
    label: false,
    input: {
      id: 'qty',
      min: '1',
      name: 'qty',
      defaultValue: '1',
      ariaLabel: 'Change the quantity'
    },
    minusQtyButton: {
      tag: 'button',
      class: 'quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
      attributes: 'type="button" aria-label="Decrease the quantity"',
      icon: {
        id: 'minus',
        class: 'button__icon quantity-update__icon',
        hidden: true
      }
    },
    plusQtyButton: {
      tag: 'button',
      class: 'quantity-update__button quantity-update__button--plus',
      attributes: 'type="button" aria-label="Increase the quantity"',
      icon: {
        id: 'plus',
        class: 'button__icon quantity-update__icon',
        hidden: true
      }
    },
    script: true
  },
  variants: [
    {
      name: 'full',
      title: 'Full',
      context: {
        qtyClass: 'input',
        qtyLabel: 'Qty'
      }
    }
  ]
}
