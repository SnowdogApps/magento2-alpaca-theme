var config = {
  map: {
    "*": {
      "choices"        : "Magento_Theme/js/lib/choices",
      "closestPolyfill": "Magento_Theme/js/lib/closest-polyfill",
      "focusVisible"   : "Magento_Theme/js/lib/focus-visible",
      "lazysizes"      : "Magento_Theme/js/lib/lazysizes",
      "lory"           : "Magento_Theme/js/lib/lory",
      "picturefill"    : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"  : "Magento_Theme/js/lib/svg4everybody",
      "cookieMessage"  : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"   : "Magento_Theme/js/dropdown-list.babel",
      "marketingBar"   : "Magento_Theme/js/marketing-bar.babel",
      "modal"          : "Magento_Theme/js/modal.babel",
      "select"         : "Magento_Theme/js/select.babel",
      "scrollTop"      : "Magento_Theme/js/scroll-top.babel",
      "skipNav"        : "Magento_Theme/js/skip-nav.babel",
      "slider"         : "Magento_Theme/js/slider.babel",
      "tab"            : "Magento_Theme/js/tab.babel"
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
