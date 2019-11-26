module.exports = {
  context: {
    categoriesHeading: {
      tag: 'h2',
      class: 'home__heading',
      text: 'Shop by category'
    },
    clothingBanner: {
      text: 'Clothing',
      class: 'col-xs-6 col-lg-3 home__category-banner margin-bottom-l',
      image: {
        defaultSrc: '/images/home/banners/category-clothing-144_200.jpg',
        sources: [
          {
            src: '/images/home/banners/category-clothing-320_432.jpg',
            mediaQuery: '(max-width: 1200px)'
          },
          {
            src: '/images/home/banners/category-clothing-320_432.jpg',
            mediaQuery: ''
          }
        ]
      }
    },
    shoesBanner: {
      text: 'Shoes',
      class: 'col-xs-6 col-lg-3 home__category-banner margin-bottom-l',
      image: {
        defaultSrc: '/images/home/banners/category-shoes-144_200.jpg',
        sources: [
          {
            src: '/images/home/banners/category-shoes-320_432.jpg',
            mediaQuery: '(max-width: 1200px)'
          },
          {
            src: '/images/home/banners/category-shoes-320_432.jpg',
            mediaQuery: ''
          }
        ]
      }
    },
    accessoriesBanner: {
      text: 'Accessories',
      class: 'col-xs-6 col-lg-3 home__category-banner margin-bottom-l',
      image: {
        defaultSrc: '/images/home/banners/category-accessories-144_200.jpg',
        sources: [
          {
            src: '/images/home/banners/category-accessories-320_432.jpg',
            mediaQuery: '(max-width: 1200px)'
          },
          {
            src: '/images/home/banners/category-accessories-320_432.jpg',
            mediaQuery: ''
          }
        ]
      }
    },
    newInBanner: {
      text: 'New In',
      class: 'col-xs-6 col-lg-3 home__category-banner margin-bottom-l',
      image: {
        defaultSrc: '/images/home/banners/category-new-in-144_200.jpg',
        sources: [
          {
            src: '/images/home/banners/category-new-in-320_432.jpg',
            mediaQuery: '(max-width: 1200px)'
          },
          {
            src: '/images/home/banners/category-new-in-320_432.jpg',
            mediaQuery: ''
          }
        ]
      }
    },
    bannerOne: {
      class: 'col-xs-12 col-lg-6 home__banner',
      image: {
        defaultSrc: '/images/home/banners/banner-small-women-now-304_128.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-medium-women-now-656_264.jpg',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/home/banners/banner-medium-women-now-656_264.jpg',
            mediaQuery: ''
          }
        ]
      }
    },
    bannerSecond: {
      class: 'col-xs-12 col-lg-6 home__banner',
      image: {
        defaultSrc: '/images/home/banners/banner-small-men-now-304_128.jpg',
        sources: [
          {
            src: '/images/home/banners/banner-medium-men-now-656_264.jpg',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/home/banners/banner-medium-men-now-656_264.jpg',
            mediaQuery: ''
          }
        ]
      }
    },
    popularProductsHeading: {
      tag: 'h2',
      class: 'home__heading',
      text: 'Popular products'
    },
    newProductsHeading: {
      tag: 'h2',
      class: 'home__heading',
      text: 'New products'
    },
    brandsHeading: {
      tag: 'h2',
      class: 'home__heading',
      text: 'Top brands'
    },
    mainSlider: {
      script: false
    },
    productsSlider: {
      script: false
    },
    productsWithoutCartSlider: {
      script: false
    }
  }
}
