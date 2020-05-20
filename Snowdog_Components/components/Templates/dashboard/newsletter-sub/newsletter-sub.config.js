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
          name: 'Newsletter',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Dashboard'
    },
    form: {
      title: {
        tag: 'h2',
        class: 'dashboard-form__title margin-bottom-sm',
        text: 'Subscription option'
      },
      checkboxes: [
        {
          checkbox: {
            class: 'margin-bottom-sm',
            id: 'subscription',
            label: {
              text: 'General Subscription'
            }
          }
        }
      ]
    },
    buttons: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Save',
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
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  }
}
