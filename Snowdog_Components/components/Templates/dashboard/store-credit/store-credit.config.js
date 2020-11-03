module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    actionsGroupClass: 'reward-points__actions',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Store credit',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'Store credit'
    },
    balanceInfo: {
      class: 'col-xs-12 col-md-6',
      title: {
        tag: 'h2',
        class: 'dashboard-items__title margin-bottom-m',
        text: 'Store credit'
      },
      informations: [
        {
          class: 'margin-bottom-m',
          information: '<strong>Your balance is:</strong> $200,000.00',
        }
      ]
    },
    redeemGiftCard: {
      class: 'col-xs-12 col-md-6',
      title: {
        tag: 'h2',
        class: 'dashboard-items__title margin-bottom-0',
        text: 'Redeem Gift Card'
      },
      informations: [
        {
          class: 'margin-bottom-m',
          information: `
            Have a gift card?
            <a
              href="#"
              class="actions-group__link"
            >
              Click here
            </a>
            to redeem it.
          `,
        }
      ]
    },
    table: {
      class: 'col-xs-12',
      title: {
        tag: 'h2',
        class: 'dashboard-table__title',
        text: 'Balance history'
      },
      table: {
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
                    content: 'Action',
                    childTagAttributes: 'scope="col" role="columnheader"'
                  },
                  {
                    childTag: 'th',
                    content: 'Balance Change',
                    childTagAttributes: 'scope="col" role="columnheader"'
                  },
                  {
                    childTag: 'th',
                    content: 'Balance',
                    childTagAttributes: 'scope="col" role="columnheader"'
                  },
                  {
                    childTag: 'th',
                    content: 'Date',
                    childTagAttributes: 'scope="col" role="columnheader"'
                  }
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
                    childTagAttributes: 'data-th="Action:" role="gridcell"',
                    content: 'Created'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Balance Change:" role="gridcell"',
                    content: '$200,000.00'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Balance:" role="gridcell"',
                    content: '$200,000.00'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Date:" role="gridcell"',
                    content: '10/30/20, 4:21 AM'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    backButton: {
      sides: [
        {
          action: [
            {
              link: {
                class: 'actions-group__link',
                title: 'Back',
                text: 'Back'
              }
            }
          ]
        }
      ]
    }
  }
}
