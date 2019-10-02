module.exports = {
  context: {
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
    dropdownList: {
      id: 'discount-dropdown',
      dropdowns: [
        {
          itemTag: 'button',
          itemAttributes: 'aria-expanded="false"',
          title: 'Apply Discount Code',
          id: 'dropdown-1',
          collapse: {
            class: 'dropdown-list__icon',
            id: 'angle-down',
            title: 'Arrow down',
            attributes: 'aria-hidden="true"'
          },
          contentElement: 'paragraph'
        },
      ]
    },
    items: {
      updateCart: {
        class: 'button--secondary cart__button',
        tag: 'button',
        text: 'Update shopping cart'
      }
    },
    summary: {
      heading: {
        tag: 'h3',
        text: 'Summary',
        class: 'cart-summary__title'
      },
      estimate: {
        tag: 'h4',
        text: 'Esimate Shipping and Tax',
        class: 'cart-summary__subtitle'
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
        tag: 'h4',
        text: 'Order Total',
        class: 'cart-summary__title-total'
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
        class: 'button--link button--fluid cart-summary__link text-center',
        attributes: 'href="#" title="Check Out with Multiple Addresses"',
        text: 'Check Out with Multiple Addresses'
      }
    }
  }
}
