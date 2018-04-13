var config = {
  map: {
    "*": {
      "closestPolyfill"    : "Magento_Theme/js/lib/closest-polyfill",
      "cookieMessage"      : "Magento_Theme/js/cookie-message.babel",
      "dropdownList"       : "Magento_Theme/js/dropdown-list.babel",
      "dropdownListNested" : "Magento_Theme/js/dropdown-list-nested.babel",
      "fileUpload"         : "Magento_Theme/js/file-upload.babel",
      "lazysizes"          : "Magento_Theme/js/lib/lazysizes",
      "picturefill"        : "Magento_Theme/js/lib/picturefill",
      "svg4everybody"      : "Magento_Theme/js/lib/svg4everybody",
      "choices"            : "Magento_Theme/js/lib/choices",
      "linksWrapper"       : "Magento_Theme/js/wrapper-collapsible",
      "lory"               : "Magento_Theme/js/lib/lory",
      "select"             : "Magento_Theme/js/select.babel",
      "slider"             : "Magento_Theme/js/slider.babel",
      "popup"              : "Magento_Theme/js/popup.babel",
      "quickSearch"     : "Magento_Theme/js/quicksearch.babel",
      "tab"                : "Magento_Theme/js/tab.babel"
    }
  },
  shim: {
    "slider": {
      "deps": ["lory"]
    }
  },
  deps: [
    "lory",
    "slider"
  ]
};
