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
          name: 'Downloadable product',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Dashboard'
    },
    products: {
      title: {
        tag: 'h2',
        class: 'dashboard-table__title',
        text: 'My Downloadable Products'
      },
      class: 'margin-bottom-l',
      table: {
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'Order #'
                  },
                  {
                    childTag: 'th',
                    content: 'Date'
                  },
                  {
                    childTag: 'th',
                    content: 'Title'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
                  },
                  {
                    childTag: 'th',
                    content: 'Remaining Downloads'
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
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Order #:"',
                    content: '000000003'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Date:"',
                    content: '4/11/17'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Title:"',
                    content: 'Lorem Ipsum 2'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
                    content: 'Done'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Remaining Donwloads:"',
                    content: 'Unlimited'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Order #:"',
                    content: '000000001'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Date:"',
                    content: '1/1/17'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Title:"',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
                    content: 'Done'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Remaining Downloads:"',
                    content: 'Unlimited'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    button: {
      sides: [
        {
          action: [
            {
              link: {
                text: 'Back',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  }
}
