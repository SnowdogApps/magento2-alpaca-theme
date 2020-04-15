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
      title: {
        tag: 'h2',
        class: 'dashboard-items__title margin-bottom-sm',
        text: 'Account Information'
      },
      informations: [
        {
          title: {
            tag: 'h3',
            class: 'ddashboard-items__subtitle margin-bottom-l',
            text: 'Contact information'
          },
          class: 'col-sm-6',
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
          title: {
            tag: 'h3',
            class: 'ddashboard-items__subtitle margin-bottom-l',
            text: 'Newsletters'
          },
          class: 'col-sm-6',
          information: 'You don\'t subscribe to our newsletter.',
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
    },
    addreses: {
      title: {
        tag: 'h2',
        class: 'dashboard-table__title',
        text: 'Address Book'
      },
      link: {
        text: 'Manage Addresses',
        class: 'dashboard-table__link'
      },
      informations: [
        {
          title: {
            tag: 'h3',
            class: 'ddashboard-items__subtitle margin-bottom-l',
            text: 'Default Billing Address'
          },
          class: 'col-sm-6',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            sides: [
              {
                action: [
                  {
                    link: {
                      text: 'Edit Address',
                      class: 'actions-group__link'
                    }
                  },
                ]
              }
            ]
          }
        },
        {
          title: {
            tag: 'h3',
            class: 'ddashboard-items__subtitle margin-bottom-l',
            text: 'Default Shipping Address'
          },
          class: 'col-sm-6',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    link: {
                      text: 'Edit Address',
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
}
