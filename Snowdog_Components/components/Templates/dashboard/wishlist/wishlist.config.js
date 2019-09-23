module.exports = {
  context: {
    wishlistItems: [
      {
        product: {
          image: {
            dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
          },
          name: {
            href: '#',
            class: 'wishlist__item-name-link',
            text: 'Chaz Kangeroo Hoodie'
          },
          price: {
            class: 'price-box',
            regularPriceClass: 'price-as-configured'
          }
        },
        textarea: {
          class: 'wishlist__comment',
          field: {
            id: 'comment',
            name: 'comment',
            placeholder: 'Comment'
          }
        },
        qty: {
          class: 'input--inline wishlist__qty',
          label: {
            text: 'Qty:',
            class: 'wishlist__label'
          },
          field: {
            id: 'qty',
            name: 'qty',
            type: 'number',
            class: 'wishlist__field-qty'
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: 'button--icon',
          icon: {
            id: 'edit',
            title: 'Edit',
            class: 'button__icon'
          }
        },
        removeIcon: {
          tag: 'button',
          attributes: 'type="button" aria-label="Remove product from wishlist"',
          class: 'button--icon wishlist__remove',
          icon: {
            id: 'remove',
            title: 'Remove',
            class: 'button__icon '
          }
        },
        addToCart: {
          tag: 'button',
          text: 'Add to Cart',
          class: 'wishlist__button'
        }
      },
      {
        product: {
          image: {
            dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
          },
          name: {
            href: '#',
            class: 'wishlist__item-name-link',
            text: 'Bruno Compete Hoodie'
          },
          price: {
            class: 'price-box',
            regularPriceClass: 'price-as-configured'
          }
        },
        textarea: {
          class: 'wishlist__comment',
          field: {
            id: 'comment',
            name: 'comment',
            placeholder: 'Comment'
          }
        },
        qty: {
          class: 'input--inline wishlist__qty',
          label: {
            text: 'Qty:',
            class: 'wishlist__label'
          },
          field: {
            id: 'qty',
            name: 'qty',
            type: 'number',
            class: 'wishlist__field-qty'
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: 'button--icon',
          icon: {
            id: 'edit',
            title: 'Edit',
            class: 'button__icon'
          }
        },
        removeIcon: {
          tag: 'button',
          attributes: 'href="#" aria-label="Remove product from wishlist"',
          class: 'button--icon wishlist__remove',
          icon: {
            id: 'remove',
            title: 'Remove',
            class: 'button__icon'
          }
        },
        addToCart: {
          tag: 'button',
          text: 'Add to Cart',
          class: 'wishlist__button'
        }
      }
    ],
    actions: [
      {
        tag: 'button',
        text: 'Update Wish List',
        class: 'button--secondary action__button'
      },
      {
        tag: 'button',
        text: 'Share Wish List',
        class: 'button--secondary action__button'
      },
      {
        tag: 'button',
        text: 'Add All to Cart',
        class: 'button--secondary action__button'
      }
    ],
    backLink: {
      text: 'Back',
      title: 'Back to My Account'
    }
  }
}
