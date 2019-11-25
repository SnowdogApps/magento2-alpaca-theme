module.exports = {
  title: 'Header module',
  context: {
    contactBar: true,
    sideMenu: true,
    search: true,
    megaMenu: true,
    skipNav: true,
    marketingBar: true,
    buttons: [
      {
        ariaLabel: 'Wishlist',
        class: 'margin-right-xs',
        icon: {
          id: 'heart',
          title: 'Heart',
          class: 'header-button__icon'
        }
      }
    ],
    logo: {
      class: 'header__logo',
      logoSVG: true,
      ariaLabel: 'Home page link',
      imageAlt: 'Colibri Logo',
      imageAttributes: '',
      imageClass: '',
      imageSrc: '/images/logo/logo.svg',
      href: '#'
    },
    searchInput: {
      class: 'search-form__input-wrapper margin-0',
      label: {
        text: 'Search products',
        hidden: true
      },
      field: {
        class: 'search-form__input border-color-light',
        id: 'search',
        name: 'search',
        type: 'search',
        placeholder: 'Search entire store here...'
      }
    },
    searchButton: {
      tag: 'button',
      text: '',
      class: 'button--icon button--icon-light search-form__button',
      icon: {
        id: 'search',
        title: 'Search',
        class: 'button__icon'
      },
      attributes: 'type="button" aria-label="Search"',
    },
    minicartTrigger: {
      icon: {
        id: 'shopping-cart',
        title: 'Shopping cart',
        class: 'header-button__icon'
      },
      link: '/cart',
      ariaLabel: 'Shopping cart dropdown trigger'
    },
    minicartModal: {
      trigger: false,
      modal: {
        id: 'modal-minicart',
        attributes: 'aria-labelledby="minicart-title" aria-describedby="minicart-products"'
      },
      modalComponent: {
        content: 'minicart-content',
        contentContext: ''
      },
      modalContent: {
        class: 'modal__content--block'
      },
      script: true,
      modalTop: false,
      modalMiddle: false,
      modalBottom: false
    },
    briefInfo: {
      items: [
        {
          iconLabel: 'Delivery',
          icon: {
            class: 'brief-info__icon',
            id: 'delivery',
            title: 'Free shipping icon',
            hidden: true
          },
          title: {
            class: '',
            tag: 'h3',
            text: 'Free Shipping'
          },
          subtitle: {
            class: '',
            tag: 'p',
            text: 'On Hundreds of Products'
          }
        }
      ]
    }
  },
  variants: [
    {
      name: 'checkout',
      context: {
        class: 'header--checkout',
        contactBar: false,
        sideMenu: false,
        search: false,
        megaMenu: false,
        buttons: true,
        briefInfo: false,
        skipNav: false,
        marketingBar: false,
      }
    }
  ]
}
