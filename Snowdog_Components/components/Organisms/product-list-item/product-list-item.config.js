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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    stockButton: {
      class: 'button--link modal-trigger product-list-item__stock',
      text: 'In stock',
      attributes: 'type="button" data-modal-trigger="shipping-latency-1"'
    },
    shippingLatencyModal: {
      modal: {
        id: 'shipping-latency-1',
        attributes: 'aria-labbeledny="shipping-latency-title-1"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon modal__close-button-icon'
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="shipping-latency-title-1"',
        text: 'Shipping Latency Modal'
      },
      modalMiddle: true,
      modalDescription: {
        attributes: '',
        class: 'margin-bottom-xs',
        tag: 'p',
        text: 'This is a shipping latency modal. Inside we have some text from shippig latency module.'
      }
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
        class: 'button--icon-light product-list-item__button-action',
        icon: {
          id: 'heart',
          title: 'Heart',
          class: 'button__icon'
        },
        attributes: 'type="button" aria-label="Add to Wish List"',
      },
      compare: {
        class: 'button--icon-light product-list-item__button-action',
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
      class: 'button--add-to-icon product-list-item__add-to-button button--fluid',
      attributes: 'type="button" aria-label="Add to cart"',
      iconBefore: {
        id: 'shopping-cart',
        title: 'Add to cart',
        class: 'button__icon',
        hidden: true
      }
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
