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
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__name quicksearch__name--thin',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__name quicksearch__name--thin',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__name quicksearch__name--thin',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      },
      {
        image: {
          wrapperClass: 'quicksearch__product-image-wrapper',
          class: 'quicksearch__product-image',
          dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
        },
        name: {
          class: 'quicksearch__name quicksearch__name--thin',
          tag: 'h3',
          text: 'Lorem Ipsum is simply dummy...'
        }
      }
    ],
    category: {
      title: 'Category',
      items: [
        {
          name: {
            class: 'quicksearch__name',
            tag: 'h3',
            text: 'Category 1'
          }
        },
        {
          name: {
            class: 'quicksearch__name',
            tag: 'h3',
            text: 'Category 2'
          }
        }
      ]
    },
    manufacturer: {
      title: 'Manufacturer',
      items: [
        {
          name: {
            class: 'quicksearch__name',
            tag: 'h3',
            text: 'Nike'
          }
        },
        {
          name: {
            class: 'quicksearch__name',
            tag: 'h3',
            text: 'Nike SB'
          }
        },
        {
          name: {
            class: 'quicksearch__name',
            tag: 'h3',
            text: 'Nike sportswear'
          }
        },
        {
          name: {
            class: 'quicksearch__name',
            tag: 'h3',
            text: 'Nixon'
          }
        }
      ]
    },
    more: {
      class: 'button quicksearch__more-link',
      href: '#',
      text: 'See All'
    }
  }
}
