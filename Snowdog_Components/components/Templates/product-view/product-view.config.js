module.exports = {
  context: {
    title: 'Bluzka ONLSANSA SINGLET WVN',
    titleClass: 'product-view__title',
    sku: 'SKU: CEL-31145',
    gallery: {
      class: 'gallery--dots'
    },
    productBadges: {
      class: 'product-view__badges',
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
    stockButton: {
      class: 'button--link modal-trigger product-view__stock',
      text: 'In stock',
      attributes: 'type="button" data-modal-trigger="shipping-latency-product"'
    },
    downloadableSamples: {
      label: {
        text: 'Trailers:',
        class: 'product-view__short-description-heading margin-bottom-xs'
      },
      elements: [
        {
          href: '#',
          text: 'Trailer #1',
          class: 'link--invert item-link samples-item-link'
        },
        {
          href: '#',
          text: 'Trailer #2',
          class: 'link--invert item-link samples-item-link'
        },
        {
          href: '#',
          text: 'Trailer #3',
          class: 'link--invert item-link samples-item-link'
        }
      ]
    },
    shortDescription: {
      class: 'margin-top-m',
      heading: {
        tag: 'h2',
        class: 'product-view__short-description-heading margin-bottom-xs',
        text: 'Short description:'
      },
      text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. Lorem Ipsum has been the industry.'
    },
    downloadableLinks: {
      legend: {
        class: 'fieldset__legend--hidden legend links-title',
        text: 'Downloads'
      },
      label: {
        class: 'product-view__short-description-heading',
        text: 'Downloads:'
      },
      checkboxes: [
        {
          id: 'links_1',
          class: 'field choice',
          attributes: 'value="1"',
          label: {
            text: `
              Episode 1
              <a
                class="
                  link
                  link--invert
                  sample
                "
                href="#"
              >
                Sample
              </a>
              <span class="price-wrapper">
                $9.00
              </span>
            `,
          }
        },
        {
          id: 'links_2',
          class: 'field choice',
          attributes: 'value="2"',
          label: {
            text: `
              Episode 2
              <a
                class="
                  link
                  link--invert
                  sample
                "
                href="#"
              >
                Sample
              </a>
              <span class="price-wrapper">
                $9.00
              </span>
            `
          }
        }
      ],
      selectAll: {
        id: 'links-all',
        attributes: 'data-notchecked="Select all" data-checked="Unselect all"',
        label: {
          text: 'Select all'
        }
      }
    },
    shippingLatencyModal: {
      modal: {
        id: 'shipping-latency-product',
        attributes: 'aria-labbeledny="shipping-latency-title-product"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          class: 'button__icon modal__close-button-icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="shipping-latency-title-product"',
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
    colorSwatch: {
      class: 'margin-bottom-m'
    },
    sizeOption: {
      class: 'product-view__select-option required',
      label: {
        text: 'Size'
      },
      field: {
        id: 'size',
        name: 'size',
        class: 'select--native',
        attributes: 'required'
      },
      options: [
        {
          value: '',
          text: 'Choose your size'
        },
        {
          value: 'xs',
          text: 'XS'
        },
        {
          value: 's',
          text: 'S'
        },
        {
          value: 'm',
          text: 'M'
        },
        {
          value: 'l',
          text: 'L'
        },
        {
          value: 'xl',
          text: 'XL'
        }
      ]
    },
    qtyLabel: 'Quantity',
    addToCartBtn: {
      tag: 'button',
      text: 'Add to cart',
      class: 'button--add-to-cart product-view__add-to-cart',
      attributes: 'id="submit-add-to-cart-main" type="submit" aria-label="Add to cart"'
    },
    heartBtn: {
      tag: 'button',
      text: '',
      class: 'product-view__button',
      icon: {
        id: 'heart',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Add product to wishlist"'
    },
    compareBtn: {
      tag: 'button',
      text: '',
      class: 'product-view__button',
      icon: {
        id: 'compare',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Compare product"'
    },
    briefInfoModal1: {
      modal: {
        id: 'modal-info-1',
        attributes: 'aria-labbeledny="modal-info-1-title"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          class: 'button__icon modal__close-button-icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="modal-info-1-title"',
        text: 'Free shipping - Brief Info Modal 1'
      },
      modalMiddle: true,
      modalDescription: {
        attributes: '',
        class: 'margin-bottom-xs',
        tag: 'p',
        text: 'This is info modal on product page. We can use here some fixed text (the same on every product page) or if we want to put here some product specific text we should use attribute value for this modal content.'
      }
    },
    briefInfoModal2: {
      modal: {
        id: 'modal-info-2',
        attributes: 'aria-labbeledny="modal-info-2-title"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          class: 'button__icon modal__close-button-icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading heading--third-level',
        attributes: 'id="modal-info-2-title"',
        text: 'Return Policy - Brief Info Modal 2'
      },
      modalMiddle: true,
      modalDescription: {
        attributes: '',
        class: 'margin-bottom-xs',
        tag: 'p',
        text: 'This is info modal on product page. We can use here some fixed text (the same on every product page) or if we want to put here some product specific text we should use attribute value for this modal content.'
      }
    },
    tab: {
      script: true,
      attributes: 'id="product-tabs"',
      class: 'product-view__tab',
      icon: {
        class: 'tab__icon',
        id: 'angle-down',
        hidden: true
      },
      tabs: [
        {
          tabId: 'tab-1',
          title: 'Description',
          titleId: 'tab-title-1',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          active: true,
          tabId: 'tab-2',
          title: 'Specifications',
          titleId: 'tab-title-2',
          class: {
            content: 'product-view__table'
          },
          contentElement: 'table--scope-row'
        },
        {
          tabId: 'tab-3',
          title: 'What\'s in the box',
          titleId: 'tab-title-3',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          tabId: 'tab-4',
          titleId: 'tab-title-4',
          title: 'Reviews (34)',
          contentElement: 'product-review'
        }
      ]
    },
    review: {
      reviewsQty: '32 Reviews',
      rating: {
        class: 'rating--secondary'
      }
    },
    recentlyViewed: {
      heading: false,
      contentClass: 'section__content--products',
      components: [
        {
          content: {
            content: 'slider--products',
            contentContext: {
              script: true,
              heading: {
                content: 'heading',
                contentContext: {
                  tag: 'h2',
                  class: 'heading--first-level margin-0',
                  text: 'Recently viewed'
                }
              }
            }
          }
        }
      ]
    },
    additionalBlockClass : 'margin-vc-l'
  },
  variants: [
    {
      name: 'bundle',
      context: {
        price: {
          regularPrice: '92.00'
        },
        priceUnit: '/ bundle',
        summaryTitle: 'Summary:',
        summaries: [
          {
            title: 'Sprite Stasis Ball:',
            item: '1 x Sprite Stasis Ball 55 cm'
          },
          {
            title: 'Sprite Yoga Strap:',
            item: '1 x Sprite Yoga Strap 6 foot'
          },
          {
            title: 'Sprite Foam Roller:',
            item: '1 x Sprite Foam Roller'
          }
        ]
      }
    },
    {
      name: 'grouped',
      context: {
        productsTable: {
          class: 'product-view__grouped-table',
          captionText: 'Grouped product items',
          mainTags: [
            {
              mainTag: 'thead',
              rowTags: [
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'th',
                      content: 'Product Name',
                      childTagAttributes: 'scope="col" role="columnheader"'
                    },
                    {
                      childTag: 'th',
                      content: 'Qty',
                      childTagAttributes: 'scope="col" role="columnheader"'
                    }
                  ]
                }
              ]
            },
            {
              mainTag: 'tbody',
              rowTags: [
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      childTagClasses: 'product-view__grouped-product-name-cell',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 6 foot</span><span>$14.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagClasses: 'product-view__grouped-product-qty-td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-1',
                          name: 'field-name-1',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                },
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagClasses: 'product-view__grouped-product-name-cell',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 8 foot</span><span>$17.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      childTagClasses: 'product-view__grouped-product-qty-td',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-2',
                          name: 'field-name-2',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                },
                {
                  rowTag: 'tr',
                  rowTagAttributes: 'role="row"',
                  childTags: [
                    {
                      childTag: 'td',
                      childTagClasses: 'product-view__grouped-product-name-cell',
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 10 foot</span><span>$21.00</span>'
                    },
                    {
                      childTag: 'td',
                      childTagAttributes: 'data-th="Qty:" role="gridcell"',
                      childTagClasses: 'product-view__grouped-product-qty-td',
                      contentComponent: 'input',
                      contentContext: {
                        class: 'product-view__grouped-qty',
                        label: {
                          text: 'Qty',
                          hidden: true
                        },
                        field: {
                          id: 'field-id-3',
                          name: 'field-name-3',
                          type: 'number',
                          attributes: 'min="0" value="0"'
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: 'ee',
      context: {
        addToCartFixed: {
          hiddenForEE: true,
          class: 'add-to-cart--ee',
          title: 'Bluzka ONLSANSA SINGLET WVN',
        },
        compareBtn: {
          text: 'Compare',
          tag: 'button',
          class: 'product-view__button',
          iconBefore: {
            id: 'compare',
            class: 'button__icon',
            hidden: true
          },
          attributes: 'type="button" aria-label="Compare product"'
        },
        emailBtn: {
          tag: 'a',
          text: 'Email',
          class: 'product-view__button',
          iconBefore: {
            id: 'envelope',
            class: 'button__icon',
            hidden: true
          },
          attributes: 'aria-label="Mail to friend"'
        },
        requisitionListDropdown: {
          class: 'dropdown-list--buttons',
          dropdowns: [
            {
              itemTag: 'button',
              itemAttributes: 'type="button" aria-expanded="false"',
              title: 'Requisition List',
              textClass: 'dropdown-list__text margin-hz-s',
              id: 'dropdown-buttons-content',
              class: 'button button--icon',
              iconBefore: {
                id: 'requisition-list',
                title: 'Requisition List',
                class: 'button__icon',
                attributes: 'aria-hidden="true"'
              },
              collapse: {
                id: 'angle-down',
                title: 'Arrow Down',
                class: 'dropdown-list__icon button__icon margin-0',
                attributes: 'aria-hidden="true"'
              },
              contentElement: 'list'
            }
          ]
        },
        wishListDropdown: {
          class: 'product-view__multiwishlist dropdown-list--buttons',
          dropdowns: [
            {
              itemTag: 'button',
              itemAttributes: 'type="button" aria-expanded="false"',
              title: 'Wish List',
              textClass: 'dropdown-list__text margin-hz-s',
              id: 'dropdown-buttons-content2',
              class: 'button button--icon',
              iconBefore: {
                id: 'heart',
                title: 'Heart',
                class: 'button__icon',
                attributes: 'aria-hidden="true"'
              },
              collapse: {
                id: 'angle-down',
                title: 'Arrow Down',
                class: 'dropdown-list__icon button__icon margin-0',
                attributes: 'aria-hidden="true"'
              },
              contentElement: 'list'
            }
          ]
        },
        updateWishList: {
          tag: 'button',
          text: 'Update Wish List',
          class: 'button button--icon product-view__update-wishlist product-view__addtowishlist product-view__addtowishlist--update',
          iconBefore: {
            id: 'heart',
            title: 'Heart',
            class: 'button__icon',
            attributes: 'aria-hidden="true"'
          },
        }
      }
    }
  ]
};
