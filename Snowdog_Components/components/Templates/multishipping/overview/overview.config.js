module.exports = {
  preview: '@checkout',
  context: {
    billingAddresses: {
      title: {
        tag: 'h2',
        class: 'dashboard-items__title margin-bottom-sm',
        text: 'Billing Information',
      },
      informations: [
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle',
            text: 'Billing Address',
          },
          class: 'col-sm-6',
          information: 'Arizona, 11-123, United States, T: 232112123',
          actions: {
            class: 'margin-bottom-l',
            sides: [
              {
                class: '',
                action: [
                  {
                    link: {
                      text: 'Change',
                      class: 'actions-group__link',
                    },
                  },
                  {
                    link: {
                      text: '',
                      class: 'actions-group__link',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle',
            text: 'Payment Method',
          },
          class: 'col-sm-6',
          information: 'Check / Money order',
          actions: {
            class: 'margin-bottom-l',
            sides: [
              {
                class: '',
                action: [
                  {
                    link: {
                      text: 'Change',
                      class: 'actions-group__link',
                    },
                  },
                  {
                    link: {
                      text: '',
                      class: 'actions-group__link',
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    shippingAddresses: {
      title: {
        tag: 'h2',
        class: 'dashboard-items__title margin-bottom-sm',
        text: 'Shipping Information',
      },
      informations: [
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle',
            text: 'Shipping To',
          },
          class: 'col-sm-6',
          information: 'Arizona, 11-123, United States, T: 232112123',
          actions: {
            class: 'margin-bottom-l',
            sides: [
              {
                class: '',
                action: [
                  {
                    link: {
                      text: 'Change',
                      class: 'actions-group__link',
                    },
                  },
                  {
                    link: {
                      text: '',
                      class: 'actions-group__link',
                    },
                  },
                ],
              },
            ],
          },
        },
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle',
            text: 'Shipping Method',
          },
          class: 'col-sm-6',
          information: 'Flat Rate (Fixed) $20.00',
          actions: {
            class: 'margin-bottom-l',
            sides: [
              {
                class: '',
                action: [
                  {
                    link: {
                      text: 'Change',
                      class: 'actions-group__link',
                    },
                  },
                  {
                    link: {
                      text: '',
                      class: 'actions-group__link',
                    },
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    table: {
      class: 'margin-bottom-l table--tfoot-scope-row',
      captionText:
        'This is a table. Binded text in caption should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
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
                  content: 'Item',
                  childTagAttributes: 'scope="col" role="columnheader"',
                },
                {
                  childTag: 'th',
                  content: 'Price',
                  childTagAttributes: 'scope="col" role="columnheader"',
                },
                {
                  childTag: 'th',
                  content: 'Quantity',
                  childTagAttributes: 'scope="col" role="columnheader"',
                },
                {
                  childTag: 'th',
                  content: 'Subtotal',
                  childTagAttributes: 'scope="col" role="columnheader"',
                },
              ],
            },
          ],
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
                  childTagAttributes: 'data-th="Item:" role="gridcell"',
                  content: 'Simple product with long name 1',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Price:" role="gridcell"',
                  content: '$7.59',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quantity:" role="gridcell"',
                  content: '2',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Subtotal:" role="gridcell"',
                  content: '$1,99.98',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Item:" role="gridcell"',
                  content: 'Simple product with long name 1',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Price:" role="gridcell"',
                  content: '$7.59',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quantity:" role="gridcell"',
                  content: '2',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Subtotal:" role="gridcell"',
                  content: '$1,99.98',
                },
              ],
            },
          ],
        },
        {
          mainTag: 'tfoot',
          rowTags: [
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  content: 'Subtotal',
                  childTagAttributes: 'colspan=\'3\' role="gridcell"',
                },
                {
                  childTag: 'td',
                  content: '$20.00',
                  childTagAttributes: 'colspan=\'1\' role="gridcell"',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  content: 'Shipping & Handling',
                  childTagAttributes: 'colspan=\'3\' role="gridcell"',
                },
                {
                  childTag: 'td',
                  content: '$20.00',
                  childTagAttributes: 'colspan=\'1\' role="gridcell"',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  content: 'Tax',
                  childTagAttributes: 'colspan=\'3\' role="gridcell"',
                },
                {
                  childTag: 'td',
                  content: '$20.00',
                  childTagAttributes: 'colspan=\'1\' role="gridcell"',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  content: 'Total for this address',
                  childTagAttributes: 'colspan=\'3\' role="gridcell"',
                },
                {
                  childTag: 'td',
                  content: '$20.00',
                  childTagAttributes: 'colspan=\'1\' role="gridcell"',
                },
              ],
            },
          ],
        },
      ],
    },
    checkbox: {
      id: 'checkbox',
      name: 'checkbox-name',
      attributes: '',
      label: {
        text: 'I have read and accept the privacy policy',
        class: '',
      },
    },
    grandTotalLabel: 'Grand Total:',
    price: {
      class: 'margin-bottom-m',
      regularPrice: '2,035.95',
      specialPrice: '',
      prefix: {
        tag: '',
        text: 'Grand Total: $',
      },
    },
    actions: {
      class: 'margin-vc-m',
      sides: [
        {
          action: [
            {
              button: {
                text: 'Place Order',
                class: 'actions-group__button',
              },
            },
          ],
        },
        {
          action: [
            {
              link: {
                text: 'Back to Billing Information',
                title: 'Back to Billing Information',
                class: 'actions-group__link',
              },
            },
          ],
        },
      ],
    },
  },
};
