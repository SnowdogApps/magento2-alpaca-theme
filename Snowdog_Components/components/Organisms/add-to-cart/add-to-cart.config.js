module.exports = {
  context: {
    title: 'Bluzka ONLSANSA SINGLET WVN',
    classTitle: 'padding-right-m',
    moreIcon: {
      id: 'more',
      title: 'More',
      class: 'button__icon',
      hidden: true
    },
    moreIconClose: {
      id: 'close',
      title: 'Close',
      class: 'button__icon-close',
      hidden: true
    },
    wishlistBtn: {
      tag: 'button',
      text: 'Wishlist',
      class: 'product-view__button',
      iconBefore: {
        id: 'heart',
        title: 'Arrow left',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Add product to wishlist"'
    },
    compareBtn: {
      tag: 'button',
      text: 'Compare',
      class: 'product-view__button',
      iconBefore: {
        id: 'compare',
        title: 'Add to compare list',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Compare product"'
    },
    addToCartBtn: {
      class: 'button--add-to',
      attributes: 'type="submit" aria-label="Add to cart"'
    }
  }
};
