module.exports = {
  title: 'Gallery',
  default: 'vertical',
  meta: {
    docsOnlyStyles: true
  },
  context: {
    typeVertical: true,
    dots: false,
    imageMain: {
      dataSrc: '/images/product/product_432x648.jpg'
    },
    thumbArrowLeft: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button" aria-label="check more images"',
      icon: {
        id: 'angle-up',
        class: 'gallery__icon-arrow gallery__icon-arrow--horizontal',
        hidden: true
      }
    },
    thumbArrowUp: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button" aria-label="check more images"',
      icon: {
        id: 'angle-up',
        class: 'gallery__icon-arrow gallery__icon-arrow--vertical',
        hidden: true
      }
    },
    thumbArrowRight: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button" aria-label="check more images"',
      icon: {
        id: 'angle-down',
        class: 'gallery__icon-arrow gallery__icon-arrow--horizontal',
        hidden: true
      }
    },
    thumbArrowDown: {
      tag: 'button',
      class: 'gallery__thumb-arr',
      attributes: 'type="button" aria-label="check more images"',
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
      name: 'dots-breakpoint',
      context: {
        dots: true
      }
    }
  ]
};
