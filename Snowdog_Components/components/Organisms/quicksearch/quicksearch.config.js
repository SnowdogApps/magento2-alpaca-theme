module.exports = {
  context: {
    results: {
      text: 'Results for your request:',
      typed: 'Ni'
    },
    noresults: {
      visible: false,
      text: 'No search results found.'
    },
    close: {
      tag: 'button',
      class: 'button--rotate-icon quicksearch__close-button',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'button__icon quicksearch__close-icon'
      },
      attributes: 'type="button" aria-label="Close quicksearch"',
    },
    product: [
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/product/minicart-product-64x96.jpeg'
        },
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/product/minicart-product-64x96.jpeg'
        },
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/product/minicart-product-64x96.jpeg'
        },
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/product/minicart-product-64x96.jpeg'
        },
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      }
    ],
    category: {
      title: 'Category',
      items: [
        {
          name: 'Category 1',
          class: 'quicksearch__link--sidebar'
        },
        {
          name: 'Category 2',
          class: 'quicksearch__link--sidebar'
        }
      ]
    },
    manufacturer: {
      title: 'Manufacturer',
      items: [
        {
          name: 'Nike'
        },
        {
          name: 'Nike SB'
        },
        {
          name: 'Nike sportswear'
        },
        {
          name: 'Nixon'
        }
      ]
    },
    more: {
      class: 'button button--fluid quicksearch__more-link',
      href: '#',
      text: 'See All'
    }
  }
}
