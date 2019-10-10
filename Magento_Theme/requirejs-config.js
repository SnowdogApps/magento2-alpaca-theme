var config = {
  map: {
    "*": {
      "choices"        : "Magento_Theme/js/lib/choices",
      "closestPolyfill": "Magento_Theme/js/lib/closest-polyfill",
      "focusVisible"   : "Magento_Theme/js/lib/focus-visible",
      "lazysizes"      : "Magento_Theme/js/lib/lazysizes",
      "lory"           : "Magento_Theme/js/lib/lory",
      "noUiSlider"     : "Magento_Theme/js/lib/nouislider.min",
      "picturefill"    : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"  : "Magento_Theme/js/lib/svg4everybody",
      "cookieMessage"  : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"   : "Magento_Theme/js/dropdown-list.babel",
      "fileUpload"     : "Magento_Theme/js/file-upload.babel",
      "filters"        : "Magento_Theme/js/filters.babel",
      "linksWrapper"   : "Magento_Theme/js/wrapper-collapsible",
      "marketingBar"   : "Magento_Theme/js/marketing-bar.babel",
      "modal"          : "Magento_Theme/js/modal.babel",
      "select"         : "Magento_Theme/js/select.babel",
      "skipFilters"    : "Magento_Theme/js/skip-filters.babel",
      "skipNav"        : "Magento_Theme/js/skip-nav.babel",
      "slider"         : "Magento_Theme/js/slider.babel",
      "tab"            : "Magento_Theme/js/tab.babel",
      "scrollTop"      : "Magento_Theme/js/scroll-top.babel"
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
