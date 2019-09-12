module.exports = {
  context: {
    productImage: {
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/product/minicart-product-64x96.jpeg',
      alt: 'product name goes here'
    },
    productName: 'Some product name',
    productPrice: '$85.00',
    attributes: {
      class: 'minicart-product__attributes',
      dropdowns: [
        {
          itemTag: 'button',
          class: 'minicart-product__attributes-button',
          itemAttributes: 'aria-expanded="false" aria-controls="see-details"',
          title: 'See Details',
          id: 'see-details',
          collapse: {
            id: 'angle-down',
            title: 'Arrow down',
            class: 'dropdown-list__icon'
          },
          contentElement: 'list--description',
          contentContext: {
            listTag: 'ul',
            elementTag: 'li',
            class: 'minicart-product__attributes-list',
            elements: [
              {
                label: 'Label',
                value: 'Value'
              },
              {
                label: 'Label',
                value: 'Value'
              }
            ]
          }
        }
      ]
    },
    editIcon: {
      tag: 'a',
      attributes: 'href="#" aria-label="edit product in your shopping cart"',
      text: '',
      class: 'button--icon minicart-product__button',
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
      class: 'button--icon minicart-product__button',
      icon: {
        id: 'remove',
        title: 'Trash bin',
        class: 'button__icon minicart-product__button-icon'
      }
    },
    configurable: true
  }
}
