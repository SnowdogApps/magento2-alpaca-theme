module.exports = {
  label: 'Nav',
  name: 'dashboard-nav',
  context: {
    actualPage: 'Account Dashboard',
    list: {
      class: '',
      listTag: 'ul',
      elementTag: 'li',
      elements: [
        {
          text: 'Account Dashboard',
          class: 'dashboard-nav__item current',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'Account Information',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'Address Book',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'Downloadable Products',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'My Orders',
          class: 'dashboard-nav__item ',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'My Credit Cards',
          class: 'dashboard-nav__item ',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'Newsletter Subscriptions',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'Billing Agreements',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'My Product Reviews',
          class: 'dashboard-nav__item',
          linkClass: 'dashboard-nav__link',
          link: '#'
        },
        {
          text: 'My Wishlist',
          class: 'dashboard-nav__item ',
          linkClass: 'dashboard-nav__link',
          link: '#'
        }
      ]
    },
    signOutButton: {
      tag: 'a',
      class: 'button--secondary dashboard-nav__button',
      attributes: 'title="Sign out"',
      text: 'Sign out'
    },
    dashboardNavCompare: {
      title: {
        class: 'sidebar-block__title dashboard-nav__title'
      }
    },
    dashboardNavWishlist: {
      title: {
        class: 'sidebar-block__title dashboard-nav__title'
      }
    }
  }
}
