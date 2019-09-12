module.exports = {
  context: {
    src: 'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=',
    dataSrc: '/images/banner/banner-480_480.png',
    alt: 'image alt text'
  },
  variants: [
    {
      name: 'picture',
      context: {
        defaultSrc: '/images/banner/banner-480_480.png',
        sources: [
          {
            src: '/images/banner/banner-480_480.png',
            mediaQuery: '(max-width: 480px)'
          },
          {
            src: '/images/banner/banner-768_402.png',
            mediaQuery: '(max-width: 768px)'
          },
          {
            src: '/images/banner/banner-992_254.png',
            mediaQuery: '(max-width: 992px)'
          },
          {
            src: '/images/banner/banner-1170_300.png',
            mediaQuery: ''
          }
        ],
        alt: 'image alt text'
      }
    }
  ]
};
