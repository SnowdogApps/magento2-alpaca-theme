module.exports = {
  context: {
    script: true,
    class: 'slider--loading',
    attributes: [
      {
        attr: 'data-slider="default"'
      },
      {
        attr: 'data-mobile-first="true"'
      },
      {
        attr: 'data-infinite="true"'
      },
      {
        attr: 'data-center-mode="false"'
      },
      {
        attr: 'data-dots="false"'
      },
      {
        attr: 'data-autoplay="false"'
      },
      {
        attr: 'data-autoplay-speed="3000"'
      },
      {
        attr: 'data-pause-on-focus="true"'
      },
      {
        attr: 'data-pause-on-hover="true"'
      },
      {
        attr: 'data-slides-to-show="1"'
      },
      {
        attr: 'data-slides-to-scroll="1"'
      },
      {
        attr: 'data-swipe-to-slide="true"'
      },
      {
        attr: 'data-element-slides=".slider__slides"'
      },
      {
        attr: 'data-dots-class="slider__dots"'
      },
      {
        attr: 'data-loading-class="slider--loading"'
      },
      {
        attr: 'data-loader-visible-class="loader--visible"'
      },
      {
        attr: 'data-element-slide=".slider__item"'
      },
      {
        attr: 'data-element-loader=".loader"'
      },
      {
        attr: 'data-element-nav-prev=".slider__prev"'
      },
      {
        attr: 'data-element-nav-next=".slider__next"'
      },
      {
        attr: 'data-responsive-config="[]"'
      }
    ],
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
      name: 'loader-visible',
      context: {
        class: 'slider--loader-visible'
      }
    },
    {
      name: 'products',
      context: {
        class: 'slider--products',
        attributes: [
          {
            attr: 'data-mobile-first="true"'
          },
          {
            attr: 'data-infinite="false"'
          },
          {
            attr: 'data-center-mode="false"'
          },
          {
            attr: 'data-dots="true"'
          },
          {
            attr: 'data-autoplay="false"'
          },
          {
            attr: 'data-autoplay-speed="3000"'
          },
          {
            attr: 'data-pause-on-focus="true"'
          },
          {
            attr: 'data-pause-on-hover="true"'
          },
          {
            attr: 'data-slides-to-show="2"'
          },
          {
            attr: 'data-slides-to-scroll="1"'
          },
          {
            attr: 'data-swipe-to-slide="true"'
          },
          {
            attr: 'data-element-slides=".slider__slides"'
          },
          {
            attr: 'data-dots-class="slider__dots"'
          },
          {
            attr: 'data-loading-class="slider--loading"'
          },
          {
            attr: 'data-loader-visible-class="loader--visible"'
          },
          {
            attr: 'data-element-slide=".slider__item"'
          },
          {
            attr: 'data-element-loader=".loader"'
          },
          {
            attr: 'data-element-nav-prev=".slider__prev"'
          },
          {
            attr: 'data-element-nav-next=".slider__next"'
          },
          {
            // eslint-disable-next-line
            attr: 'data-responsive-config=\'[{\"breakpoint\": 767, \"settings\": {\"slidesToShow\": 3, \"slidesToScroll\": 1, \"dots\": false}}, {\"breakpoint\": 1023, \"settings\": {\"slidesToShow\": 4, \"slidesToScroll\": 1, \"dots\": false}}]\''
          }
        ],
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
        class: 'slider--brands',
        attributes: [
          {
            attr: 'data-mobile-first="true"'
          },
          {
            attr: 'data-infinite="true"'
          },
          {
            attr: 'data-center-mode="false"'
          },
          {
            attr: 'data-dots="false"'
          },
          {
            attr: 'data-autoplay="false"'
          },
          {
            attr: 'data-autoplay-speed="3000"'
          },
          {
            attr: 'data-pause-on-focus="true"'
          },
          {
            attr: 'data-pause-on-hover="true"'
          },
          {
            attr: 'data-slides-to-show="3"'
          },
          {
            attr: 'data-slides-to-scroll="1"'
          },
          {
            attr: 'data-swipe-to-slide="true"'
          },
          {
            attr: 'data-element-slides=".slider__slides"'
          },
          {
            attr: 'data-dots-class="slider__dots"'
          },
          {
            attr: 'data-loading-class="slider--loading"'
          },
          {
            attr: 'data-loader-visible-class="loader--visible"'
          },
          {
            attr: 'data-element-slide=".slider__item"'
          },
          {
            attr: 'data-element-loader=".loader"'
          },
          {
            attr: 'data-element-nav-prev=".slider__prev"'
          },
          {
            attr: 'data-element-nav-next=".slider__next"'
          },
          {
            // eslint-disable-next-line
            attr: 'data-responsive-config=\'[{\"breakpoint\": 767, \"settings\": {\"slidesToShow\": 4, \"slidesToScroll\": 1, \"dots\": false}}, {\"breakpoint\": 1023, \"settings\": {\"slidesToShow\": 6, \"slidesToScroll\": 1, \"dots\": false}}]\''
          }
        ],
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
    },
    {
      name: 'catalog events',
      context: {
        class: 'slider--catalog-events',
        attributes: [
          {
            attr: 'data-mobile-first="true"'
          },
          {
            attr: 'data-infinite="true"'
          },
          {
            attr: 'data-center-mode="false"'
          },
          {
            attr: 'data-dots="true"'
          },
          {
            attr: 'data-autoplay="false"'
          },
          {
            attr: 'data-autoplay-speed="3000"'
          },
          {
            attr: 'data-pause-on-focus="true"'
          },
          {
            attr: 'data-pause-on-hover="true"'
          },
          {
            attr: 'data-slides-to-show="1"'
          },
          {
            attr: 'data-slides-to-scroll="1"'
          },
          {
            attr: 'data-swipe-to-slide="true"'
          },
          {
            attr: 'data-element-slides=".slider__slides"'
          },
          {
            attr: 'data-dots-class="slider__dots"'
          },
          {
            attr: 'data-loading-class="slider--loading"'
          },
          {
            attr: 'data-loader-visible-class="loader--visible"'
          },
          {
            attr: 'data-element-slide=".slider__item"'
          },
          {
            attr: 'data-element-loader=".loader"'
          },
          {
            attr: 'data-element-nav-prev=".slider__prev"'
          },
          {
            attr: 'data-element-nav-next=".slider__next"'
          },
          {
            // eslint-disable-next-line
            attr: 'data-responsive-config=\'[]\''
          }
        ],
        heading: false,
        slides: [
          {
            content: 'catalog-event--slider-item'
          },
          {
            content: 'catalog-event--slider-item'
          }
        ]
      }
    }
  ]
}
