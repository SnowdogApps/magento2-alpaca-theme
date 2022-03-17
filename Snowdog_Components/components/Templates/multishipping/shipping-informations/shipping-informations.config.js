module.exports = {
  meta: {
    checkout: true
  },
  context: {
    shippingClass: 'margin-bottom-m',
    addresses: {
      title: {
        tag: 'h2',
        class: 'dashboard-table__title',
        text: 'Address 1 of 1'
      },
      link: {
        text: 'Manage Addresses',
        class: 'dashboard-table__link'
      },
      informations: [
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle margin-bottom-l',
            text: 'Shipping to'
          },
          class: 'col-sm-6',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            sides: [
              {
                action: [
                  {
                    link: {
                      text: 'Change',
                      class: 'actions-group__link'
                    }
                  },
                ]
              }
            ]
          }
        },
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle margin-bottom-l',
            text: 'Shipping Method'
          },
          class: 'col-sm-6',
          contentComponent: 'radio',
          contentContext: {
            name: 'radio1',
            legendClass: '',
            fieldsetClass: 'Flat Rate',
            legend: 'Choose option',
            legendId: 'legend-id',
            options: [
              {
                id: 'id1',
                label: 'Option one'
              },
            ]
          },
        }
      ]
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
                    content: 'Product Name'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Qty'
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
                    childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                    content: '<a href="#">Simple product with long name 1</a>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Qty:" role="gridcell"',
                    content: '2'
                  },
                ]
              },
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Product Name:" role="gridcell"',
                    content: '<a href="#">Simple product with long name 1</a>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Qty:" role="gridcell"',
                    content: '3'
                  },
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
                text: 'Continue To Billing Information',
                class: 'actions-group__button'
              }
            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Back to Select Addresses',
                title: 'Back to Select Addresses',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  }
}
