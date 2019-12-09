module.exports = {
  context: {
    class: 'auth--login',
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
    authForm: {
      name: 'account-form'
    },
    mainHeading: {
      class: 'heading auth__heading text-center',
      text: 'Login / Create account'
    },
    linkIcon: {
      class: 'auth__icon',
      id: 'angle-down',
      iconTitle: 'Angle Down',
      attributes: 'aria-hidden="true"'
    },
    authLinks: {
      class: '',
      loginClass: 'auth__link--active',
      loginText: 'Login',
      loginTag: 'button',
      registerTag: 'a',
      registerAttributes: 'href="#"',
      registerClass: 'auth__link--registration',
      registerMobileClass: 'auth__link--registration-mobile',
      registerText: 'Create account'
    }
  },
  variants: [
    {
      name: 'registration',
      context: {
        class: 'auth--registration',
        authForm: {
          name: 'account-form--registration'
        },
        authLinks: {
          class: '',
          loginClass: '',
          loginTag: 'a',
          loginAttributes: 'href="#"',
          registerClass: 'auth__link--active',
          registerTag: 'button',
          registerAttributes: ''
        }
      }
    }
  ]
};
