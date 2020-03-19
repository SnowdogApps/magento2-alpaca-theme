module.exports = {
  context: {
    script: true,
    scriptFile: 'slider.js',
    class: '',
    attributes: 'data-slider="default"',
    heading: {
      class: '',
      content: 'heading',
      contentContext: {
        tag: 'h2',
        class: 'heading--first-level margin-0',
        text: 'Slider heading'
      }
    },
    iconPrev: {
      tag: 'button',
      class: 'button--icon-border slider__nav-button slider__prev',
      icon: {
        id: 'arrow-left',
        class: 'button__icon slider__nav-icon'
      },
      attributes: 'type="button" aria-label="Previous slide"'
    },
    iconNext: {
      tag: 'button',
      class: 'button--icon-border slider__nav-button slider__next',
      icon: {
        id: 'arrow-right',
        class: 'button__icon slider__nav-icon'
      },
      attributes: 'type="button" aria-label="Next slide"'
    },
    slides: [
      {
        content: 'image--picture',
        contentContext: {
          defaultSrc: '/images/slider/slider-304_392.jpg',
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
          defaultSrc: '/images/slider/slider-304_392.jpg',
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
          defaultSrc: '/images/slider/slider-304_392.jpg',
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
          defaultSrc: '/images/slider/slider-304_392.jpg',
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
        scriptFile: 'slider--products.js',
        class: 'slider--products',
        attributes: 'data-slider="products"',
        heading: false,
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
      name: 'brands',
      context: {
        scriptFile: 'slider--brands.js',
        class: 'slider--brands',
        attributes: 'data-slider="brands"',
        heading: {
          class: '',
          content: 'heading',
          contentContext: {
            tag: 'h2',
            class: 'heading--first-level margin-0',
            text: 'Top brands'
          }
        },
        contentAfter: {
          content: 'link',
          contentContext: {
            href: '#',
            title: 'See all Brands',
            text: 'See all Brands',
            class: 'slider__link'
          }
        },
        slides: [
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-nike_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-nike_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-nike_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-nike_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand nike'
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-adidas_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-adidas_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-adidas_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-adidas_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand adidas'
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-nike_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-nike_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-nike_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-nike_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand nike'
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-armani_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-armani_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-armani_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-armani_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand armani'
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-adidas_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-adidas_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-adidas_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-adidas_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand adidas'
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-armani_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-armani_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-armani_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-armani_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand armani'
            }
          },
          {
            itemClass: 'slider__slide-item',
            content: 'image--picture',
            contentContext: {
              src: '/images/home/brands/brand-adidas_208-208.jpg',
              class: 'slider__image',
              defaultSrc: '/images/home/brands/brand-adidas_208-208.jpg',
              sources: [
                {
                  src: '/images/home/brands/brand-adidas_144-144.jpg',
                  mediaQuery: '(max-width: 1024px)'
                },
                {
                  src: '/images/home/brands/brand-adidas_208-208.jpg',
                  mediaQuery: ''
                }
              ],
              alt: 'Brand adidas'
            }
          }
        ]
      }
    }
  ]
}
