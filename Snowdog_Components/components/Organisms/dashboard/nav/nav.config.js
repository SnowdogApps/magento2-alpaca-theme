module.exports = {
  label: 'Nav',
  name: 'dashboard-nav',
  context: {
    actualPage: 'Account Dashboard',
    list: {
      class: 'dashboard-nav__list',
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
      class: 'dashboard-nav__button',
      attributes: 'type="button" aria-label="button"',
      text: 'Sign out'
    },
    compare: {
      heading: {
        tag: 'h3',
        class: 'dashboard-nav__section-title',
        text: 'Compare Products'
      },
      text: 'You have no items to compare.'
    },
    wishlist: {
      heading: {
        tag: 'h3',
        class: 'dashboard-nav__section-title',
        text: 'My Wish List'
      },
      text: 'You have no items in your wish list.'
    }
  }
}
