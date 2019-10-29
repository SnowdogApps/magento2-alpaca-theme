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
      tag: 'span',
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
      context: {
        class: 'article-item--single',
        containerClass: '',
        mediaClass: '',
        bodyClass: '',
        articleTitle: {
          tag: 'h1',
          class: 'article-item__title',
          text: 'Lorem Ipsum is simply dummy text of the printing'
        },
        articleContent: '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>',
        footer: {
          component: 'list',
          context: {
            class: 'list--horizontal article-item__links-list',
            listTag: 'ul',
            elementTag: 'li',
            elements: [
              {
                text: '<strong>Posted in:</strong>'
              },
              {
                text: false,
                component: {
                  content: 'link',
                  context: {
                    text: 'Lorem ipsum'
                  }
                }
              },
              {
                text: false,
                component: {
                  content: 'link',
                  context: {
                    text: 'Lorem ipsum'
                  }
                }
              },
              {
                text: false,
                component: {
                  content: 'link',
                  context: {
                    text: 'Lorem ipsum'
                  }
                }
              },
              {
                text: false,
                component: {
                  content: 'link',
                  context: {
                    text: 'Lorem ipsum'
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
};
