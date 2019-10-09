module.exports = {
  context: {
    bannerCategories: {
      heading: 'Shop by category'
    },
    popularProducts: {
      heading: 'Popular products'
    },
    newProducts: {
      heading: 'New products'
    },
    topBrands: {
      heading: 'Top brands'
    },
    bannerSmall1: {
      link: '#',
      class: 'home__banner-content',
      image: {
        defaultSrc: '/images/home/banners/banner-small-men_432-248.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-small-men_432-248.jpg',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/home/banners/banner-small-men_304-184.jpg',
            mediaQuery: '(max-width: 1024px)'
          },
          {
            src: '/images/home/banners/banner-small-men_432-248.jpg',
            mediaQuery: ''
          }
        ],
        alt: 'banner men alt text'
      }
    },
    bannerSmall2: {
      link: '#',
      class: 'home__banner-content',
      image: {
        defaultSrc: '/images/home/banners/banner-small-women_432-248.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-small-women_432-248.jpg',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/home/banners/banner-small-women_304-184.jpg',
            mediaQuery: '(max-width: 1024px)'
          },
          {
            src: '/images/home/banners/banner-small-women_432-248.jpg',
            mediaQuery: ''
          }
        ],
        alt: 'banner women alt text'
      }
    },
    bannerSmall3: {
      link: '#',
      class: 'home__banner-content',
      image: {
        defaultSrc: '/images/home/banners/banner-small-gear_432-248.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-small-gear_432-248.jpg',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/home/banners/banner-small-gear_304-184.jpg',
            mediaQuery: '(max-width: 1024px)'
          },
          {
            src: '/images/home/banners/banner-small-gear_432-248.jpg',
            mediaQuery: ''
          }
        ],
        alt: 'banner gear alt text'
      }
    },
    bannerMedium1: {
      link: '#',
      class: 'home__banner-content',
      image: {
        defaultSrc: '/images/home/banners/banner-medium-new_304-176.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-medium-new_304-176.jpg',
            mediaQuery: '(max-width: 480px)'
          },
          {
            src: '/images/home/banners/banner-medium-new_752-360.jpg',
            mediaQuery: '(max-width: 1024px)'
          },
          {
            src: '/images/home/banners/banner-medium-new_464-256.jpg',
            mediaQuery: '(max-width: 2080px)'
          },
          {
            src: '/images/home/banners/banner-medium-new_656-360.jpg',
            mediaQuery: ''
          }
        ],
        alt: 'banner new collection alt text'
      }
    },
    bannerMedium2: {
      link: '#',
      class: 'home__banner-content',
      image: {
        defaultSrc: '/images/home/banners/banner-medium-discover_304-176.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-medium-discover_304-176.jpg',
            mediaQuery: '(max-width: 480px)'
          },
          {
            src: '/images/home/banners/banner-medium-discover_752-360.jpg',
            mediaQuery: '(max-width: 1024px)'
          },
          {
            src: '/images/home/banners/banner-medium-discover_464-256.jpg',
            mediaQuery: '(max-width: 2080px)'
          },
          {
            src: '/images/home/banners/banner-medium-discover_656-360.jpg',
            mediaQuery: ''
          }
        ],
        alt: 'banner discover alt text'
      }
    },
    brandBlockHeading: {
      tag: 'h2',
      class: 'home__cms-block-title',
      text: 'Brands'
    },
    cmsBlock: '<p>Vestibulum quis consectetur enim, sit amet iaculis enim. Integer sit amet justo dictum, faucibus enim quis, mattis leo. Aenean sagittis eget arcu ac facilisis. Vestibulum mi lacus, consequat et sodales id, vehicula in felis. Praesent at molestie eros, at pretium nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce iaculis felis vitae tempus elementum.</p> <p>Curabitur hendrerit, augue pharetra suscipit posuere, nunc risus congue nulla, ac sollicitudin leo sem sed ante. Nulla at velit imperdiet, dapibus libero in, vehicula mi. Nunc consequat quis ligula eu porttitor. Maecenas laoreet, sapien vel consequat vestibulum, purus tellus gravida arcu, quis interdum ligula diam quis lacus. Cras ac odio urna. Aenean tempus tristique felis, vitae pellentesque sem fringilla id. Nam euismod purus ornare, suscipit ante ut, aliquam odio. Integer cursus odio id odio tempus, non ullamcorper erat malesuada.</p>',
    brandsList: {
      listTag: 'ul',
      elementTag: 'li',
      class: 'home__brands-list',
      elements: [
        {
          linkClass: '',
          text: '',
          content: 'image',
          contentContext: {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            dataSrc: '/images/home/brand-example_112-112.png',
            alt: 'brand name alt text'
          },
          link: '#',
        },
        {
          linkClass: '',
          text: '',
          content: 'image',
          contentContext: {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            dataSrc: '/images/home/brand-example_112-112.png',
            alt: 'brand name alt text'
          },
          link: '#link',
        },
        {
          linkClass: '',
          text: '',
          content: 'image',
          contentContext: {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            dataSrc: '/images/home/brand-example_112-112.png',
            alt: 'brand name alt text'
          },
          link: '#',
        },
        {
          linkClass: '',
          text: '',
          content: 'image',
          contentContext: {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            dataSrc: '/images/home/brand-example_112-112.png',
            alt: 'brand name alt text'
          },
          link: '#',
        },
        {
          linkClass: '',
          text: '',
          content: 'image',
          contentContext: {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            dataSrc: '/images/home/brand-example_112-112.png',
            alt: 'brand name alt text'
          },
          link: '#'
        },
        {
          linkClass: '',
          text: '',
          content: 'image',
          contentContext: {
            src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
            dataSrc: '/images/home/brand-example_112-112.png',
            alt: 'brand name alt text'
          },
          link: '#'
        }
      ]
    }
  }
}
