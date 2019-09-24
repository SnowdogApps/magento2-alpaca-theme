module.exports = {
  context: {
    tag: 'section',
    class: '',
    image: {
      wrapperClass: 'product-list-item__image',
      dataSrc: '/images/product/product-160_240.jpg'
    },
    badge: {
      name: 'badge--new',
      context: {
        class: 'badge badge--new product-list-item__badge',
        text: 'NEW'
      }
    },
    linkName: {
      class: 'product-list-item__name-link',
      text: 'Some product name - very long name because that\'s important'
    },
    sku: 'SKU: CEL-31145',
    stockButton: {
      class: 'button--link product-list-item__stock',
      text: 'In stock'
    },
    price: {
      name: 'price',
      context: {
        class: 'product-list-item__price',
        attributes: 'aria-label="Product price" tabindex="0"',
      }
    },
    secondaryActions: {
      wishlist: {
        class: 'product-list-item__button-action',
        icon: {
          id: 'heart',
          title: 'Heart',
          class: 'button__icon'
        },
        attributes: 'type="button" aria-label="Add to Wish List"',
      },
      compare: {
        class: 'product-list-item__button-action',
        icon: {
          id: 'compare',
          title: 'Compare',
          class: 'button__icon'
        },
        attributes: 'type="button" aria-label="Add to compare"',
      }
    },
    addToButton: {
      text: 'Add to cart',
      class: 'button--add-to-icon product-list-item__add-to-button',
      iconBefore: {
        id: 'shopping-cart',
        title: 'Add to Cart',
        class: 'button__icon',
      },
      attributes: 'type="button" aria-label="Add to cart"'
    }
  },
  variants: [
    {
      name: 'special-price',
      context: {
        name: 'Short name',
        price: {
          name: 'price--with-special-price',
          context: {
            attributes: 'aria-label="Product price" tabindex="0"',
          }
        }
      }
    }
  ]
};
