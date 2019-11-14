var config = {
  map: {
    "*": {
      "closestPolyfill": "Magento_Theme/js/lib/closest-polyfill",
      "focusVisible"   : "Magento_Theme/js/lib/focus-visible",
      "lazysizes"      : "Magento_Theme/js/lib/lazysizes",
      "noUiSlider"     : "Magento_Theme/js/lib/nouislider.min",
      "picturefill"    : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"  : "Magento_Theme/js/lib/svg4everybody",
      "choices"        : "Magento_Theme/js/lib/choices",
      "lory"           : "Magento_Theme/js/lib/lory",
      "cookieMessage"  : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"   : "Magento_Theme/js/dropdown-list.babel",
      "marketingBar"   : "Magento_Theme/js/marketing-bar.babel",
      "modal"          : "Magento_Theme/js/modal.babel",
      "scrollTop"      : "Magento_Theme/js/scroll-top.babel",
      "skipNav"        : "Magento_Theme/js/skip-nav.babel",
      "select"         : "Magento_Theme/js/select.babel",
      "slider"         : "Magento_Theme/js/slider.babel"
    }
  },
  shim: {
    "slider": {
      "deps": ["lory"]
    }
  },
  deps: [
    "lory"
  ]
};
