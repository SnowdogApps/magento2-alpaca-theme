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
          name: 'My Invitations',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Invitations'
    },
    actions: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Send Invitations',
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
        captionText: 'Table with invitations',
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
                    content: 'Email'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Status'
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
                    childTagAttributes: 'data-th="Email:" role="gridcell"',
                    content: 'example@email.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:" role="gridcell"',
                    content: 'Sent'
                  }
                ]
              },
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Email:" role="gridcell"',
                    content: 'example@email.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:" role="gridcell"',
                    content: 'Sent'
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
