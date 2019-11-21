var config = {
  map: {
    "*": {
      "aos"            : "Magento_Theme/js/lib/aos",
      "closestPolyfill": "Magento_Theme/js/lib/closest-polyfill",
      "focusVisible"   : "Magento_Theme/js/lib/focus-visible",
      "lazysizes"      : "Magento_Theme/js/lib/lazysizes",
      "noUiSlider"     : "Magento_Theme/js/lib/nouislider.min",
      "picturefill"    : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"  : "Magento_Theme/js/lib/svg4everybody",
      "lory"           : "Magento_Theme/js/lib/lory",
      "cookieMessage"  : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"   : "Magento_Theme/js/dropdown-list.babel",
      "marketingBar"   : "Magento_Theme/js/marketing-bar.babel",
      "modal"          : "Magento_Theme/js/modal.babel",
      "select2"        : "Magento_Theme/js/lib/select2",
      "select"         : "Magento_Theme/js/select.babel",
      "scrollTop"      : "Magento_Theme/js/scroll-top.babel",
      "skipNav"        : "Magento_Theme/js/skip-nav.babel",
      "slider"         : "Magento_Theme/js/slider.babel",
      "tab"            : "Magento_Theme/js/tab.babel"
    }
  },
  config: {
    mixins: {
      "Magento_Theme/js/view/messages": {
        "Magento_Theme/js/mixins/messages-mixin": true
      }
    }
  },
  shim: {
    "slider": {
      "deps": ["lory"]
    },
    "select2":{
      "deps": ["jquery"]
    }
  },
  deps: [
    "lory"
  ]
};
