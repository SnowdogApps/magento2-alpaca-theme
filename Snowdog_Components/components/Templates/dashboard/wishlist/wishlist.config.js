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
            text: 'Chaz Kangeroo Hoodie product with long name more than 3 lines Chaz Kangeroo Hoodie'
          },
          priceSpecial: {
            class: 'price-box'
          }
        },
        textarea: {
          class: 'margin-0 wishlist__comment',
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
          labelText: 'Quantity:',
          input: {
            id: 'qty',
            min: '1',
            name: 'qty',
            defaultValue: '1',
            ariaLabel: 'Change the quantity'
          },
          minusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
            attributes: 'type="button" aria-label="Decrease the quantity"',
            icon: {
              id: 'minus',
              title: 'Minus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          plusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--plus',
            attributes: 'type="button" aria-label="Increase the quantity"',
            icon: {
              id: 'plus',
              title: 'Plus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          script: false
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
          class: 'margin-0 wishlist__comment',
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
          labelText: 'Quantity:',
          input: {
            id: 'qty',
            min: '1',
            name: 'qty',
            defaultValue: '1',
            ariaLabel: 'Change the quantity'
          },
          minusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
            attributes: 'type="button" aria-label="Decrease the quantity"',
            icon: {
              id: 'minus',
              title: 'Minus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          plusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--plus',
            attributes: 'type="button" aria-label="Increase the quantity"',
            icon: {
              id: 'plus',
              title: 'Plus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          script: false
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
          class: 'margin-0 wishlist__comment',
          field: {
            id: 'comment3',
            name: 'comment',
            placeholder: 'Comment'
          },
          label: {
            text: 'Comment',
            hidden: true
          }
        },
        qty: {
          labelText: 'Quantity:',
          input: {
            id: 'qty',
            min: '1',
            name: 'qty',
            defaultValue: '1',
            ariaLabel: 'Change the quantity'
          },
          minusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
            attributes: 'type="button" aria-label="Decrease the quantity"',
            icon: {
              id: 'minus',
              title: 'Minus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          plusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--plus',
            attributes: 'type="button" aria-label="Increase the quantity"',
            icon: {
              id: 'plus',
              title: 'Plus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          script: false
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
          class: 'margin-0 wishlist__comment',
          field: {
            id: 'comment4',
            name: 'comment',
            placeholder: 'Comment'
          },
          label: {
            text: 'Comment',
            hidden: true
          }
        },
        qty: {
          labelText: 'Quantity:',
          input: {
            id: 'qty',
            min: '1',
            name: 'qty',
            defaultValue: '1',
            ariaLabel: 'Change the quantity'
          },
          minusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
            attributes: 'type="button" aria-label="Decrease the quantity"',
            icon: {
              id: 'minus',
              title: 'Minus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          plusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--plus',
            attributes: 'type="button" aria-label="Increase the quantity"',
            icon: {
              id: 'plus',
              title: 'Plus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          script: false
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
          class: 'margin-0 wishlist__comment',
          field: {
            id: 'comment5',
            name: 'comment',
            placeholder: 'Comment'
          },
          label: {
            text: 'Comment',
            hidden: true
          }
        },
        qty: {
          labelText: 'Quantity:',
          input: {
            id: 'qty',
            min: '1',
            name: 'qty',
            defaultValue: '1',
            ariaLabel: 'Change the quantity'
          },
          minusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--minus quantity-update__button--disabled',
            attributes: 'type="button" aria-label="Decrease the quantity"',
            icon: {
              id: 'minus',
              title: 'Minus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          plusQtyButton: {
            tag: 'button',
            class: 'quantity-update__button quantity-update__button--plus',
            attributes: 'type="button" aria-label="Increase the quantity"',
            icon: {
              id: 'plus',
              title: 'Plus mark',
              class: 'button__icon quantity-update__icon',
              hidden: true
            }
          },
          script: true
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
