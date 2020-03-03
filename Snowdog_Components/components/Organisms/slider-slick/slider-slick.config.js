module.exports = {
  context: {
    script: true,
    class: '',
    attributes: 'data-rewind="true" data-enable-mouse-events="true" data-slides-to-scroll="1"',
    iconPrev: {
      tag: 'button',
      class: 'button--icon-border slider-slick__nav-button slider-slick__prev',
      icon: {
        id: 'arrow-left',
        class: 'button__icon slider-slick__nav-icon'
      },
      attributes: 'type="button" aria-label="Previous slide"'
    },
    iconNext: {
      tag: 'button',
      class: 'button--icon-border slider-slick__nav-button slider-slick__next',
      icon: {
        id: 'arrow-right',
        class: 'button__icon slider-slick__nav-icon'
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
  }
}
