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
    toolbar: {
      showMode: false,
      showSorter: false,
      showAmount: true,
      showLimit: true,
      showPager: true,
      amount: {
        class: 'toolbar__amount--visible'
      },
      limiter: {
        class: 'toolbar__limiter--relative'
      }
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Wish List'
    },
    wishlistItems: [
      {
        product: {
          class: 'col-xs-12 col-sm-6 col-md-4 margin-bottom-sm',
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
          class: 'wishlist__qty',
          label: {
            class: 'wishlist__label',
            text: 'Quantity:',
            for: 'qty-product-1'
          },
          field: {
            label: true,
            input: {
              id: 'qty-product-1',
              class: 'wishlist__field-qty'
            }
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: '',
          icon: {
            id: 'edit',
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
          class: 'col-xs-12 col-sm-6 col-md-4 margin-bottom-sm',
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
          class: 'wishlist__qty quantity-update--wishlist',
          label: {
            class: 'wishlist__label',
            text: 'Quantity:',
            for: 'qty-product-2'
          },
          field: {
            label: true,
            input: {
              id: 'qty-product-2',
              class: 'wishlist__field-qty'
            }
          }
        },
        editIcon: {
          tag: 'a',
          attributes: 'href="#" aria-label="Edit product parameters"',
          class: '',
          icon: {
            id: 'edit',
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
    actions: {
      class: 'wishlist__actions',
      sides: [
        {
          action: [
            {
              button: {
                text: 'Update Wish List',
                class: 'actions-group__button'
              }
            },
            {
              button: {
                text: 'Share Wish List',
                class: 'button--secondary actions-group__button'
              }
            },
            {
              button: {
                text: 'Add All to Cart',
                class: 'button--secondary actions-group__button'
              }
            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Back',
                title: 'Back to My Account',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  },
  variants: [
    {
      name: 'share',
      context: {
        heading: {
          text: 'Wish List Sharing'
        },
        form: {
          title: {
            tag: 'h2',
            class: 'dashboard-form__title margin-bottom-sm',
            text: 'Sharing Information'
          },
          textareas: [
            {
              textarea: {
                label: {
                  text: 'Email addresses, separated by commas',
                  hidden: false
                },
                field: {
                  id: 'email_address',
                  name: 'email_address',
                  placeholder: '',
                  type: 'text'
                }
              }
            },
            {
              textarea: {
                label: {
                  text: 'Message',
                  hidden: false
                },
                field: {
                  id: 'message',
                  name: 'message',
                  placeholder: '',
                  type: 'text'
                }
              }
            }
          ],
          checkboxes: [
            {
              checkbox: {
                class: 'padding-bottom-m',
                id: 'rss_url',
                name: 'rss_url',
                label: {
                  text: 'Check here to link an RSS feed to your Wish List.'
                }
              }
            }
          ]
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: {
                    tag: 'button',
                    class: 'actions-group__button',
                    attributes: 'type="button" aria-label="button"',
                    text: 'Share Wish List'
                  }
                },
                {
                  link: {
                    href: '#',
                    title: 'Back',
                    text: 'Back'
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: 'management',
      title: 'Wishlist with Management',
      context: {
        management: {
          listClass: 'margin-bottom-m',
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
                class: 'button--secondary modal-trigger margin-top-xs',
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
              content: ''
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
                class: 'button--secondary modal-trigger margin-top-xs',
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
              content: ''
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
        headingMyWishList: {
          class: 'margin-bottom-0',
          tag: 'h2',
          text: 'Active Wish List'
        },
        headingInfoWishList: {
          class: '',
          tag: 'h2',
          text: 'Wish List Informations:'
        },
        headingMoveWishList: {
          class: 'margin-bottom-0',
          tag: 'h2',
          text: 'Move Selected to Wish List:'
        },
        headingCopyWishList: {
          class: 'margin-bottom-0',
          tag: 'h2',
          text: 'Copy Selected to Wish List:'
        },
        myWishListsList: {
          id: 'dropdown-list-1',
          class: 'dropdown-list--detailed-content',
          dropdowns: [
            {
              itemTag: 'a',
              itemAttributes: 'href="#" aria-expanded="false"',
              title: 'Active Wish List',
              id: 'dropdown-detailed-content-1',
              collapse: {
                id: 'angle-down',
                title: 'Arrow Down',
                class: 'dropdown-list__icon',
                attributes: 'aria-hidden="true"'
              },
              contentElement: 'list',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                elements: [
                  {
                    link: '#',
                    text: 'First Wish List',
                    class: 'padding-0 wishlist-management__item'
                  },
                  {
                    link: '#',
                    text: 'Second Wish List',
                    class: 'padding-0 wishlist-management__item'
                  }
                ]
              }
            }
          ]
        },
        copyWishListsList: {
          id: 'dropdown-list-2',
          class: 'dropdown-list--detailed-content',
          dropdowns: [
            {
              itemTag: 'a',
              itemAttributes: 'href="#" aria-expanded="false"',
              title: 'Active Wish List',
              id: 'dropdown-detailed-content-2',
              collapse: {
                id: 'angle-down',
                title: 'Arrow Down',
                class: 'dropdown-list__icon',
                attributes: 'aria-hidden="true"'
              },
              contentElement: 'list',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                elements: [
                  {
                    link: '#',
                    text: 'First Wish List',
                    class: 'padding-0 wishlist-management__item'
                  },
                  {
                    link: '#',
                    text: 'Second Wish List',
                    class: 'padding-0 wishlist-management__item'
                  }
                ]
              }
            }
          ]
        },
        moveWishListsList: {
          id: 'dropdown-list-3',
          class: 'dropdown-list--detailed-content',
          dropdowns: [
            {
              itemTag: 'a',
              itemAttributes: 'href="#" aria-expanded="false"',
              title: 'Active Wish List',
              id: 'dropdown-detailed-content-3',
              collapse: {
                id: 'angle-down',
                title: 'Arrow Down',
                class: 'dropdown-list__icon',
                attributes: 'aria-hidden="true"'
              },
              contentElement: 'list',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                elements: [
                  {
                    link: '#',
                    text: 'First Wish List',
                    class: 'padding-0 wishlist-management__item'
                  },
                  {
                    link: '#',
                    text: 'Second Wish List',
                    class: 'padding-0 wishlist-management__item'
                  }
                ]
              }
            }
          ]
        },
        selectAll: {
          id: 'wishlist__select-all',
          name: 'wishlist__select-all',
          attributes: 'data-role="select-all"',
          label: {
            text: 'Select All',
            class: ''
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
      }
    }
  ]
}
