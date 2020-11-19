var config = {
  map: {
    "*": {
      "addToCartMore": "Magento_Catalog/js/add-to-cart-more.babel",
      "addToCartSticky": "Magento_Catalog/js/add-to-cart-sticky.babel",
      "qtyUpdater" : "Magento_Catalog/js/quantity-update.babel",
    }
  },
  config: {
    mixins: {
      "Magento_Catalog/js/catalog-add-to-cart": {
        "Magento_Catalog/js/mixins/catalog-add-to-cart-mixin": true
      }
    }
  }
};
