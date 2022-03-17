module.exports = {
  meta: {
    checkout: true
  },
  context: {
    shippingClass: 'margin-bottom-m',
    addresses: {
      title: false,
      informations: [
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle',
            text: 'Billing Address'
          },
          class: 'col-sm-6',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            class: 'margin-bottom-xl',
            sides: [
              {
                class: '',
                action: [
                  {
                    link: {
                      text: 'Change',
                      class: 'actions-group__link'
                    }
                  },
                  {
                    link: {
                      text: '',
                      class: 'actions-group__link'
                    }
                  }
                ]
              }
            ]
          }
        },
        {
          title: {
            tag: 'h3',
            class: 'dashboard-items__subtitle',
            text: 'Payment Method'
          },
          class: 'col-sm-6',
          contentComponent: 'radio',
          contentContext: {
            name: 'radio1',
            legendClass: 'fieldset__legend--hidden',
            legend: 'Check / Montey order',
            legendId: 'legend-id',
            options: [
              {
                id: 'id1',
                label: 'Check / Montey order'
              },
            ]
          },
          actions: false,
        }
      ]
    },
    actions: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Go to review your order',
                class: 'actions-group__button'
              }
            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Back to Shipping Information',
                title: 'Back to Shipping Information',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  }
}
