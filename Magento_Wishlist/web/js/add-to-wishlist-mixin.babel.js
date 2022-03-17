define([
  'jquery',
  'jquery-ui-modules/widget'
], function ($) {
  'use strict';

  return function (widget) {
    $.widget('mage.addToWishlist', widget, {
      options: {
        // CHANGED: bundle selector
        bundleInfo: 'div.bundle-option [name^=bundle_option]',
        configurableInfo: '.super-attribute-select',
        groupedInfo: '#super-product-table input',
        downloadableInfo: '#downloadable-links-list input',
        customOptionsInfo: '.product-custom-option',
        qtyInfo: '#qty',
        actionElement: '[data-action="add-to-wishlist"]',
        productListWrapper: '.product-item-info',
        productPageWrapper: '.product-info-main'
      },

      /**
       * @param {jQuery.Event} event
       * @private
       */
      _updateWishlistData: function (event) {
        var dataToAdd = {};
        var isFileUploaded = false;
        var handleObjSelector = null;
        var self = this;
        var updateWishlistBtn = $('.product-view__addtowishlist--update');

        if (event.handleObj.selector == this.options.qtyInfo) { //eslint-disable-line eqeqeq
          this._updateAddToWishlistButton({}, event);
          event.stopPropagation();

          return;
        }

        handleObjSelector = $(event.currentTarget).closest('form').find(event.handleObj.selector);

        handleObjSelector.each(function (index, element) {
          if ($(element).is('input[type=text]') ||
              $(element).is('input[type=email]') ||
              $(element).is('input[type=number]') ||
              $(element).is('input[type=hidden]') ||
              $(element).is('input[type=checkbox]:checked') ||
              $(element).is('input[type=radio]:checked') ||
              $(element).is('textarea') ||
              $('#' + element.id + ' option:selected').length
          ) {
            // ADDED: for configurable product edit wishlist PDP,
            // don't update dataToAdd if element doesn't belong to the product
            if ($(element).hasClass('super-attribute-select') && updateWishlistBtn.length) {
              var btnProduct = updateWishlistBtn.data('post').data.product;
              var elementProduct = $(element).data('product')?.toString();

              if (elementProduct && btnProduct !== elementProduct) {
                return;
              }
            }

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
        this._updateAddToWishlistButton(dataToAdd, event);
        event.stopPropagation();
      },
    });

    return $.mage.addToWishlist;
  }
});
