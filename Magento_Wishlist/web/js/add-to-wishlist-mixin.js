define([
  'jquery',
  'jquery-ui-modules/widget'
], function ($) {
  'use strict';

  return function (widget) {
    $.widget('mage.addToWishlist', widget, {
      options: {
        bundleInfo: 'div.control [name^=bundle_option]',
        configurableInfo: '.super-attribute-select',
        groupedInfo: '#super-product-table input',
        downloadableInfo: '#downloadable-links-list input',
        customOptionsInfo: '.product-custom-option',
        qtyInfo: '#qty'
      },

      /**
       * @param {jQuery.Event} event
       * @private
       */
      _updateWishlistData: function (event) {
        var dataToAdd = {},
            isFileUploaded = false,
            self = this;

        if (event.handleObj.selector == this.options.qtyInfo) { //eslint-disable-line eqeqeq
          this._updateAddToWishlistButton({});
          event.stopPropagation();

          return;
        }
        $(event.handleObj.selector).each(function (index, element) {
          if ($(element).is('input[type=text]') ||
              $(element).is('input[type=email]') ||
              $(element).is('input[type=number]') ||
              $(element).is('input[type=hidden]') ||
              $(element).is('input[type=checkbox]:checked') ||
              $(element).is('input[type=radio]:checked') ||
              $(element).is('textarea') ||
              $('#' + element.id + ' option:selected').length
          ) {
            if ($(element).data('selector') || $(element).attr('name')) {
              dataToAdd = $.extend({}, dataToAdd, self._getElementData(element));
            }

            return;
          }

          if ($(element).is('input[type=file]') && $(element).val()) {
            isFileUploaded = true;
          }
        });

        if (isFileUploaded) {
          this.bindFormSubmit();
        }
        this._updateAddToWishlistButton(dataToAdd);
        event.stopPropagation();
      },
    });

    return $.mage.addToWishlist;
  }
});
