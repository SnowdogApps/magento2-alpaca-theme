module.exports = {
  context: {
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Account info',
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
    buttons: {
      class: 'dashboard__actions',
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Save'
            }
          ]
        },
        {
          action: [
            {
              title: 'Go Back'
            }
          ]
        }
      ],
    }
  }
}
