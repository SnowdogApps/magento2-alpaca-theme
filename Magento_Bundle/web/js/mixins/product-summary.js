define([
  'jquery',
  'mage/template',
  'jquery-ui-modules/widget'
], function ($, mageTemplate) {
  'use strict';

  return function (targetWidget) {
    $.widget('mage.productSummary', targetWidget, {
      /**
       * @param {String} key
       * @param {String} row
       * @private
       */
      _renderOption: function (key, row) {
        var template;

        if (row && row.length > 0 && row[0] !== null) {
          template = $(document)
            .find(this.options.templates.summaryBlock)
            .html();
          template = mageTemplate($.trim(template), {
            data: {
              _label_: this.cache.currentElement.options[key].title
            }
          });

          this.cache.currentKey = key;
          this.cache.summaryContainer = $(template);
          this.element.append(this.cache.summaryContainer);

          $.each(row, this._renderOptionRow.bind(this));
          this.cache.currentElementCount += row.length;

          //Reset Cache
          this.cache.currentKey = null;
        }
      },
      /**
       * @param {String} key
       * @param {String} optionIndex
       * @private
       */
      _renderOptionRow: function (key, optionIndex) {
        var template;

        template = $(document)
          .find(this.options.templates.optionBlock)
          .html();
        template = mageTemplate($.trim(template), {
          data: {
            _quantity_: this.cache.currentElement.options[this.cache.currentKey]
              .selections[optionIndex].qty,
            _label_: this.cache.currentElement.options[this.cache.currentKey]
              .selections[optionIndex].name
          }
        });
        this.cache.summaryContainer
          .find(this.options.optionSelector)
          .append(template);
      }
    });

    return $.mage.productSummary;
  };
});
