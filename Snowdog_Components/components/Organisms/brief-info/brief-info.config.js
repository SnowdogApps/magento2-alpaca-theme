module.exports = {
  context: {
    items: [
      {
        iconLabel: 'Delivery',
        iconWrapperClass: 'margin-right-xs',
        icon: {
          class: 'brief-info__icon',
          id: 'delivery-truck',
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
        iconWrapperClass: 'margin-right-xs',
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
          text: 'Return Policy'
        },
        subtitle: {
          class: '',
          tag: 'p',
          text: 'Lorem Ipsum is simply'
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
    },
    {
      name: 'buttons',
      context: {
        items: [
          {
            isButton: true,
            buttonClass: 'modal-trigger',
            buttonAttributes: 'data-modal-trigger="modal-info-1"',
            iconLabel: 'Delivery',
            iconWrapperClass: 'margin-right-xs',
            icon: {
              class: 'brief-info__icon',
              id: 'delivery-truck',
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
            isButton: true,
            buttonClass: 'modal-trigger',
            buttonAttributes: 'data-modal-trigger="modal-info-2"',
            class: 'brief-info__icon',
            iconWrapperClass: 'margin-right-xs',
            iconLabel: 'Big Star',
            icon: {
              class: 'brief-info__icon',
              id: 'return',
              title: 'return',
              hidden: true
            },
            title: {
              class: '',
              tag: 'span',
              text: 'Return Policy'
            },
            subtitle: {
              class: '',
              tag: 'p',
              text: 'Lorem Ipsum is simply'
            }
          }
        ]
      }
    },
    {
      name: 'link',
      context: {
        class: 'brief-info--link',
        items: [
          {
            isButton: false,
            linkClass: 'link button button--icon button--icon-light',
            linkAttributes: 'href="#"',
            iconLabel: 'Delivery',
            iconWrapperClass: '',
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
    }
  ]
};
