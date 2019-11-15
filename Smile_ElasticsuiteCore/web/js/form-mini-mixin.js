define([
  'ko',
  'jquery',
  'underscore',
  'mage/template',
  'Magento_Catalog/js/price-utils',
  'Magento_Ui/js/lib/knockout/template/loader',
  'jquery/ui',
  'mage/translate',
  'Magento_Search/js/form-mini'
], function (ko, $, _, mageTemplate, priceUtil, templateLoader) {
  'use strict';

  return function (widget) {
    $.widget('snowdog.quickSearch', widget, {

      /**
       * Return the wrapper for all autocomplete results
       *
       * @returns {*|jQuery|HTMLElement}
       *
       * @private
       */
      _getResultWrapper: function () {
        return $('<div class="quicksearch__results"></div>');
      },

      _getSectionHeader: function(type, data) {
        var title = '';
        var header = $('<div class="quicksearch__results-heading margin-bottom-0"></div>');

        if (type !== undefined) {
          title = this._getSectionTitle(type, data);
          header.append(title);
        }

        return header;
      },

    });
    return $.snowdog.quickSearch;
  }
})
