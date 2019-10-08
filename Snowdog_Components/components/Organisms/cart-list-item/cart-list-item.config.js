module.exports = {
  context: {
    attributes: 'aria-label="product in your shopping cart"',
    image: {
      class: 'cart-list-item__image',
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
      class: 'cart-list-item__name'
    },
    productAttributes: {
      class: 'margin-bottom-xs',
      items: [
        'Size: XXL',
        'Color: Red'
      ],
    },
    price: {
      labelClass: 'margin-right-xs',
      label: 'Price:',
      amount: '$159.95'
    },
    qty: {
      class: 'input--inline cart-list-item__qty',
      label: {
        class: 'cart-list-item__label',
        attributes: '',
        text: 'Qty',
        hidden: false
      },
      field: {
        class: 'cart-list-item__input text-center',
        id: 'qty',
        name: 'qty',
        type: 'number',
        attributes: 'value="1"'
      }
    },
    total: {
      labelClass: 'margin-right-xs',
      label: 'Subtotal:',
      amount: '$159.95'
    },
    edit: {
      tag: 'button',
      class: 'button button--icon button--icon-light cart-list-item__action',
      icon: {
        id: 'edit',
        title: 'Edit product',
        class: 'button__icon cart-list-item__action-icon'
      },
      attributes: 'type="button" aria-label="Clickt to edit this product"'
    },
    delete: {
      tag: 'button',
      class: 'button button--icon button--icon-light cart-list-item__action',
      icon: {
        id: 'remove',
        title: 'Remove product',
        class: 'button__icon cart-list-item__action-icon'
      },
      attributes: 'type="button" aria-label="Click to remove this product"'
    }
  }
}
