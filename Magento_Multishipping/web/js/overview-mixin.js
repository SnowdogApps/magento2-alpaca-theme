define([
    'jquery'
], function ($) {
    'use strict';
  
    return function (widget) {
        $.widget('mage.orderOverview', widget, {
            options: {
                agreements: '.checkout-review'
            },
            /**
             * Verify that all agreements and terms/conditions are checked. Show the Ajax loader. Disable
             * the submit button (i.e. Place Order).
             * @return {Boolean}
             * @private
             */
            _showLoader: function () {
                if ($(this.options.agreements).find('.checkbox.required input[type="checkbox"]:not(:checked)').length > 0) {
                    return false;
                }
                this.element.find(this.options.pleaseWaitLoader).show().end()
                    .find(this.options.placeOrderSubmit).prop('disabled', true).css('opacity', this.options.opacity);

                return true;
            }
        });
    
        return $.mage.orderOverview;
    }
});
