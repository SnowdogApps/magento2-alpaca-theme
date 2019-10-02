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
        class: 'button--link cart-summary__link',
        attributes: 'href="#" title="Check Out with Multiple Addresses"',
        text: 'Check Out with Multiple Addresses'
      }
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
          image: {
            class: 'cart-grid__item-image',
            defaultSrc: '/images/cart-view/product-64x96.jpg',
            sources: [
              {
                src: '/images/cart-view/product-64x96.jpg',
                mediaQuery: '(max-width: 480px)'
              },
              {
                src: '/images/cart-view/product-80x120.jpg',
                mediaQuery: '(max-width: 768px)'
              },
              {
                src: '/images/cart-view/product-128x192.jpg',
                mediaQuery: ''
              }
            ],
            alt: 'Image of product Bluzka \'ONLSANSA SINGLET WVN\''
          },
          productName: {
            tag: 'h4',
            text: 'Bluzka \'ONLSANSA SINGLET WVN\'',
            class: 'cart-grid__item-name'
          },
          attributes: [
            'Size: XXL',
            'Color: Red'
          ],
          price: {
            label: 'Price:',
            amount: '$159.95'
          },
          qty: {
            class: 'input--inline cart-grid__item-qty',
            label: {
              class: 'cart-grid__item-label',
              attributes: '',
              text: 'Qty',
              hidden: false
            },
            field: {
              class: 'cart-grid__item-input text-center',
              id: 'qty',
              name: 'qty',
              type: 'number',
              attributes: 'value="1"'
            }
          },
          total: {
            label: 'Subtotal:',
            amount: '$159.95'
          },
          edit: {
            tag: 'button',
            class: 'button button--icon cart-grid__action',
            icon: {
              id: 'edit',
              title: 'Edit product',
              class: 'button__icon cart-grid__action-icon'
            },
            attributes: 'type="button" aria-label="Clickt to edit this product"'
          },
          delete: {
            tag: 'button',
            class: 'button button--icon cart-grid__action',
            icon: {
              id: 'remove',
              title: 'Remove product',
              class: 'button__icon cart-grid__action-icon'
            },
            attributes: 'type="button" aria-label="Click to remove this product"'
          }
        },
        {
          image: {
            class: 'cart-grid__item-image',
            defaultSrc: '/images/cart-view/product-64x96.jpg',
            sources: [
              {
                src: '/images/cart-view/product-64x96.jpg',
                mediaQuery: '(max-width: 480px)'
              },
              {
                src: '/images/cart-view/product-80x120.jpg',
                mediaQuery: '(max-width: 768px)'
              },
              {
                src: '/images/cart-view/product-128x192.jpg',
                mediaQuery: ''
              }
            ],
            alt: 'Image of product Bluzka \'ONLSANSA SINGLET WVN\''
          },
          productName: {
            tag: 'h4',
            text: 'Bluzka \'ONLSANSA SINGLET WVN\'',
            class: 'cart-grid__item-name'
          },
          attributes: [
            'Size: XXL',
            'Color: Red'
          ],
          price: {
            label: 'Price:',
            amount: '$159.95'
          },
          qty: {
            class: 'input--inline cart-grid__item-qty',
            label: {
              class: 'cart-grid__item-label',
              attributes: '',
              text: 'Qty',
              hidden: false
            },
            field: {
              class: 'cart-grid__item-input text-center',
              id: 'qty',
              name: 'qty',
              type: 'number',
              attributes: 'value="1"'
            }
          },
          total: {
            label: 'Subtotal:',
            amount: '$159.95'
          },
          edit: {
            tag: 'button',
            class: 'button button--icon cart-grid__action',
            icon: {
              id: 'edit',
              title: 'Edit product',
              class: 'button__icon cart-grid__action-icon'
            },
            attributes: 'type="button" aria-label="Clickt to edit this product"'
          },
          delete: {
            tag: 'button',
            class: 'button button--icon cart-grid__action',
            icon: {
              id: 'remove',
              title: 'Remove product',
              class: 'button__icon cart-grid__action-icon'
            },
            attributes: 'type="button" aria-label="Click to remove this product"'
          }
        },
        {
          image: {
            class: 'cart-grid__item-image',
            defaultSrc: '/images/cart-view/product-64x96.jpg',
            sources: [
              {
                src: '/images/cart-view/product-64x96.jpg',
                mediaQuery: '(max-width: 480px)'
              },
              {
                src: '/images/cart-view/product-80x120.jpg',
                mediaQuery: '(max-width: 768px)'
              },
              {
                src: '/images/cart-view/product-128x192.jpg',
                mediaQuery: ''
              }
            ],
            alt: 'Image of product Bluzka \'ONLSANSA SINGLET WVN\''
          },
          productName: {
            tag: 'h4',
            text: 'Bluzka \'ONLSANSA SINGLET WVN\'',
            class: 'cart-grid__item-name'
          },
          attributes: [
            'Size: XXL',
            'Color: Red'
          ],
          price: {
            label: 'Price:',
            amount: '$159.95'
          },
          qty: {
            class: 'input--inline cart-grid__item-qty',
            label: {
              class: 'cart-grid__item-label',
              attributes: '',
              text: 'Qty',
              hidden: false
            },
            field: {
              class: 'cart-grid__item-input text-center',
              id: 'qty',
              name: 'qty',
              type: 'number',
              attributes: 'value="1"'
            }
          },
          total: {
            label: 'Subtotal:',
            amount: '$159.95'
          },
          edit: {
            tag: 'button',
            class: 'button button--icon cart-grid__action',
            icon: {
              id: 'edit',
              title: 'Edit product',
              class: 'button__icon cart-grid__action-icon'
            },
            attributes: 'type="button" aria-label="Clickt to edit this product"'
          },
          delete: {
            tag: 'button',
            class: 'button button--icon cart-grid__action',
            icon: {
              id: 'remove',
              title: 'Remove product',
              class: 'button__icon cart-grid__action-icon'
            },
            attributes: 'type="button" aria-label="Click to remove this product"'
          }
        }
      ],
      updateCart: {
        class: 'button--secondary cart-grid__button margin-top-sm margin-bottom-l',
        tag: 'button',
        text: 'Update shopping cart'
      }
    }
  }
}
