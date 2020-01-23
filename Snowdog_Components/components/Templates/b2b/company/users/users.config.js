module.exports = {
  name: 'Company Users',
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content company-users margin-top-sl',
    heading: {
      text: 'Company Users',
      tag: 'h1',
      class: 'heading heading--page'
    },
    filtersActions: {
      class: 'margin-bottom-m',
      buttons: [
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Show inactive users'
        },
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Show all users'
        }
      ]
    },
    users: {
      table: {
        class: 'dashboard-table__table',
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'ID'
                  },
                  {
                    childTag: 'th',
                    content: 'Name'
                  },
                  {
                    childTag: 'th',
                    content: 'Email'
                  },
                  {
                    childTag: 'th',
                    content: 'Role'
                  },
                  {
                    childTag: 'th',
                    content: 'Team'
                  },
                  {
                    childTag: 'th',
                    content: 'Status'
                  },
                  {
                    childTag: 'th',
                    content: 'Actions'
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
                    childTagAttributes: 'data-th="ID:"',
                    content: '11'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Name:"',
                    content: 'Testowy Tester'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Email:"',
                    content: 'testowy@tester.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Role:"',
                    content: 'Default User'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Team:"',
                    content: '-'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:"',
                    content: 'Active'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:"',
                    content: ''
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    toolbar: {
      showLimit: true,
      showMode: false,
      showSorter: false,
      showAmount: false,
      limiter: {
        class: 'toolbar__limiter toolbar__limiter--relative'
      }
    },
    actions: {
      class: 'margin-vc-m',
      buttons: [
        {
          tag: 'button',
          class: 'dashboard-actions-toolbar__item button--secondary',
          attributes: 'type="button"',
          text: 'Add new user'
        }
      ]
    }
  }
}
