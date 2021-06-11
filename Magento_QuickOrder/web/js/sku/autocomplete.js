/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'underscore',
    'jquery',
    'mage/template',
    'text!Magento_QuickOrder/templates/dropdown-item.html',
    'jquery-ui-modules/autocomplete'
], function (_, $, mageTemplate, itemTpl) {
    'use strict';

    $.widget('mage.quickorderSkuAutocomplete', $.ui.autocomplete, {
        options: {
            minLength: 3,
            delay: 300,
            sourceUrl: '',

            /** Change */
            change: function () {
                $(this).trigger('change');
            },

            /** Source */
            source: function () {
                this._searchProducts.apply(this, arguments);
            }
        },

        /**
         * Renders item in dropdown list for search results
         *
         * @param {Element} ul - HTML DOM element to add item to
         * @param {Object} item
         * @returns {*|jQuery|HTMLElement}
         * @private
         */
        _renderItem: function (ul, item) {
            this.itemTemplate = $(mageTemplate(itemTpl, {
                data: {
                    labelSku: item.labelSku,
                    labelProductName: item.labelProductName
                }
            }));

            return this.itemTemplate.appendTo(ul);
        },

        /**
         * Search products
         *
         * @param {Object} request
         * @param {Function} response
         * @private
         */
        _searchProducts: function (request, response) {
            $.getJSON(this.options.sourceUrl, {
                q: request.term
            }, response);
        }
    });

    return $.mage.quickorderSkuAutocomplete;
});
