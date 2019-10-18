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
          name: 'Dashboard',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    title: 'My dashboard',
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Dashboard'
    },
    account: {
      title: 'Account Information',
      informations: [
        {
          title: 'Contact information',
          class: 'col-sm-6',
          information: 'qweqwe qwe qwe@qwe.com',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit'
                  },
                  {
                    title: 'Change password'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Newsletters',
          class: 'col-sm-6',
          information: 'You don\'t subscribe to our newsletter.',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    addreses: {
      title: 'Address Book',
      informations: [
        {
          title: 'Default Billing Address',
          class: 'col-sm-6',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Default Shipping address',
          class: 'col-sm-6',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  }
}
