module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'My quotes',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My quotes'
    },
    switchButton: {
      text: 'Show my quotes'
    },
    toolbar: {
      class: 'toolbar--secondary',
      showMode: false,
      showSorter: false,
      showAmount: true,
      showLimit: true,
      showPager: true
    },
    quotesTable: {
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
                  content: 'Quote Name',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Created',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Created By',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Status',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Last Updated',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Quote Total',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Action',
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
                  childTagAttributes: 'data-th="Quote Name:" role="gridcell"',
                  content: 'Example quote Name'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created By:" role="gridcell"',
                  content: 'John Snow'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Submitted'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Last Updated:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Total:" role="gridcell"',
                  content: '$10,059.50'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View</a>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Name:" role="gridcell"',
                  content: 'Example quote Name'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created By:" role="gridcell"',
                  content: 'John Snow'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Submitted'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Last Updated:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Total:" role="gridcell"',
                  content: '$10,059.50'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View</a>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Name:" role="gridcell"',
                  content: 'Example quote Name'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created By:" role="gridcell"',
                  content: 'John Snow'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Submitted'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Last Updated:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Total:" role="gridcell"',
                  content: '$10,059.50'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View</a>'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  variants: [
    {
      name: 'details',
      context: {
        heading: {
          tag: 'h1',
          class: 'heading dashboard__content-heading',
          text: 'Quote'
        },
        messages: true,
        quoteStatus: 'Submitted',
        quoteName: {
          tag: 'h2',
          class: 'heading heading--third-level margin-right-l margin-bottom-0',
          text: 'Some quote name'
        },
        quoteInfo: {
          elements: [
            {
              label: 'Created',
              value: 'January 9, 2020 (Lorem Ipsum)'
            },
            {
              label: 'Expires',
              value: 'February 19, 2020'
            },
            {
              label: 'Sales Rep.',
              value: 'Territory Manager'
            }
          ]
        },
        quoteActions: {
          class: 'dashboard-actions-toolbar--last-to-right margin-bottom-xl',
          buttons: [
            {
              tag: 'button',
              class: 'button--secondary dashboard-actions-toolbar__item',
              attributes: 'type="button"',
              text: 'Close quote'
            },
            {
              tag: 'button',
              class: 'button--secondary dashboard-actions-toolbar__item',
              attributes: 'type="button"',
              text: 'Delete'
            },
            {
              tag: 'button',
              class: 'button--secondary dashboard-actions-toolbar__item',
              attributes: 'type="button"',
              text: 'Print'
            }
          ]
        },
        quoteTabs: {
          script: true,
          icon: {
            class: 'tab__icon',
            id: 'angle-down',
            iconTitle: 'Angle Down'
          },
          tabs: [
            {
              tabId: 'tab-1',
              title: 'Quote items',
              titleId: 'tab-title-1',
              contentElement: 'quote-items',
              active: true,
              class: {
                content: 'tab__content--secondary',
                title: ''
              }
            },
            {
              tabId: 'tab-2',
              title: 'Comments',
              titleId: 'tab-title-2',
              content: '<p>Pellentesque velit nisl, posuere ac erat nec, iaculis auctor magna. Donec ut elementum mauris. Sed in scelerisque lorem. Cras pretium laoreet vestibulum. In dui mauris, sagittis vitae rhoncus quis, ornare in enim. Vivamus pellentesque ligula sed quam sollicitudin lobortis. Etiam interdum euismod nisi a interdum. Nunc turpis urna, pharetra nec nunc sit amet, consequat porta orci. Suspendisse sit amet dignissim lacus. Quisque vel est pretium, aliquam lacus id, lobortis neque. Nullam non neque mi. Vivamus quis pulvinar mi, in elementum nulla. Etiam neque diam, suscipit vitae luctus et, sollicitudin in turpis. Proin vitae cursus augue, sit amet vestibulum mi. Mauris feugiat justo eget purus fringilla aliquam vitae a massa.</p>',
              class: {
                content: 'tab__content--secondary',
                title: ''
              }
            },
            {
              tabId: 'tab-3',
              title: 'History log',
              titleId: 'tab-title-3',
              content: '<p>Pellentesque velit nisl, posuere ac erat nec, iaculis auctor magna. Donec ut elementum mauris. Sed in scelerisque lorem. Cras pretium laoreet vestibulum. In dui mauris, sagittis vitae rhoncus quis, ornare in enim. Vivamus pellentesque ligula sed quam sollicitudin lobortis. Etiam interdum euismod nisi a interdum. Nunc turpis urna, pharetra nec nunc sit amet, consequat porta orci. Suspendisse sit amet dignissim lacus. Quisque vel est pretium, aliquam lacus id, lobortis neque. Nullam non neque mi. Vivamus quis pulvinar mi, in elementum nulla. Etiam neque diam, suscipit vitae luctus et, sollicitudin in turpis. Proin vitae cursus augue, sit amet vestibulum mi. Mauris feugiat justo eget purus fringilla aliquam vitae a massa.</p>',
              class: {
                content: 'tab__content--secondary',
                title: ''
              }
            }
          ]
        },
        shipping: {
          title: 'Shipping Information',
          informations: [
            {
              title: 'Shipping Address',
              class: 'col-sm-6',
              information: 'You have no shipping address for this quote.',
              actions: {
                sides: [
                  {
                    action: [
                      {
                        title: 'Select Existing Address'
                      },
                      {
                        title: 'Add New Address'
                      }
                    ]
                  }
                ]
              }
            },
            {
              title: 'Shipping Method',
              class: 'col-sm-6',
              information: 'No shipping information available',
              actions: {
                sides: [
                  {
                    action: [
                      {
                        title: 'Edit'
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      }
    }
  ]
}
