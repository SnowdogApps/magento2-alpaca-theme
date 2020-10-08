define([
  'jquery',
  'Magento_Customer/js/customer-data',
  'mage/url',
  'mage/cookies',
  'domReady'
], function ($, customerData, url) {
  'use strict';

  return function(config, elem) {
    const button                 = $(elem),
      customer                   = customerData.get('customer'),
      wishlist                   = customerData.get('wishlist'),
      items                      = wishlist().items,
      productId                  = config.productId,
      loginUrl                   = url.build('customer/account'),
      pdpButtonClass             = 'product-view__button--wishlist',
      swatchContainerClassPrefix = '.swatch-opt',
      swatchOptionContainerClass = '.swatch',
      quantityInputClass         = '.quantity-update__input';

    function moreWishlistButton() {
      if (button.hasClass(pdpButtonClass)) {
        // for PDP - if is on product view,
        // add class to all add to wishlist buttons
        $('.' + pdpButtonClass).addClass(config.class);
      }
    }

    button.on('click', function() {

      const url = config.addToParams.action,
        formKey = $.mage.cookies.get('form_key'),
        product = config.addToParams.data.product,
        swatchContainer = document.querySelector(`${swatchContainerClassPrefix}-${product}`),
        data = {
          action: 'add-to-wishlist',
          form_key: formKey,
          product: product,
          uenc: config.addToParams.data.uenc
        };

      if (swatchContainer) {
        const swatchOptionContainerArray = swatchContainer.querySelectorAll(swatchOptionContainerClass);

        swatchOptionContainerArray.forEach(swatchOptionContainer => {
          if (swatchOptionContainer.hasAttribute('option-selected')) {
            const key = `super_attribute[${swatchOptionContainer.getAttribute('attribute-id')}]`;
            const value = swatchOptionContainer.getAttribute('option-selected');
            data[key] = value;
          }
        });
      }

      if (button.hasClass(pdpButtonClass)) {
        const quantityInput = document.querySelector(quantityInputClass);
        data['qty'] = quantityInput.value;
      }

      $.post(url, data).done(function() {
        if (customer().firstname) {
          const addToMessage = $.cookieStorage.get('mage-messages');
          // add class to mark that product is added to wishlist
          if (addToMessage[0].type === 'success') {
            button.addClass(config.class);
            moreWishlistButton();
            // delay is needed, because M2 reload customer data
            // and msg dissapear after a second
            setTimeout(function() {
              customerData.set('messages', {
                messages: addToMessage
              });
              // remove msg from cookie to not show after reload the page
              $.cookieStorage.set('mage-messages', '');
            }, 1500);
          }
        }
        else {
          window.location.href = loginUrl;
        }
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
