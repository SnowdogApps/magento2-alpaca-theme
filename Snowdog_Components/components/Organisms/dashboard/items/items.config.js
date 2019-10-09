module.exports = {
  label: 'Items',
  name: 'dashboard-items',
  context: {
    title: 'Addresses',
    titleClass: 'margin-bottom-m',
    contentClass: 'margin-0',
    informations: [
      {
        title: 'Contact information',
        class: 'col-sm-3 margin-bottom-m',
        addressClass: 'margin-bottom-m',
        information: 'qweqwe qwe qwe@qwe.com',
        actions: {
          links: [
            {
              title: 'Edit'
            },
            {
              title: 'Change password'
            }
          ]
        }
      },
      {
        title: 'Address second',
        class: 'col-sm-3 margin-bottom-m',
        information: 'Second address qwe@qwe.com',
        actions: {
          links: [
            {
              title: 'Edit'
            }
          ]
        }
      }
    ]
  }
}
