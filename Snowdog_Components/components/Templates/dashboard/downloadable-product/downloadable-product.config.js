module.exports = {
  context: {
    products: {
      title: 'My Downloadable Products',
      class: 'dashboard__item',
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
              title: 'Back'
            }
          ]
        }
      ]
    }
  }
}
