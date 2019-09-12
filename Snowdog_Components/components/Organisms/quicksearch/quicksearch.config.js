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
      class: 'button--icon quicksearch__close-button',
      icon: {
        id: 'close',
        title: 'Close',
        iconClass: 'button__icon quicksearch__close-icon'
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
    category: [
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Category name'
        },
        items: '598 item(s)'
      }
    ],
    manufacturer: [
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Manufacturer name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Manufacturer name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Manufacturer name'
        },
        items: '598 item(s)'
      },
      {
        name: {
          class: 'quicksearch__name',
          tag: 'h3',
          text: 'Manufacturer name'
        },
        items: '598 item(s)'
      }
    ],
    more: {
      class: 'link--invert quicksearch__more-link',
      href: '#',
      text: 'See All'
    }
  }
}
