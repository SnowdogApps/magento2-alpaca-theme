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
        addressClass: 'margin-bottom-m',
        information: 'qweqwe qwe qwe@qwe.com',
        actions: {
          sides: [
            {
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
        information: 'Second address qwe@qwe.com',
        actions: {
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
