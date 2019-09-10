module.exports = {
  context: {
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
      },
      {
        class: 'brief-info__icon',
        iconLabel: 'Big Star',
        icon: {
          class: 'brief-info__icon',
          id: 'bigstar',
          title: 'Big Star',
          hidden: true
        },
        title: {
          class: '',
          tag: 'span',
          text: 'Favorites lorem ipsum'
        }
      }
    ]
  },
  variants: [
    {
      name: 'dividers',
      context: {
        class: 'brief-info--dividers',
        items: [
          {
            iconLabel: 'Return policy',
            iconWrapperClass: '',
            icon: {
              class: 'brief-info__icon',
              id: 'return',
              title: 'Return Policy',
              hidden: true
            },
            title: {
              class: '',
              tag: 'h3',
              text: 'Lorem Ipsum is simply'
            },
            subtitle: {
              class: '',
              tag: 'p',
              text: '30-day return policy'
            }
          },
          {
            iconLabel: 'Lorem Ipsum is simply',
            iconWrapperClass: '',
            icon: {
              class: 'brief-info__icon',
              id: 'bigstar',
              title: 'Big star',
              hidden: true
            },
            title: {
              class: '',
              tag: 'h3',
              text: 'Lorem Ipsum is simply'
            },
            subtitle: {
              class: '',
              tag: 'p',
              text: 'Now in stock!'
            }
          },
          {
            iconLabel: 'Our Customers Are Talking',
            iconWrapperClass: '',
            icon: {
              class: 'brief-info__icon',
              id: 'reviews',
              title: 'Our Customers Are Talking',
              hidden: true
            },
            title: {
              class: '',
              tag: 'h3',
              text: 'Our Customers Are Talking'
            },
            subtitle: {
              class: '',
              tag: 'p',
              text: 'Check out our reviews!'
            }
          }
        ]
      }
    }
  ]
};
