define([
  'jquery',
  'underscore',
  'mage/template',
  'mage/translate',
  'priceUtils',
  'priceBox',
  'jquery-ui-modules/widget',
  'jquery/jquery.parsequery',
  'fotoramaVideoEvents',
], function ($, _, mageTemplate, $t, priceUtils) {
  'use strict';

  return function (targetWidget) {
    $.widget('mage.configurable', targetWidget, {
      options: {},

      /**
       * Creates widget
       * @private
       */
      _create: function () {
        console.log('testing')
        // Initial setting of various option values
        this._initializeOptions();

        // Override defaults with URL query parameters and/or inputs values
        this._overrideDefaults();

        // Change events to check select reloads
        this._setupChangeEvents();

        // Fill state
        this._fillState();

        // Setup child and prev/next settings
        this._setChildSettings();

        // Setup/configure values to inputs
        this._configureForValues();

        $(this.element).trigger('configurable.initialized');
      },

      /**
       * Show or hide regular price block
       *
       * @param {*} optionId
       * @private
       */
      _displayRegularPriceBlock: function (optionId) {
        var shouldBeShown = true;

        _.each(this.options.settings, function (element) {
          if (element.value === '') {
            shouldBeShown = false;
          }
        });

        if (
          shouldBeShown &&
          this.options.spConfig.optionPrices[optionId].oldPrice.amount !==
            this.options.spConfig.optionPrices[optionId].finalPrice.amount
        ) {
          $(this.options.slyOldPriceSelector).show();
        }
        else {
          $(this.options.slyOldPriceSelector).hide();
        }

        $(document).trigger('updateMsrpPriceBlock', [
          optionId,
          this.options.spConfig.optionPrices,
        ]);
      },
    });

    return $.mage.configurable;
  }
});
