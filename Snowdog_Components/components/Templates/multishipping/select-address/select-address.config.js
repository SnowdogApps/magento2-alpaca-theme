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
        captionText: 'This sis a table. Binded text in caption should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
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
                    contentComponent: 'quantity-update--full'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Send To:" role="gridcell"',
                    contentComponent: 'select'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Action:" role="gridcell"',
                    content: '<a href="#">Remove item</a>'
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
                    contentComponent: 'quantity-update--full'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Send To:" role="gridcell"',
                    contentComponent: 'select'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Action:" role="gridcell"',
                    content: '<a href="#">Remove item</a>'
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
