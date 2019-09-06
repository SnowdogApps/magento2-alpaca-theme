module.exports = {
  title: 'Header module',
  context: {
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
      imageAlt: 'Alpaca Logo',
      imageAttributes: '',
      imageClass: '',
      imageSrc: '/images/logo/logo.svg',
      href: '#'
    },
    searchInput: {
      class: 'search-form__input-wrapper margin-0',
      label: {
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
      class: 'button--icon search-form__button',
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
    minicartPopup: {
      class: 'header__minicart-content',
      popupId: 'popup-minicart',
      popupTrigger: false,
      content: 'minicart-content',
      script: true
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
  }
}
