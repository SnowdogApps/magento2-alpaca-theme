module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    actionsGroupClass: 'invitations__actions',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Gift Registry',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'Gift Registry'
    },
    actions: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Add new',
                class: 'actions-group__button'
              }
            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Back',
                title: 'Back to My Account',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    },
    invitations: {
      class: 'margin-bottom-xs',
      table: {
        captionText: 'Gift Registry',
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
                    content: 'Event'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Created On'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Message'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: ''
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
                    childTagAttributes: 'data-th="Event:" role="gridcell"',
                    content: 'My bday'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Created On:" role="gridcell"',
                    content: 'Apr 20, 2020'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Message:" role="gridcell"',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:" role="gridcell"',
                    content: '' +
                      '<a class="padding-right-xs" href="#">Manage Items</a> ' +
                      '<a class="padding-right-xs" href="#">Share</a> ' +
                      '<a class="padding-right-xs" href="#">Edit</a> ' +
                      '<a class="padding-right-xs" href="#">Delete</a>' +
                    ''
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
}
