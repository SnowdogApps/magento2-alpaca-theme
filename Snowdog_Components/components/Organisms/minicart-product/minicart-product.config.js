module.exports = {
  context: {
    productImage: {
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/product/minicart-product-64x96.jpeg',
      alt: 'product name goes here'
    },
    productName: 'Some product name',
    productPrice: '$85.00',
    productQty: {
      class: 'input--inline minicart-product__input margin-bottom-0 margin-right-m',
      label: {
        class: 'minicart-product__label',
        text: 'Qty:',
        hidden: false
      },
      field: {
        attributes: 'aria-label="Change the quantity" min="1"',
        class: 'minicart-product__field',
        id: 'mini-qty',
        name: 'mini-qty',
        placeholder: '32',
        type: 'text'
      }
    },
    updateQty: {
      tag: 'button',
      text: 'Update',
      class: 'button--secondary minicart-product__update',
      attributes: 'type="button"'
    },
    attributes: {
      class: 'minicart-product__attributes-list'
    },
    editIcon: {
      tag: 'a',
      attributes: 'href="#" aria-label="edit product in your shopping cart"',
      text: '',
      class: 'button--icon-light minicart-product__button',
      icon: {
        id: 'edit',
        title: 'Edit pencil',
        class: 'button__icon minicart-product__button-icon'
      }
    },
    removeIcon: {
      tag: 'a',
      attributes: 'href="#" aria-label="remove this product from your shopping cart"',
      text: '',
      class: 'button--icon-light minicart-product__button',
      icon: {
        id: 'remove',
        title: 'Trash bin',
        class: 'button__icon minicart-product__button-icon'
      }
    },
    configurable: true
  }
}
