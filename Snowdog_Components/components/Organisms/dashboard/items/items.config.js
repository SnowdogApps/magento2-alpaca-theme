module.exports = {
  label: 'Items',
  name: 'dashboard-items',
  context: {
    title: 'Addresses',
    contentClass: 'margin-0',
    informations: [
      {
        title: 'Contact information',
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
        title: 'Address second',
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
