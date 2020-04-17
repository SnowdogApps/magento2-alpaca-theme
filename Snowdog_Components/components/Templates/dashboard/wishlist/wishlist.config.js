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
    management: {
      myWishListsTitle: 'My Wish Lists:',
      wishListInfoTitle: 'Wish List Information\'s:',
      moveTitle: 'Move Selected to Wish List:',
      copyTitle: 'Copy Selected to Wish List:',
      wishListName: 'Wishlist name',
      listClass: 'margin-bottom-m',
      itemsClass: 'margin-vc-xs',
      items: [
        {
          active: true,
          name: 'First Wish List',
        },
        {
          name: 'Second Wish List',
        },
        {
          name: 'Third Wish List',
        }
      ],
      actionsGroupClass: 'wishlist-management__actions',
      modalCreateTrigger: {
        modal: {
          class: '',
          id: 'create-wish-list',
          attributes: 'aria-labelledby="myTitle" aria-describedby="myDesc"'
        },
        trigger: true,
        modalTrigger: {
          buttonModalTrigger: {
            tag: 'button',
            class: 'modal-trigger margin-top-xs',
            text: 'Create New Wish List',
            attributes: 'data-modal-trigger="create-wish-list" type="button" aria-expanded="false"'
          }
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
          attributes: 'id="myTitle"',
          tag: 'h3',
          class: 'heading heading--third-level',
          text: 'Create New Wish List'
        },
        modalMiddle: true,
        modalComponent: {
          content: 'wishlist--add-new'
        },
        checkbox: {
          id: 'checkbox',
          name: 'public-wish-list',
          label: {
            text: 'Public Wish List'
          }
        },
        input: {
          label: {
            text: 'Wish List Name',
            hidden: false
          },
          field: {
            id: 'wihlist-name',
            name: 'wihlist-name',
            placeholder: '',
            type: 'text'
          }
        },
        modalBottom: true,
        modalBottomActions: [
          {
            content: 'button--secondary',
            contentContext: {
              text: 'Cancel'
            }
          },
          {
            content: 'button',
            contentContext: {
              text: 'Save'
            }
          }
        ]
      },
      modalEditTrigger: {
        modal: {
          class: '',
          id: '',
          attributes: 'aria-labelledby="edit-wish-list" aria-describedby="myDesc"'
        },
        trigger: true,
        modalTrigger: {
          buttonModalTrigger: {
            tag: 'button',
            class: 'modal-trigger margin-top-xs',
            text: 'Edit Active Wish List',
            attributes: 'data-modal-trigger="edit-wish-list" type="button" aria-expanded="false"'
          }
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
          attributes: 'id="myTitle"',
          tag: 'h3',
          class: 'heading heading--third-level',
          text: 'Create New Wish List'
        },
        modalMiddle: true,
        modalComponent: {
          content: 'wishlist--edit'
        },
        checkbox: {
          id: 'checkbox',
          name: 'public-wish-list',
          label: {
            text: 'Public Wish List'
          }
        },
        input: {
          label: {
            text: 'Wish List Name',
            hidden: false
          },
          field: {
            id: 'wihlist-name',
            name: 'wihlist-name',
            placeholder: '',
            type: 'text'
          }
        },
        modalBottom: true,
        modalBottomActions: [
          {
            content: 'button--secondary',
            contentContext: {
              text: 'Cancel'
            }
          },
          {
            content: 'button',
            contentContext: {
              text: 'Save'
            }
          }
        ]
      },
      info: [
        {
          notice: 'Public Wish List'
        },
        {
          notice: '7 items in wish list'
        }
      ]
    },
    wishlistItems: [
      {
        product: {
          class: 'col-xs-6 col-md-4 margin-bottom-sm',
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
          },
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
            ariaLabel: 'Change the quantity',
            class: 'wishlist__field-qty margin-0'
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
          class: 'wishlist__button padding-hz-sm'
        },
        checkbox: {
          id: '',
          name: 'product-item-checkbox',
          label: {
            text: 'Select Product'
          },
          iconChecked: {
            class: ''
          },
          iconUnchecked: {
            class: ''
          },
          input: {
            class: ''
          }
        },
        itemContentClass: 'margin-hz-xs',
        itemSelectClass: 'margin-hz-xs',
        itemNameClass: 'padding-0'
      },
      {
        product: {
          class: 'col-xs-6 col-md-4 margin-bottom-sm',
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
            regularPriceClass: 'price-as-configured margin-0'
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
            ariaLabel: 'Change the quantity',
            class: 'wishlist__field-qty margin-0'
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
        },
        checkbox: {
          id: '',
          name: 'product-item-checkbox',
          label: {
            text: 'Select Product'
          },
          iconChecked: {
            class: ''
          },
          iconUnchecked: {
            class: ''
          },
          input: {
            class: ''
          }
        },
        itemContentClass: 'margin-hz-xs',
        itemSelectClass: 'margin-hz-xs',
        itemNameClass: 'padding-0'
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
    },
  }
}
