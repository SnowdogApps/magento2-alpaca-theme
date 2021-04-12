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
      },
      "Magento_Theme/js/view/breadcrumbs": {
        "Magento_Catalog/js/mixins/breadcrumbs-mixin": true
      },
      "Magento_Catalog/js/product/list/columns/image": {
        "Magento_Catalog/js/mixins/image-mixin.babel": true
      }
    }
  }
};
