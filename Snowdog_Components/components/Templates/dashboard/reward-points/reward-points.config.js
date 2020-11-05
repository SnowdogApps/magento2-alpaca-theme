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
          name: 'Reward points',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'Reward points'
    },
    rewardInfo: {
      titleText: 'Reward points balance Information',
      contentText: 'Your balance is 0 Reward points.',
      link: {
        button: {
          class: 'block-info__actions',
          sides: [
            {
              action: [
                {
                  link: {
                    title: 'Learn more',
                    text: 'Learn more'
                  }
                }
              ]
            }
          ]
        }
      }
    },
    exchangeInfo: {
      titleText: 'Current exchange rates:',
      contentText: 'None'
    },
    table: {
      captionText: 'Balance History',
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
                  content: 'Balance',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Amount',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Points',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Reason',
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
                  childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                  content: '123'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                  content: '$0.00'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                  content: '+123'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                  content: 'Signed up for newsletter with email'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                  content: '4/7/20, 11:54 PM'
                }
              ]
            }
          ]
        }
      ]
    },
    form: {
      title: {
        tag: 'h2',
        class: 'dashboard-form__title margin-bottom-sm',
        text: 'Email Notification Settings'
      },
      checkboxes: [
        {
          checkbox: {
            id: 'subscribe_updates',
            name: 'subscribe_updates',
            label: {
              class: 'label',
              text: 'Subscribe for Balance Updates'
            }
          }
        },
        {
          checkbox: {
            class: 'margin-bottom-s',
            id: 'subscribe_warnings',
            name: 'subscribe_warnings',
            label: {
              class: 'label',
              text: 'Subscribe for Points Expiration Notifications'
            }
          }
        }
      ],
      formButton: {
        class: 'margin-bottom-sm',
        sides: [
          {
            action: [
              {
                button: true,
                title: 'Save Subscription Settings'
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
