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
          name: 'Compare Products',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      text: 'Compare products',
      class: 'margin-top-sm margin-bottom-xl text-center'
    },
    productCount: {
      tag: 'h2',
      text: 'Product (2)',
      class: 'heading--third-level heading--font-secondary margin-top-0 margin-bottom-xl text-center'
    },
    products: [
      {
        name: 'Affirm Water Bottle',
        img: {
          class: 'compare__image',
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/banner/banner-480_480.png',
          alt: 'Affirm Water Bottle'
        },
        rating: {
          class: 'compare__rating'
        },
        price: '$49.00',
        cart: {
          tag: 'button',
          text: '<span class="compare__cart-text">Add to Cart</span>',
          class: 'compare__cart',
          attributes: 'type="submit" aria-label="Add to Cart"'
        },
        wishlist: {
          tag: 'button',
          class: 'button--icon-light compare__wishlist',
          icon: {
            id: 'heart',
            title: 'Heart',
            class: 'button__icon compare__wishlist-icon'
          },
          attributes: 'type="button" aria-label="Add to Wish List"'
        },
        remove: {
          tag: 'button',
          class: 'button--icon-light compare__remove',
          icon: {
            id: 'remove',
            title: 'Trash bin',
            class: 'button__icon compare__remove-icon'
          },
          attributes: 'type="button" aria-label="Remove from Compare"'
        }
      },
      {
        name: 'Aim Analog Watch',
        img: {
          class: 'compare__image',
          src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
          dataSrc: '/images/banner/banner-480_480.png',
          alt: 'Aim Analog Watch'
        },
        rating: {
          class: 'compare__rating'
        },
        price: '$49.00',
        cart: {
          tag: 'button',
          text: '<span class="compare__cart-text">Add to Cart</span>',
          class: 'compare__cart',
          attributes: 'type="submit" aria-label="Add to Cart"'
        },
        wishlist: {
          tag: 'button',
          class: 'button--icon-light compare__wishlist',
          icon: {
            id: 'heart',
            title: 'Heart',
            class: 'button__icon compare__wishlist-icon'
          },
          attributes: 'type="button" aria-label="Add to Wish List"'
        },
        remove: {
          tag: 'button',
          class: 'button--icon-light compare__remove',
          icon: {
            id: 'remove',
            title: 'Trash bin',
            class: 'button__icon compare__remove-icon'
          },
          attributes: 'type="button" aria-label="Remove from Compare"'
        }
      }
    ],
    attributes: [
      {
        label: 'SKU',
        products: [
          '24-UG06',
          '24-MG04'
        ]
      },
      {
        label: 'Description',
        products: [
          'You\'ll stay hydrated with ease with the Affirm Water Bottle by your side or in hand. Measurements on the outside help you keep track of how much you\'re drinking, while the screw-top lid prevents spills. A metal carabiner clip allows you to attach it to the outside of a backpack or bag for easy access.',
          'Stay light-years ahead of the competition with our Aim Analog Watch. The flexible, rubberized strap is contoured to conform to the shape of your wrist for a comfortable all-day fit. The face features three illuminated hands, a digital read-out of the current time, and stopwatch functions.'
        ]
      },
      {
        label: 'Short Description',
        products: [
          'N/A',
          'N/A'
        ]
      },
      {
        label: 'Activity',
        products: [
          'Yoga, Recreation, Gym, Sports',
          'Outdoor, Recreation, Gym, Sports'
        ]
      }
    ]
  }
}
