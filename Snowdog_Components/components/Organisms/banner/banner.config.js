module.exports = {
  context: {
    link: '#',
    attributes: 'aria-label="descriptive text about banner action and / or image"',
    image: {
      defaultSrc: '/images/banner/banner-320_176.jpg',
      sources: [
        {
          src: '/images/banner/banner-320_176.jpg',
          mediaQuery: '(max-width: 480px)'
        },
        {
          src: '/images/banner/banner-768_416.jpg',
          mediaQuery: '(max-width: 960px)'
        },
        {
          src: '/images/banner/banner-1024_416.jpg',
          mediaQuery: '(max-width: 1328px)'
        },
        {
          src: '/images/banner/banner-1920_512.jpg',
          mediaQuery: ''
        }
      ],
      alt: 'banner-image'
    },
    imageCategory: {
      class: 'banner__image',
      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
      dataSrc: '/images/banner/banner-1920_512.jpg',
      alt: 'image alt text'
    }
  },
  variants: [
    {
      name: 'secondary',
      view: 'banner--secondary.hbs',
      context: {
        icon: {
          id: 'arrow-right',
          title: 'Arrow right icon'
        },
        text: 'Clothing'
      }
    },
    {
      name: 'category',
      view: 'banner--category.hbs',
      context: {
        buttonCollapse: {
          tag: 'button',
          class: 'banner__button banner__button-collapse',
          attributes: 'type="button" aria-label="button"',
          text: 'More about test',
          iconAfter: {
            id: 'angle-down'
          }
        },
        buttonClose: {
          tag: 'button',
          class: 'banner__button banner__button-close margin-vc-xs',
          attributes: 'type="button" aria-label="button"',
          text: 'Hide details',
          iconAfter: {
            id: 'angle-up'
          }
        },
        buttonMore: {
          tag: 'a',
          class: 'banner__button banner__button-more margin-vc-xs',
          attributes: 'aria-label="button" tabindex="0"',
          text: 'View All',
          iconAfter: {
            id: 'arrow-right'
          }
        }
      }
    }
  ]
};
