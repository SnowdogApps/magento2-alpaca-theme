module.exports = {
  title: 'Product grid item',
  context: {
    typeHorizontal: false,
    imageMain: {
      dataSrc: '/images/gallery/product-img-496-496.jpg'
    },
    thumbs: [
      {
        imageThumb: {
          dataSrc: '/images/gallery/product-img-80-80.jpg',
          active: true
        }
      },
      {
        imageThumb: {
          dataSrc: '/images/gallery/product-img-80-80.jpg'
        }
      },
      {
        imageThumb: {
          dataSrc: '/images/gallery/product-img-80-80.jpg'
        }
      },
      {
        imageThumb: {
          dataSrc: '/images/gallery/product-img-80-80.jpg'
        }
      }
    ]
  },
  variants: [
    {
      name: 'horizontal',
      context: {
        typeHorizontal: true
      }
    },
    {
      name: 'with-label',
      context: {
        productLabel: {
          class: 'badge--new gallery__product-label',
          text: 'new'
        }
      }
    }
  ]
};
