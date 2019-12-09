module.exports = {
  name: 'price',
  context: {
    regularPrice: '159.95',
    specialPrice: '',
    prefix: {
      tag: '',
      text: '$'
    },
    suffix: {
      tag: '',
      text: ''
    }
  },
  variants: [
    {
      name: 'with-special-price',
      context: {
        oldPriceClass: '',
        prefix: {
          tag: '',
          closingTag: '',
          text: '$'
        },
        regularPrice: '249.95',
        regularPriceClass: '',
        specialPrice: '159.95',
        specialPriceClass: '',
        suffix: {
          tag: '',
          closingTag: '',
          text: ''
        },
      }
    },
    {
      name: 'between',
      context: {
        priceClass: 'price__value--between',
        textBeforeFromPrice: 'From',
        textBeforeToPrice: 'To',
        fromPrice: '61.00',
        toPrice: '79.00'
      }
    }
  ]
}
