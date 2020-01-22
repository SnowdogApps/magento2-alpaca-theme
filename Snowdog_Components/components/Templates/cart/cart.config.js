module.exports = {
  context: {
    quote: false,
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Cart',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      text: 'Shopping Cart',
      class: 'margin-top-sm text-center'
    },
    grid: {
      header: {
        item: 'Item',
        price: 'Price',
        qty: 'Qty',
        subtotal: 'Subtotal'
      },
      items: [
        {
          qty: {
            field: {
              id: 'qty1',
            }
          }
        },
        {
          qty: {
            field: {
              id: 'qty2',
            }
          }
        },
        {
          qty: {
            field: {
              id: 'qty3',
            }
          }
        }
      ],
      updateCart: {
        class: 'button--secondary cart-grid__button margin-top-sm margin-bottom-l',
        tag: 'button',
        text: 'Update shopping cart'
      }
    },
    discount: {
      button: {
        title: 'Apply Discount Code',
        attributes: 'type="button" aria-expanded="false"'
      },
      icon: {
        id: 'angle-down',
        title: 'Arrow down',
        class: 'cart-discount__button-icon'
      },
      content: {
        attributes: 'aria-hidden="true"',
        submit: {
          tag: 'button',
          text: 'Apply Discount',
          class: 'cart-discount__content-button'
        },
        input: {
          class: 'cart-discount__content-input',
          label: {
            class: 'label--hidden'
          },
          field: {
            placeholder: 'Enter discount code',
            id: 'discount-code',
            name: 'cart-discount-code',
            class: 'cart-discount__content-field'
          }
        }
      }
    }
  },
  variants: [
    {
      name: 'b2b',
      context: {
        quote: true
      }
    }
  ]
}
