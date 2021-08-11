module.exports = {
  context: {
    heading: {
      tag: 'h1',
      class: 'heading--page',
      text: 'Review order',
    },
    shippingMethodSelect: {
      class: 'select--native',
      label: {
        attributes: '',
        text: 'Shipping Method',
      },
    },
    shippingAddress: {
      title: {
        tag: 'h2',
        class: 'heading--third-level',
        text: 'Shipping Address',
      },
      details:
        'John Doe<br> ul. Mostowa 11<br> Poznań, Armed Forces Africa 60-688<br> United States<br> <a href="tel:887887887"> 887887887 </a>',
      actions: {
        class: 'actions-toolbar',
        sides: [
          {
            action: [
              {
                link: {
                  text: 'Edit',
                  class: 'actions-group__link padding-top-xs',
                },
              },
            ],
          },
        ],
      },
    },
    paymentMethod: {
      title: {
        tag: 'h2',
        class: 'heading--third-level',
        text: 'Payment method',
      },
      details: 'PayPal<br> qwe@qwe.com',
      actions: {
        class: 'actions-toolbar',
        sides: [
          {
            action: [
              {
                link: {
                  text: 'Edit Payment Information',
                  class: 'actions-group__link padding-top-xs',
                },
              },
            ],
          },
        ],
      },
    },
    shoppingCart: {
      title: {
        tag: 'h2',
        class: 'heading--third-level',
        text: 'Items in your shopping cart',
      },
      actions: {
        class: 'actions-toolbar',
        sides: [
          {
            action: [
              {
                link: {
                  text: 'Edit Shopping Cart',
                  class: 'actions-group__link padding-top-0',
                },
              },
            ],
          },
        ],
      },
    },
    table: {
      class: 'table--tfoot-scope-row',
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
                  content: 'Qty',
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
                  content:
                    '<div class="row middle-sm"><img class="paypal-review__product-image lazyload margin-right-m" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=" data-src="/images/product/product-160_240.jpg" alt="Image of product Bluzka \'ONLSANSA SINGLET WVN\'"><div class="paypal-review__product-details"><span class="paypal-review__product-name">Bluzka \'ONLSANSA SINGLET WVN\'</span></div></div>',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Price:" role="gridcell"',
                  content: '$159.95',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Qty:" role="gridcell"',
                  content: '1',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Subtotal:" role="gridcell"',
                  content: '$159.95',
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
                  content:
                    '<div class="row middle-sm"><img class="paypal-review__product-image lazyload margin-right-m" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=" data-src="/images/product/product-160_240.jpg" alt="Image of product Bluzka \'ONLSANSA SINGLET WVN\'"><span class="paypal-review__product-name">Bluzka \'ONLSANSA SINGLET WVN\'</span></div>',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Price:" role="gridcell"',
                  content: '$159.95',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Qty:" role="gridcell"',
                  content: '1',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Subtotal:" role="gridcell"',
                  content: '$159.95',
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
                  content:
                    '<div class="row middle-sm"><img class="paypal-review__product-image lazyload margin-right-m" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=" data-src="/images/product/product-160_240.jpg" alt="Image of product Bluzka \'ONLSANSA SINGLET WVN\'"><span class="paypal-review__product-name">Bluzka \'ONLSANSA SINGLET WVN\'</span></div>',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Price:" role="gridcell"',
                  content: '$159.95',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Qty:" role="gridcell"',
                  content: '1',
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Subtotal:" role="gridcell"',
                  content: '$159.95',
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
                  childTag: 'th',
                  content: 'Subtotal',
                  childTagAttributes:
                    'colspan=\'3\' role="rowheader" scope="row"',
                },
                {
                  childTag: 'td',
                  content: '$480',
                  childTagAttributes: 'data-th="Subtotal:" role="gridcell"',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  content:
                    'Shipping & Handling (Expedited Shipping - UPS Worldwide Expedited)',
                  childTagAttributes:
                    'colspan=\'3\' role="rowheader" scope="row"',
                },
                {
                  childTag: 'td',
                  content: '$0.00',
                  childTagAttributes:
                    'data-th="Shipping & Handling (Expedited Shipping - UPS Worldwide Expedited):" role="gridcell"',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Tax',
                  childTagAttributes:
                    'colspan=\'3\' role="rowheader" scope="row"',
                },
                {
                  childTag: 'td',
                  content: '$0.00',
                  childTagAttributes: 'data-th="Tax:" role="gridcell"',
                },
              ],
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  content: 'Grand Total',
                  childTagAttributes:
                    'colspan=\'3\' role="rowheader" scope="row"',
                },
                {
                  childTag: 'td',
                  content: '$480',
                  childTagAttributes: 'data-th="Grand Total:" role="gridcell"',
                },
              ],
            },
          ],
        },
      ],
    },
    submitBtn: {
      tag: 'button',
      text: 'Place order',
      class: 'button--fluid margin-top-m',
      attributes: 'type="submit"',
    },
  },
};
