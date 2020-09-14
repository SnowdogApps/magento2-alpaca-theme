define(['jquery'], function ($) {
  'use strict';
  var widgetMixin = {
    options: {
      cancelButton: '.msrp__cancel-button',
    },

    popUpOptions: {
      dialogContentClass: 'modal__container msrp__modal-container',
      autoPosition: false,
      dialogClass: 'modal modal--active msrp__modal',
    },

    initMsrpPopup: function () {
      var popupDOM = $(this.options.popUpAttr)[0],
        $msrpPopup = $(popupDOM.innerHTML.trim()),
        self = this;

      $msrpPopup.find(this.options.productIdInput).val(this.options.productId);
      $('body').append($msrpPopup);
      $msrpPopup.trigger('contentUpdated');

      $msrpPopup
        .find('.msrp__tocart-button')
        .on('click', this.handleMsrpAddToCart.bind(this))
        .filter(this.options.popupCartButtonId)
        .text($(this.options.addToCartButton).text());

      $msrpPopup
        .find(this.options.paypalCheckoutButons)
        .on('click', this.handleMsrpPaypalCheckout.bind(this));

      $(this.options.popupId).on('click', this.openPopup.bind(this));

      this.$popup = $msrpPopup;

      if (this.options.cancelButton) {
        this.$popup.find(this.options.cancelButton).on('click', function () {
          self.closePopup(self.$popup);
        });
      }
    }
  };

  return function (targetWidget) {
    $.widget('mage.addToCart', targetWidget, widgetMixin);

    return $.mage.addToCart;
  };
});
