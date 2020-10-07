var config = {
  map: {
    "*": {
      "aos"              : "Magento_Theme/js/lib/aos",
      "closestPolyfill"  : "Magento_Theme/js/lib/closest-polyfill",
      "focusVisible"     : "Magento_Theme/js/lib/focus-visible",
      "lazysizes"        : "Magento_Theme/js/lib/lazysizes",
      "noUiSlider"       : "Magento_Theme/js/lib/nouislider.min",
      "picturefill"      : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"    : "Magento_Theme/js/lib/svg4everybody",
      "slick"            : "Magento_Theme/js/lib/slick.min",
      "bannerCollapsible": "Magento_Theme/js/banner-collapsible.babel",
      "cookieMessage"    : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"     : "Magento_Theme/js/dropdown-list.babel",
      "fileUpload"       : "Magento_Theme/js/file-upload.babel",
      "marketingBar"     : "Magento_Theme/js/marketing-bar.babel",
      "modal"            : "Magento_Theme/js/modal.babel",
      "select2"          : "Magento_Theme/js/lib/select2",
      "select"           : "Magento_Theme/js/select.babel",
      "scrollTop"        : "Magento_Theme/js/scroll-top.babel",
      "scrollTo"         : "Magento_Theme/js/scroll-to.babel",
      "skipNav"          : "Magento_Theme/js/skip-nav.babel",
      "slider"           : "Magento_Theme/js/slider.babel",
      "tab"              : "Magento_Theme/js/tab.babel",
      "tooltip"          : "Magento_Theme/js/tooltip.babel"
    }
  },
  config: {
    mixins: {
      "mage/gallery/gallery": {
        "Magento_Theme/js/mixins/gallery-mixin": true
      },
      "Magento_Theme/js/view/messages": {
        "Magento_Theme/js/mixins/messages-mixin": true
      },
      "Magento_Ui/js/grid/listing": {
        "Magento_Theme/js/mixins/grid-listing-mixin": true
      }
    }
  },
  shim: {
    "slider": {
      "deps": ["jquery", "slick"]
    },
    "select2":{
      "deps": ["jquery"]
    }
  }
};
