module.exports = {
  context: {
    class: '',
    image: {
      src: '/images/home/teaser/teaser-small-girl_768-768.jpg',
      class: 'teaser__image',
      defaultSrc: '/images/home/teaser/teaser-small-girl_768-768.jpg',
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
  },
  variants: [
    {
      name: 'teaser--secondary',
      context: {
        class: 'teaser--secondary'
      }
    }
  ]
}
