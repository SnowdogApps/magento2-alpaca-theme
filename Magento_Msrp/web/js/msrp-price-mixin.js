define([
  'jquery',
  'underscore',
  'Magento_Catalog/js/product/list/columns/price-box',
  'Magento_Catalog/js/product/addtocart-button',
  'mage/dropdown'
], function ($, _, PriceBox) {
  'use strict';

  return function (targetModule) {
    return targetModule.extend({
      defaults: {
        popupOptions: {
          dialogClass: "popup map-popup-wrapper",
          dialogContentClass: "active",
          autoPosition: true,
        },
      },

      openPopup: function (data, elem, event) {
        var $elem = $(elem);
        var $popup = $elem.find(this.popupSelector);
        var $trigger = $elem.find(this.popupTriggerSelector);

        event.stopPropagation();

        this.popupOptions.position.of = $trigger;
        this.popupOptions.triggerTarget = $trigger;

        $popup.dropdownDialog(this.popupOptions)
          .dropdownDialog('open');
      },
    });
  };
});
