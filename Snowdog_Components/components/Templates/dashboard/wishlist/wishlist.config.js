module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    actionsGroupClass: 'wishlist__actions',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Wishlist',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Dashboard'
    },
    wishlistItems: [
      {
        product: {
          class: 'col-xs-6 col-md-4',
          image: {
            dataSrc: '/images/catalog-grid-item/product-color-swatch-image-1-32_40.jpg'
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
          class: 'margin-0',
          field: {
            id: 'comment',
            name: 'comment',
            placeholder: 'Comment'
          },
          label: {
            text: 'Comment',
            hidden: true
          }
        },
        qty: {
          class: 'wishlist__qty',
          label: {
            text: 'Quantity:',
            class: 'wishlist__label'
          },
          field: {
            id: 'qty',
            name: 'qty',
            type: 'number',
            class: 'wishlist__field-qty',
            attributes: 'value="1"'
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: '',
          icon: {
            id: 'edit',
            title: 'Edit',
            class: '',
            hidden: true
          }
        },
        removeIcon: {
          tag: 'button',
          attributes: 'type="button" aria-label="Remove product from wishlist"',
          class: '',
          icon: {
            id: 'remove',
            title: 'Remove',
            class: '',
            hidden: true
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
          class: 'col-xs-6 col-md-4',
          image: {
            dataSrc: '/images/catalog-grid-item/product-color-swatch-image-1-32_40.jpg'
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
          class: 'margin-0',
          field: {
            id: 'comment2',
            name: 'comment',
            placeholder: 'Comment'
          },
          label: {
            text: 'Comment',
            hidden: true
          }
        },
        qty: {
          class: 'wishlist__qty',
          label: {
            text: 'Quantity:',
            class: 'wishlist__label'
          },
          field: {
            id: 'qty2',
            name: 'qty',
            type: 'number',
            class: 'wishlist__field-qty',
            attributes: 'value="1"'
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: '',
          icon: {
            id: 'edit',
            title: 'Edit',
            class: '',
            hidden: true
          }
        },
        removeIcon: {
          tag: 'button',
          attributes: 'href="#" aria-label="Remove product from wishlist"',
          class: '',
          icon: {
            id: 'remove',
            title: 'Remove',
            class: '',
            hidden: true
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
        class: 'actions-group__button'
      },
      {
        tag: 'button',
        text: 'Share Wish List',
        class: 'button--secondary actions-group__button'
      },
      {
        tag: 'button',
        text: 'Add All to Cart',
        class: 'button--secondary actions-group__button'
      }
    ],
    backLink: {
      text: 'Back',
      title: 'Back to My Account'
    }
  }
}
