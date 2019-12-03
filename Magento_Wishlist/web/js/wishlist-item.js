define([
  'jquery',
  'Magento_Customer/js/customer-data',
  'mage/cookies',
  'domReady'
], function ($, customerData) {
  'use strict';

  return function(config, elem) {
    const button = $(elem),
      wishlist = customerData.get('wishlist'),
      items = wishlist().items,
      productId = config.productId;

    button.on('click', function() {
      const url = config.addToParams.action,
        formKey = $.mage.cookies.get('form_key'),
        data = {
          action: 'add-to-wishlist',
          form_key: formKey,
          product: config.addToParams.data.product,
          uenc: config.addToParams.data.uenc
        };

      $.post(url, data).done(function() {
        const addToMessage = $.cookieStorage.get('mage-messages');
        // add class to mark that product is added to wishlist
        if (addToMessage[0].type === 'success') {
          button.addClass(config.class);
        }
        // delay is needed, because M2 reload customer data and msg dissapear after a second
        setTimeout(function() {
          customerData.set('messages', {
            messages: addToMessage
          });
          // remove msg from cookie to not show after reload the page
          $.cookieStorage.set('mage-messages', '');
        }, 1000);
      });

    });

    if (items) {
      items.forEach(item => {
        if (item.product_id === productId) {
          button.addClass(config.class);
        }
      });
    }
  };
});
