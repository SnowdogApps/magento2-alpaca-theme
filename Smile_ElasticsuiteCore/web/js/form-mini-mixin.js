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
        console.log((this.options))
        return $('<div class="quicksearch__content"></div>');
      },

      _getSectionHeader: function(type, data) {
        var title = '';
        var product__header = $('<div class="quicksearch__list quicksearch__list--column"></div>');
        var sidebar__header = $('<div class="quicksearch__sidebar-column"></div>');

        if (type !== undefined && type !== 'product') {
          title = this._getSectionTitle(type, data);
          sidebar__header.append(title);
          return sidebar__header
        }

        return product__header;
      },

      _initTitleRenderer: function() {
        this.titleRenderers = {};
        for (var typeIdentifier in this.options.templates) {
          if (typeIdentifier !== 'product' && this.options.templates[typeIdentifier]['titleRenderer']) {
            require([this.options.templates[typeIdentifier]['titleRenderer']], function (renderer) {
              this.component.titleRenderers[this.type] = renderer;
            }.bind({component: this, type: typeIdentifier}));
          }
        }
      },

      _getSectionTitle: function(type, data) {
        var title = '';

        if (this.titleRenderers && this.titleRenderers[type]) {
          title = $('<h3 class="quicksearch__sidebar-title title-' + type + '">' + this.titleRenderers[type].render(data) + '</h3>');
        } else if (this.options.templates && this.options.templates[type].title) {
          title = $('<h3 class="quicksearch__sidebar-title title-' + type + '">' + this.options.templates[type].title + '</h3>');
        }

        return title;
      },

    });
    return $.snowdog.quickSearch;
  }
})
