module.exports = {
  context: {
    tag: 'div',
    class: '',
    swatches: true,
    productBadges: {
      class: 'product-grid-item__badges',
      badges: [
        {
          contentElement: 'badge',
          contentContext: {
            text: '-15%'
          }
        },
        {
          contentElement: 'badge--new',
          contentContext: {
            text: 'New'
          }
        }
      ]
    },
    image: {
      wrapperClass: 'product-grid-item__image-wrapper',
      dataSrc: '/images/product/product-368_552.jpg'
    },
    name: 'Long product name can have maximum 50 caractere...',
    price: {
      name: 'price',
      context: {
        regularPrice: '1 400',
        specialPrice: '',
        prefix: {
          tag: '',
          text: '$'
        },
        suffix: {
          tag: '',
          text: ''
        }
      }
    },
    rating: {
      class: 'product-grid-item__rating rating--secondary'
    },
    secondaryActions: {
      wishlist: {
        tag: 'button',
        class: 'add-to-wishlist',
        icon: {
          id: 'heart',
          title: 'Heart',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="Add to Wish List"',
      },
      compare: {
        tag: 'button',
        class: '',
        icon: {
          id: 'compare',
          title: 'Compare',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="Add to compare"',
      },
      addToCart: {
        tag: 'button',
        class: 'button--add-to',
        icon: {
          id: 'shopping-cart',
          title: 'Add to cart',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="submit" aria-label="Add to cart"',
      }
    }
  },
  variants: [
    {
      name: 'special-price',
      context: {
        productBadges: {
          class: 'product-grid-item__badges',
          badges: [
            {
              contentElement: 'badge',
              contentContext: {
                text: '-10%'
              }
            }
          ]
        },
        name: 'Short name',
        price: {
          name: 'price--with-special-price',
          context: {
            oldPriceClass: 'product-grid-item__old-price',
            regularPrice: '1000.00',
            specialPrice: '899.99',
            specialPriceClass: 'product-grid-item__special-price',
            prefix: {
              tag: '',
              text: '$'
            },
            suffix: {
              tag: '',
              text: ''
            }
          }
        }
      }
    },
    {
      name: 'wishlist',
      context: {
        class: 'product-grid-item--wishlist',
        wisthlistComment: {
          class: 'product-grid-item__wishlist-comment',
          label: {
            text: 'Comment',
            hidden: true
          },
          field: {
            id: 'wishlist-comment-product-1',
            name: 'wishlist-comment-product-1',
            placeholder: 'Comment',
            type: 'text'
          }
        },
        wishlistQtyLabel: {
          text: 'Quantity:',
          for: 'qty-product-1'
        },
        wishlistQtyUpdate: {
          input: {
            id: 'qty-product-1',
            name: 'qty-product-1'
          }
        },
        secondaryActions: {
          edit: {
            tag: 'a',
            class: '',
            icon: {
              id: 'edit',
              title: 'edit',
              class: 'button__icon',
              hidden: true
            },
            attributes: 'href="#" aria-label="Edit product"',
          },
          remove: {
            tag: 'button',
            class: '',
            icon: {
              id: 'remove',
              title: 'Remove',
              class: 'button__icon',
              hidden: true
            },
            attributes: 'type="button" aria-label="Remove product from wishlist"'
          }
        },
        wishlistAddToCart: {
          tag: 'button',
          class: '',
          text: 'Add to cart',
          attributes: 'type="button"'
        }
      }
    },
    {
      name: 'slider-item',
      context: {
        class: 'product-grid-item--slider-item'
      }
    }
  ]
};
