module.exports = {
  context: {
    heading: {
      tag: 'h2',
      attributes: 'id="summary"',
      text: 'Summary',
      class: 'order-summary__title'
    },
    attributes: 'aria-labelledby="summary"',
    estimate: {
      tag: 'h3',
      text: 'Esimate Shipping and Tax',
      class: 'order-summary__subtitle'
    },
    items: [
      {
        label: 'Subtotal',
        value: '$159.95'
      },
      {
        label: 'TAX',
        value: '$159.95'
      },
    ],
    total: {
      tag: 'h3',
      text: 'Order Total',
      class: 'order-summary__title-total'
    },
    amount: '$159.95',
    button: {
      tag: 'button',
      class: 'button--fluid margin-bottom-m',
      attributes: 'type="button" aria-label="Click to go to checkout"',
      text: 'Proceed to Checkout'
    },
    link: {
      tag: 'a',
      class: 'button--link order-summary__link',
      attributes: 'href="#" title="Check Out with Multiple Addresses"',
      text: 'Check Out with Multiple Addresses'
    }
  },
  variants: [
    {
      name: 'checkout',
      context: {
        class: 'order-summary--checkout',
        button: false,
        link: false,
        tab: {
          label: '1 Item in Cart',
          icon: {
            id: 'angle-down',
            class: 'order-summary__tab-icon'
          },
          products: [
            {
              label: 'Simple product oh this is such a loooong name 1',
              quantity: 1,
              price: '$100'
            },
            {
              label: 'Simple product oh this is such a loooong name 1',
              quantity: 3,
              price: '$100000'
            }
          ]
        }
      }
    }
  ]
}
