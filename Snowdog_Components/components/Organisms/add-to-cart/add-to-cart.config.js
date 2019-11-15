module.exports = {
  context: {
    title: 'Bluzka ONLSANSA SINGLET WVN',
    moreBtn: {
      tag: 'button',
      text: '',
      class: ' button--icon-light add-to-cart__button-more',
      icon: {
        id: 'more',
        title: 'More',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-expanded="false"'
    },
    wishlistBtn: {
      tag: 'button',
      text: '',
      class: 'button--icon-light product-view__button',
      icon: {
        id: 'heart',
        title: 'Arrow left',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Add product to wishlist"'
    },
    compareBtn: {
      tag: 'button',
      text: '',
      class: 'button--icon-light product-view__button',
      icon: {
        id: 'compare',
        title: 'Add to compare list',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Compare product"'
    },
    addToCartBtn: {
      tag: 'button',
      text: 'Add to cart',
      class: 'button--add-to-icon add-to-cart__button',
      iconAfter: {
        id: 'shopping-cart',
        title: 'Add to Cart',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="submit" aria-label="Add to cart"'
    }
  }
};
