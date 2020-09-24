define([
    'jquery',
    'jquery-ui-modules/widget',
    'Magento_Catalog/js/price-box'
], function ($) {
    'use strict';

  return function (widget) {
    /**
     * Downloadable widget
     */
    $.widget('mage.downloadable', widget, {
        _create: function () {
            var self = this;

            this.element.find(this.options.linkElement).on('change', $.proxy(function () {
                this._reloadPrice();
            }, this));

            this.element.find(this.options.allElements).on('change', function () {
                if (this.checked) {
                    $('label[for="' + this.id + '"]').text($(this).attr('data-checked'));
                    self.element.find(self.options.linkElement + ':not(:checked)').each(function () {
                        $(this).trigger('click');
                    });
                } else {
                    $('[for="' + this.id + '"]').text($(this).attr('data-notchecked'));
                    self.element.find(self.options.linkElement + ':checked').each(function () {
                        $(this).trigger('click');
                    });
                }
            });

            this._reloadPrice();
        },
        reloadAllCheckText: function () {
            var allChecked = true,
                allElementsCheck = $(this.options.allElements),
                allElementsLabel = $('label[for="' + allElementsCheck.attr('id') + '"]');

            this.element.find(this.options.linkElement).each(function () {
                if (!this.checked) {
                    allChecked = false;
                }
            });

            if (allChecked) {
                allElementsLabel.text(allElementsCheck.attr('data-checked'));
                allElementsCheck.prop('checked', true);
            } else {
                allElementsLabel.text(allElementsCheck.attr('data-notchecked'));
                allElementsCheck.prop('checked', false);
            }
        }
    });

    return $.mage.downloadable;
  }
});
