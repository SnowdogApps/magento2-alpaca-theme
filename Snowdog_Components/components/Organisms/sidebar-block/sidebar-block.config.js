module.exports = {
  context: {
    headingClass: '',
    title: {
      tag: 'h2',
      class: 'heading--second-level sidebar-block__title',
      text: 'Compare Products',
    },
    qty: '3 items',
    removeButton: {
      tag: 'button',
      attributes: 'aria-label="Remove product from compare" title="Remove product from compare"',
      class: 'sidebar-block__remove margin-right-xs',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'icon sidebar-block__remove-icon'
      }
    },
    product: [
      {
        productName: {
          class: 'sidebar-block__link',
          href: '#',
          text: 'Chaz Kangeroo Hoodie'
        }
      },
      {
        productName: {
          class: 'sidebar-block__link',
          href: '#',
          text: 'Bruno Compete Hoodie'
        }
      },
      {
        productName: {
          class: 'sidebar-block__link',
          href: '#',
          text: 'Hero Hoodie'
        }
      }
    ],
    compareLink: {
      href: '#',
      class: 'sidebar-block__action',
      text: 'Compare'
    },
    clearButton: {
      tag: 'button',
      attributes: 'type="button"',
      class: 'button--link sidebar-block__action',
      text: 'Clear all'
    }
  },
  variants: [
    {
      name: 'Wishlist',
      headingClass: '',
      context: {
        title: {
          tag: 'h2',
          class: 'sidebar-block__title',
          text: 'My Wish List',
        },
        compareLink: false,
        clearLink: false,
        wishlistListItemClass: 'margin-bottom-m',
        addToCart: {
          tag: 'button',
          class: 'button--link sidebar-block__action',
          attributes: 'type="button"',
          text: 'Add to Cart'
        },
        removeFromWishlist: {
          tag: 'button',
          class: 'button--link sidebar-block__action',
          attributes: 'type="button"',
          text: 'Remove this item'
        },
        product: [
          {
            name: 'Chaz Kangeroo Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
              class: 'sidebar-block__remove-icon'
            }
          },
          {
            name: 'Bruno Compete Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
              class: 'sidebar-block__remove-icon'
            }
          },
          {
            name: 'Hero Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
              class: 'sidebar-block__remove-icon'
            }
          }
        ],
        goToWishlist: {
          tag: 'a',
          class: 'button--secondary button--fluid',
          attributes: 'href="#"',
          text: 'Go to Wish List'
        }
      }
    },
    {
      name: 'Recently ordered',
      context: {
        title: {
          tag: 'h2',
          class: 'sidebar-block__title',
          text: 'Recently Ordered',
        },
        compareLink: false,
        clearLink: false,
        product: [
          {
            name: 'Chaz Kangeroo Hoodie',
            checkbox: {
              id: 'reorder-item-1',
              class: 'sidebar-block__checkbox',
              name: 'order-item-1',
              label: {
                text: 'Add to Cart'
              }
            }
          },
          {
            name: 'Bruno Compete Hoodie',
            checkbox: {
              id: 'reorder-item-2',
              class: 'sidebar-block__checkbox',
              name: 'order-item-2',
              label: {
                text: 'Add to Cart'
              }
            }
          },
          {
            name: 'Hero Hoodie',
            checkbox: {
              id: 'reorder-item-3',
              class: 'sidebar-block__checkbox',
              name: 'order-item-3',
              label: {
                text: 'Add to Cart'
              }
            }
          }
        ],
        addToCart: {
          tag: 'button',
          class: 'button--link sidebar-block__action',
          attributes: 'type="button"',
          text: 'Add to Cart'
        },
        viewAll: {
          href: '#',
          class: 'sidebar-block__action',
          text: 'View All'
        }
      }
    },
    {
      name: 'Recently viewed',
      context: {
        title: {
          tag: 'h2',
          class: 'sidebar-block__title',
          text: 'Recently Viewed',
        },
        compareLink: false,
        clearLink: false,
        wishlistItemClass: 'margin-bottom-m',
        addToCart: {
          tag: 'button',
          class: 'button--link margin-bottom-s sidebar-block__action',
          attributes: 'type="button"',
          text: 'Add to Cart'
        },
        removeFromWishlist: {
          tag: 'button',
          class: 'button--link sidebar-block__action',
          attributes: 'type="button"',
          text: 'Remove this item'
        },
        product: [
          {
            name: 'Chaz Kangeroo Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
              class: 'sidebar-block__remove-icon'
            }
          },
          {
            name: 'Bruno Compete Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
              class: 'sidebar-block__remove-icon'
            }
          },
          {
            name: 'Hero Hoodie',
            iconLabel: 'Remove product from compare',
            icon: {
              id: 'close',
              title: 'Close',
              class: 'sidebar-block__remove-icon'
            }
          }
        ],
      }
    }
  ]
};
