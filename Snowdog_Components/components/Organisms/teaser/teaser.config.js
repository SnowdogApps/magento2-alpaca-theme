module.exports = {
  context: {
    class: 'teaser-left',
    image: {
      src: '/images/home/teaser/teaser-small-girl_304-304.jpg',
      wrapperClass: 'teaser__image',
      defaultSrc: '/images/home/teaser/teaser-small-girl_304-304.jpg',
      sources: [
        {
          src: '/images/home/teaser/teaser-medium-girl_376-432.jpg',
          mediaQuery: '(max-width: 768px)'
        },
        {
          src: '/images/home/teaser/teaser-medium-girl_472-432.jpg',
          mediaQuery: '(max-width: 1024px)'
        },
        {
          src: '/images/home/teaser/teaser-large-girl_1328-1200.jpg',
          mediaQuery: ''
        }
      ],
      alt: 'Teaser girl image'
    },
    contentElement: 'content-block'
  }
}
