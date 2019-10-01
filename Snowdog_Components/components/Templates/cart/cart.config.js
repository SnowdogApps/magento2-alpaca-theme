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
      total: {
        tag: 'h4',
        text: 'Order Total',
        class: 'cart-summary__title-total'
      }
    }
  }
}
