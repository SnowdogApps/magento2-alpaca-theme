module.exports = {
  context: {
    title: 'Bluzka ONLSANSA SINGLET WVN',
    sku: 'SKU: CEL-31145',
    submitBtn: {
      tag: 'button',
      class: 'product-view__submit-btn',
      attributes: 'type="button" aria-label="button"',
      text: 'Add to cart'
    },
    heartBtn: {
      tag: 'button',
      text: '',
      class: 'button--icon-light',
      icon: {
        id: 'heart',
        title: 'Arrow left',
        class: 'button__icon',
      },
      attributes: 'type="button" aria-label="click to do something"'
    },
    compareBtn: {
      tag: 'button',
      text: '',
      class: 'button--icon-light',
      icon: {
        id: 'compare',
        title: 'Add to compare list',
        class: 'button__icon',
      },
      attributes: 'type="button" aria-label="click to do something"'
    },
    tab: {
      script: true,
      tabSticky: true,
      class: 'product-view__tab',
      icon: {
        class: 'tab__icon',
        iconId: 'angle-down',
        iconTitle: 'Arrow down'
      },
      tabs: [
        {
          tabId: 'tab-1',
          title: 'Description',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          active: true,
          tabId: 'tab-2',
          title: 'Specifications',
          class: {
            content: 'product-view__table',
          },
          contentElement: 'table--scope-row',
        },
        {
          tabId: 'tab-3',
          title: 'What\'s in the box',
          content: 'Etiam orci ex, tristique at tempor quis, bibendum vel diam. Nullam vel mollis leo. Etiam facilisis mattis tortor, a ullamcorper nulla congue sed. Morbi non odio neque. In ut leo a elit consectetur fermentum aliquet non eros. In elementum vitae nulla sed semper. Nulla lacinia fermentum quam eu scelerisque. Sed et bibendum augue. Etiam sagittis enim eu ex aliquet ornare. Donec congue facilisis neque.'
        },
        {
          tabId: 'tab-4',
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
    }
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
                      childTagClasses: 'product-view__grouped-col-qty',
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
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 6 foot</span><span>$14.00</span>'
                    },
                    {
                      childTag: 'td',
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
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 8 foot</span><span>$17.00</span>'
                    },
                    {
                      childTag: 'td',
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
                      childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                      content: '<span class="product-view__grouped-product-name">Sprite Yoga Strap 10 foot</span><span>$21.00</span>'
                    },
                    {
                      childTag: 'td',
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
                }
              ]
            }
          ]
        }
      }
    }
  ]
};
