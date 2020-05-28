define([
    'jquery',
    'Magento_Ui/js/modal/prompt'
], function ($) {
    'use strict';

    return function (originalWidget) {
        $.widget('mage.promptEditWithList', $['mage']['prompt'], {
            options: {
                label: '',
                isPublicFieldLabel: '',
                isPublicFieldAttributeName: '',
                isPublicFieldChecked: false,
                hiddenFieldValue: ''
            },

            /**
             * @private
             */
            _create: function () {
                this._super();
                this.modal.find(this.options.modalContent).find('fieldset').append(this.getNoticeTemplate());
            },

            /**
             * @return {*|jQuery|HTMLElement}
             */
            getNoticeTemplate: function () {
                var template = $('<div class="field choice">' +
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

        return originalWidget;
    };
});
