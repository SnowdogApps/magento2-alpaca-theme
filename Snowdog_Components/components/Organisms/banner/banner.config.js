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
    }
  ]
};
