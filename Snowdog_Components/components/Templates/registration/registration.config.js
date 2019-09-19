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
          name: 'About Us',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      class: 'heading login__heading text-center',
      text: 'Login / Create account'
    },
    linkIcon: {
      class: 'login__icon',
      id: 'angle-down',
      iconTitle: 'Angle Down',
      attributes: 'aria-hidden="true"'
    },
    loginLinks: {
      class: '',
      loginClass: '',
      registerClass: 'login__link--active'
    }
  }
};
