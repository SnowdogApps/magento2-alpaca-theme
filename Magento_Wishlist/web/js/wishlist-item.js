define([
  'jquery',
  'Magento_Customer/js/customer-data',
  'domReady'
], function ($, customerData) {
  'use strict';

  return function(config, elem) {
    const button = $(elem),
      wishlist = customerData.get('wishlist'),
      items = wishlist().items,
      productId = config.productId;

    if (items) {
      items.forEach(item => {
        if (item.product_id === productId) {
          button.addClass(config.class);
        }
      });
    }
  };
});
