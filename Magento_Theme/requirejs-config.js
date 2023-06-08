/* eslint-disable no-unused-vars */
var config = {
  map: {
    '*': {
      // Libs
      'aos': 'Magento_Theme/js/lib/aos.min',
      'focusVisible': 'Magento_Theme/js/lib/focus-visible.min',
      'lazysizes': 'Magento_Theme/js/lib/lazysizes.min',
      'select2': 'Magento_Theme/js/lib/select2.full.min',
      'slick': 'Magento_Theme/js/lib/slick.min',
      'noUiSlider': 'Magento_Theme/js/lib/nouislider.min',

      // Modules
      'bannerCollapsible': 'Magento_Theme/js/banner-collapsible.babel',
      'cookieMessage': 'Magento_Theme/js/cookie-message.babel',
      'dropdownList': 'Magento_Theme/js/dropdown-list.babel',
      'fileUpload': 'Magento_Theme/js/file-upload.babel',
      'marketingBar': 'Magento_Theme/js/marketing-bar.babel',
      'modal': 'Magento_Theme/js/modal.babel',
      'select': 'Magento_Theme/js/select.babel',
      'scrollTop': 'Magento_Theme/js/scroll-top.babel',
      'scrollTo': 'Magento_Theme/js/scroll-to.babel',
      'skipNav': 'Magento_Theme/js/skip-nav.babel',
      'slider': 'Magento_Theme/js/slider.babel',
      'tab': 'Magento_Theme/js/tab.babel',
      'tooltip': 'Magento_Theme/js/tooltip.babel',
      'cookieModal': 'Magento_Theme/js/cookie-modal.babel',
      'cookieBar': 'Magento_Theme/js/cookie-bar.babel'
    }
  },
  config: {
    mixins: {
      'mage/gallery/gallery': {
        'Magento_Theme/js/mixins/gallery-mixin': true
      },
      'Magento_Theme/js/view/messages': {
        'Magento_Theme/js/mixins/messages-mixin': true
      },
      'Magento_Ui/js/grid/listing': {
        'Magento_Theme/js/mixins/grid-listing-mixin': true
      },
      'mage/loader': {
        'Magento_Theme/js/mixins/loader-mixin': true
      }
    }
  },
  shim: {
    'select2': {
      'deps': ['jquery']
    }
  }
};
