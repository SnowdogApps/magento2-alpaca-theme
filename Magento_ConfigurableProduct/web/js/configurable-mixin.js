define([
  'jquery',
  'underscore',
  'jquery-ui-modules/widget',
], function ($, _) {
  'use strict';

  return function (targetWidget) {
    $.widget('mage.configurable', targetWidget, {
      options: {
        priceWrapperClass: '.price__wrapper',
        priceWrapperHiddenClass: 'opacity-0',
        slyFinalPriceSelector: '.sly-final-price',
        specialPriceClass: 'price__value--special'
      },

      /**
       * Creates widget
       * @private
       */
      _create: function () {
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

        $(this.options.priceWrapperClass).removeClass(this.options.priceWrapperHiddenClass);
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
          $(this.options.slyFinalPriceSelector).addClass(this.options.specialPriceClass);
        }
        else {
          $(this.options.slyOldPriceSelector).hide();
          $(this.options.slyFinalPriceSelector).removeClass(this.options.specialPriceClass);
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
