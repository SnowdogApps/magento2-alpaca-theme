module.exports = {
  label: 'Items',
  name: 'dashboard-items',
  context: {
    title: 'Addresses',
    informations: [
      {
        title: 'Contact information',
        class: 'col-sm-3',
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
        class: 'col-sm-3',
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
