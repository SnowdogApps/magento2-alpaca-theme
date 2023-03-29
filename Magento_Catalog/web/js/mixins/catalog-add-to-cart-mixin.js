define(['jquery', 'mage/translate'], function($, $t) {
  'use strict';

  return function(parentWidget) {
    $.widget('mage.catalogAddToCart', parentWidget, {
      disableAddToCartButton: function(form) {
        var addToCartButtonTextWhileAdding =
            this.options.addToCartButtonTextWhileAdding || $t('Adding...');
        var addToCartButton = $(form).find(this.options.addToCartButtonSelector);

        addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
        addToCartButton.find('span').text(addToCartButtonTextWhileAdding);
        addToCartButton.prop('title', addToCartButtonTextWhileAdding);
        addToCartButton.prop('disabled', true);
      },

      enableAddToCartButton: function(form) {
        var addToCartButtonTextAdded =
            this.options.addToCartButtonTextAdded || $t('Added');
        var self = this;
        var addToCartButton = $(form).find(this.options.addToCartButtonSelector);

        addToCartButton.find('span').text(addToCartButtonTextAdded);
        addToCartButton.prop('title', addToCartButtonTextAdded);

        setTimeout(function() {
          var addToCartButtonTextDefault =
            self.options.addToCartButtonTextDefault || $t('Add to Cart');

          addToCartButton.removeClass(
            self.options.addToCartButtonDisabledClass
          );
          addToCartButton.prop('disabled', false);
          addToCartButton.find('span').text(addToCartButtonTextDefault);
          addToCartButton.prop('title', addToCartButtonTextDefault);
        }, 1000);
      }
    });

    return $.mage.catalogAddToCart;
  };
});
