module.exports = {
  label: 'Items',
  name: 'dashboard-items',
  context: {
    title: {
      tag: 'h2',
      class: 'dashboard-items__title margin-bottom-sm',
      text: 'Addresses'
    },
    contentClass: 'margin-0',
    informations: [
      {
        title: {
          tag: 'h3',
          class: 'ddashboard-items__subtitle margin-bottom-l',
          text: 'Contact information'
        },
        class: 'col-sm-3 margin-bottom-m',
        addressClass: 'margin-bottom-l',
        information: 'qweqwe qwe qwe@qwe.com',
        actions: {
          class: 'margin-bottom-xl',
          sides: [
            {
              class: 'margin-bottom-xl',
              action: [
                {
                  link: {
                    text: 'Edit',
                    class: 'actions-group__link'
                  }
                },
                {
                  link: {
                    text: 'Change password',
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
          class: 'ddashboard-items__subtitle margin-bottom-l',
          text: 'Address second'
        },
        class: 'col-sm-3 margin-bottom-m',
        addressClass: 'margin-bottom-l',
        information: 'Second address qwe@qwe.com',
        actions: {
          class: 'margin-bottom-xl',
          sides: [
            {
              action: [
                {
                  link: {
                    text: 'Edit',
                    class: 'actions-group__link'
                  }
                },
              ]
            }
          ]
        }
      }
    ]
  }
}
