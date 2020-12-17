var config = {
  map: {
    '*': {
      wishlistItem: 'Magento_Wishlist/js/wishlist-item.babel',
    }
  },
  config: {
    mixins: {
      "Magento_Wishlist/js/add-to-wishlist": {
        "Magento_Wishlist/js/add-to-wishlist-mixin": true
      }
    }
  }
};
