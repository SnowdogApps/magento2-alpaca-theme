module.exports = {
  title: 'Header module',
  context: {
    contactBar: true,
    sideMenu: true,
    search: true,
    quicksearch: false,
    megaMenu: true,
    skipNav: true,
    marketingBar: true,
    minicart: true,
    buttons: [
      {
        ariaLabel: 'Wishlist',
        class: 'button--icon-fill',
        icon: {
          id: 'heart',
          title: 'Heart',
          class: 'header-button__icon',
          hidden: true
        }
      }
    ],
    logo: {
      class: 'header__logo'
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
      class: 'button--icon search-form__button',
      icon: {
        id: 'search',
        title: 'Search',
        class: 'button__icon',
        hidden: true
      },
      attributes: 'type="button" aria-label="Search"',
    },
    minicartTrigger: {
      icon: {
        id: 'shopping-cart',
        title: 'Shopping cart',
        class: 'header-button__icon',
        hidden: true
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
            id: 'delivery-truck',
            title: 'Free shipping icon',
            hidden: true
          },
          title: {
            class: '',
            tag: 'span',
            text: 'Free Shipping'
          },
          subtitle: {
            class: '',
            tag: 'span',
            text: 'On Hundreds of Products'
          }
        }
      ]
    }
  },
  variants: [
    {
      name: 'with-quicksearch',
      context: {
        quicksearch: true,
      }
    },
    {
      name: 'checkout',
      context: {
        class: 'header--checkout',
        contactBar: false,
        sideMenu: false,
        search: false,
        quicksearch: false,
        megaMenu: false,
        briefInfo: false,
        skipNav: false,
        marketingBar: false,
        minicart: false,
        buttons: [
          {
            ariaLabel: 'cartLink',
            icon: {
              id: 'shopping-cart',
              title: 'cart link',
              class: 'header-button__icon'
            }
          }
        ]
      }
    }
  ]
}
