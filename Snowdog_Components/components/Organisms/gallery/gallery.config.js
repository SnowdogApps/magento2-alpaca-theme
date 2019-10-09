module.exports = {
  title: 'Product grid item',
  context: {
    typeVertical: false,
    dotsBreakpoint: false,
    imageMain: {
      dataSrc: '/images/product/product_432x648.jpg'
    },
    thumbArrowLeft: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button"',
      icon: {
        id: 'angle-up',
        class: 'gallery__icon-arrow gallery__icon-arrow--horizontal',
        hidden: true
      }
    },
    thumbArrowUp: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button"',
      icon: {
        id: 'angle-up',
        class: 'gallery__icon-arrow gallery__icon-arrow--vertical',
        hidden: true
      }
    },
    thumbArrowRight: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button"',
      icon: {
        id: 'angle-down',
        class: 'gallery__icon-arrow gallery__icon-arrow--horizontal',
        hidden: true
      }
    },
    thumbArrowDown: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button"',
      icon: {
        id: 'angle-down',
        class: 'gallery__icon-arrow gallery__icon-arrow--vertical',
        hidden: true
      }
    },
    thumbs: [
      {
        imageThumb: {
          dataSrc: '/images/product/product_64x96.jpg',
          active: true
        }
      },
      {
        imageThumb: {
          dataSrc: '/images/product/product_64x96.jpg'
        }
      },
      {
        imageThumb: {
          dataSrc: '/images/product/product_64x96.jpg'
        }
      },
      {
        imageThumb: {
          dataSrc: '/images/product/product_64x96.jpg'
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
        productLabels: [
          {
            class: '',
            text: '-15%'
          },
          {
            class: 'badge--new',
            text: 'new'
          }
        ]
      }
    },
    {
      name: 'dots-breakpoint',
      context: {
        class: 'gallery--dots',
        dotsBreakpoint: true
      }
    }
  ]
};
