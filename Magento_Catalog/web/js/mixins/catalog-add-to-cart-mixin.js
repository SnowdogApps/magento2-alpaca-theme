define(["jquery", "mage/translate"], function($, $t) {
  "use strict";

  return function(parentWidget) {
    $.widget("mage.catalogAddToCart", parentWidget, {
      disableAddToCartButton: function(form) {
        var addToCartButtonTextWhileAdding =
            this.options.addToCartButtonTextWhileAdding || $t("Adding..."),
          addToCartButton = $(form).find(this.options.addToCartButtonSelector);

        addToCartButton.addClass(this.options.addToCartButtonDisabledClass);
        addToCartButton.find("span").text(addToCartButtonTextWhileAdding);
        addToCartButton.attr("title", addToCartButtonTextWhileAdding);
        addToCartButton.attr("disabled", true);
      },

      enableAddToCartButton: function(form) {
        var addToCartButtonTextAdded =
            this.options.addToCartButtonTextAdded || $t("Added"),
          self = this,
          addToCartButton = $(form).find(this.options.addToCartButtonSelector);

        addToCartButton.find("span").text(addToCartButtonTextAdded);
        addToCartButton.attr("title", addToCartButtonTextAdded);

        setTimeout(function() {
          var addToCartButtonTextDefault =
            self.options.addToCartButtonTextDefault || $t("Add to Cart");

          addToCartButton.removeClass(
            self.options.addToCartButtonDisabledClass
          );
          addToCartButton.attr("disabled", false);
          addToCartButton.find("span").text(addToCartButtonTextDefault);
          addToCartButton.attr("title", addToCartButtonTextDefault);
        }, 1000);
      }
    });

    return $.mage.catalogAddToCart;
  };
});
