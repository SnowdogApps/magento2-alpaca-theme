module.exports = {
  context: {
    script: true,
    attributes: 'data-rewind="true" data-enable-mouse-events="true" data-slides-to-scroll="1"',
    iconPrev: {
      tag: 'button',
      class: 'button--icon slider__navigation-icon slider__prev',
      icon: {
        id: 'arrow-left',
        class: 'button__icon slider__icon'
      },
      attributes: 'type="button" aria-label="Previous slide"'
    },
    iconNext: {
      tag: 'button',
      class: 'slider__navigation-icon slider__next',
      icon: {
        id: 'arrow-right',
        class: 'button__icon slider__icon'
      },
      attributes: 'type="button" aria-label="Next slide"'
    },
    slides: [
      {
        content: 'image--picture',
        contentContext: {
          sources: [
            {
              src: '/images/slider/slider-304_392.jpg',
              mediaQuery: '(max-width: 480px)'
            },
            {
              src: '/images/slider/slider-752_536.jpg',
              mediaQuery: '(max-width: 768px)'
            },
            {
              src: '/images/slider/slider-944_536.jpg',
              mediaQuery: '(max-width: 1024px)'
            },
            {
              src: '/images/slider/slider-1328_536.jpg',
              mediaQuery: ''
            }
          ],
          alt: 'slider1'
        }
      },
      {
        content: 'image--picture',
        contentContext: {
          sources: [
            {
              src: '/images/slider/slider-304_392.jpg',
              mediaQuery: '(max-width: 480px)'
            },
            {
              src: '/images/slider/slider-752_536.jpg',
              mediaQuery: '(max-width: 768px)'
            },
            {
              src: '/images/slider/slider-944_536.jpg',
              mediaQuery: '(max-width: 1024px)'
            },
            {
              src: '/images/slider/slider-1328_536.jpg',
              mediaQuery: ''
            }
          ],
          alt: 'slider1'
        }
      },
      {
        content: 'image--picture',
        contentContext: {
          sources: [
            {
              src: '/images/slider/slider-304_392.jpg',
              mediaQuery: '(max-width: 480px)'
            },
            {
              src: '/images/slider/slider-752_536.jpg',
              mediaQuery: '(max-width: 768px)'
            },
            {
              src: '/images/slider/slider-944_536.jpg',
              mediaQuery: '(max-width: 1024px)'
            },
            {
              src: '/images/slider/slider-1328_536.jpg',
              mediaQuery: ''
            }
          ],
          alt: 'slider1'
        }
      },
      {
        content: 'image--picture',
        contentContext: {
          sources: [
            {
              src: '/images/slider/slider-304_392.jpg',
              mediaQuery: '(max-width: 480px)'
            },
            {
              src: '/images/slider/slider-752_536.jpg',
              mediaQuery: '(max-width: 768px)'
            },
            {
              src: '/images/slider/slider-944_536.jpg',
              mediaQuery: '(max-width: 1024px)'
            },
            {
              src: '/images/slider/slider-1328_536.jpg',
              mediaQuery: ''
            }
          ],
          alt: 'slider1'
        }
      }
    ]
  },
  variants: [
    {
      name: 'products',
      context: {
        class: 'slider--products',
        slides: [
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item'
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item'
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              name: 'Some product name Lorem Ipsum Dolor sit',
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              name: 'Some product name',
              price: {
                name: 'price--with-special-price',
                context: {
                  oldPriceClass: '',
                  regularPrice: '1000.00',
                  specialPrice: '899.99',
                  specialPriceClass: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              name: 'Some product name',
              price: {
                name: 'price--with-special-price',
                context: {
                  oldPriceClass: 'product-grid-item__old-price',
                  regularPrice: '1000.00',
                  specialPrice: '899.99',
                  specialPriceClass: 'product-grid-item__special-price',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item'
          }
        ]
      }
    },
    {
      name: 'products-without-cart',
      view: 'slider--products.hbs',
      context: {
        class: 'slider--products',
        slides: [
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              price: {
                class: 'product-grid-item__price--full-width'
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              price: {
                class: 'product-grid-item__price--full-width'
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              name: 'Some product name Lorem Ipsum Dolor sit',
              price: {
                class: 'product-grid-item__price--full-width'
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              name: 'Some product name',
              price: {
                class: 'product-grid-item__price--full-width',
                name: 'price--with-special-price',
                context: {
                  oldPriceClass: '',
                  regularPrice: '1000.00',
                  specialPrice: '899.99',
                  specialPriceClass: '',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              price: {
                class: 'product-grid-item__price--full-width'
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              name: 'Some product name',
              price: {
                class: 'product-grid-item__price--full-width',
                name: 'price--with-special-price',
                context: {
                  oldPriceClass: 'product-grid-item__old-price',
                  regularPrice: '1000.00',
                  specialPrice: '899.99',
                  specialPriceClass: 'product-grid-item__special-price',
                  prefix: {
                    tag: '',
                    text: '$'
                  },
                  suffix: {
                    tag: '',
                    text: ''
                  }
                }
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'product-grid-item--slider-item',
            contentContext: {
              price: {
                class: 'product-grid-item__price--full-width'
              },
              secondaryActions: {
                class: 'product-grid-item__actions--zero-width',
                addToCart: false
              }
            }
          }
        ]
      }
    }
  ]
}
