define([
    'jquery',
], function ($) {
    'use strict';
    return function (widget) {
        $.widget('mage.promptEditWithList', widget, {
            getNoticeTemplate: function () {
                var template = $('<div class="custom classes">' +
                    '<input id="wishlist-public" type="checkbox" name="' + this.options.isPublicFieldAttributeName + '">' +
                    '<label for="wishlist-public" class="label">' +
                    '<span>' + this.options.isPublicFieldLabel + '</span>' +
                    '</label>' +
                    '<input name="form_key" type="hidden" value="' + this.options.hiddenFieldValue + '">' +
                    '</div>');

                if (this.options.isPublicFieldChecked) {
                    template.find('input[type = checkbox]').attr('checked', 'checked');
                }

                return template;
            }
        });

        return $.mage.promptEditWithList;
    };
});
