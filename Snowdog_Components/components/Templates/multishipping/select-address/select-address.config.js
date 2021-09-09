module.exports = {
  preview: '@checkout',
  context: {
    heading: {
      tag: 'p',
      class: 'title',
      text: 'Please select a shipping address for applicable items.'
    },
    table: {
      table: {
        captionText: 'This is a table. Binded text in caption should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
        class: 'margin-0',
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
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Product'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Qty'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Send To'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Action',
                    contentVisuallyHidden: true
                  },
                ]
              },
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
                    childTagAttributes: 'data-th="Product:" role="gridcell"',
                    content: '<a href="#">Simple product with long name 1</a>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Qty:" role="gridcell"',
                    contentComponent: 'quantity-update--full',
                    contentContext: {
                      class: 'quantity-update--no-buttons-m',
                      qtyClass: 'input',
                      qtyLabel: 'Qty',
                      input: {
                        id: 'qty',
                        min: '1',
                        name: 'qty',
                        defaultValue: '1',
                        ariaLabel: 'Change the quantity'
                      },
                      minusQtyButton: {
                        tag: 'button',
                        class: 'quantity-update__button quantity-update__button--minus',
                        attributes: 'type="button" aria-label="Decrease the quantity"',
                        icon: {
                          id: 'minus',
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
                          class: 'button__icon quantity-update__icon',
                          hidden: true
                        }
                      },
                    }
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Send To:" role="gridcell"',
                    contentComponent: 'select',
                    contentContext: {
                      field: {
                        id: 'select-1'
                      },
                      label: {
                        text: 'Send To'
                      },
                      options: [
                        {
                          text: 'Option 1',
                          value: 'Option 1',
                        },
                        {
                          text: 'Option 2',
                          value: 'Option 2',
                        },
                        {
                          text: 'Option 3',
                          value: 'Option 3',
                        }
                      ]
                    }
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Action:" role="gridcell"',
                    content: '<div class="actions-group"><div class="actions-group__handler"><a href="#" class="actions-group__button actions-group__link">Remove item</a></div></div>'
                  }
                ]
              },
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Product:" role="gridcell"',
                    content: '<a href="#">Simple product with long name 1</a>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Qty:" role="gridcell"',
                    contentComponent: 'quantity-update--full',
                    contentContext: {
                      class: 'quantity-update--no-buttons-m',
                      qtyClass: 'input',
                      qtyLabel: 'Qty',
                      input: {
                        id: 'qty',
                        min: '1',
                        name: 'qty',
                        defaultValue: '1',
                        ariaLabel: 'Change the quantity'
                      },
                      minusQtyButton: {
                        tag: 'button',
                        class: 'quantity-update__button quantity-update__button--minus',
                        attributes: 'type="button" aria-label="Decrease the quantity"',
                        icon: {
                          id: 'minus',
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
                          class: 'button__icon quantity-update__icon',
                          hidden: true
                        }
                      },
                    }
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Send To:" role="gridcell"',
                    contentComponent: 'select',
                    contentContext: {
                      field: {
                        id: 'select-2',
                      },
                      script: true,
                      label: {
                        text: 'Send To'
                      },
                      options: [
                        {
                          text: 'Option 1',
                          value: 'Option 1',
                        },
                        {
                          text: 'Option 2',
                          value: 'Option 2',
                        },
                        {
                          text: 'Option 3',
                          value: 'Option 3',
                        }
                      ]
                    }
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Action:" role="gridcell"',
                    content: '<div class="actions-group"><div class="actions-group__handler"><a href="#" class="actions-group__button actions-group__link">Remove item</a></div></div>'
                  }
                ]
              },
            ]
          }
        ]
      }
    },
    actions: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Go To Shipping Information',
                class: 'actions-group__button'
              }
            },
            {
              button: {
                text: 'Update Qty & Addresses',
                class: 'button--secondary actions-group__button'
              }
            },
            {
              button: {
                text: 'Enter A New Address',
                class: 'button--secondary actions-group__button'
              }
            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Back to Shopping Cart',
                title: 'Back to Shopping Cart',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  }
}
