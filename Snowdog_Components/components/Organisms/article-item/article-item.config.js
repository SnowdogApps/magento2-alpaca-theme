module.exports = {
  context: {
    tag: 'article',
    class: '',
    headerClass: '',
    containerClass: 'row',
    mediaClass: 'col-lg-4',
    bodyClass: 'col-lg-8',
    footerClass: '',
    articleTitle: {
      tag: 'h2',
      class: 'article-item__title heading--font-secondary',
      text: 'Lorem Ipsum is simply dummy text of the printing'
    },
    articleSubtitle: {
      tag: 'h3',
      class: 'article-item__sub-title heading--font-secondary',
      text: 'August 8, 2019'
    },
    articleBanner: {
      class: 'article-item__banner',
      image: {
        class: 'article-item__image',
        defaultSrc: '/images/banner/banner-320_176.jpg',
        sources: [
          {
            src: '/images/banner/banner-768_402.png',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/banner/banner-320_176.jpg',
            mediaQuery: ''
          }
        ],
        alt: 'article banner image'
      }
    },
    articleContent: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>',
    footer: {
      component: 'link',
      context: {
        class: 'article-item__footer-link',
        title: 'Read more',
        text: 'Read more'
      }
    }
  },
  variants: [
    {
      name: 'single',
      class: 'article-item--single'
    }
  ]
};
