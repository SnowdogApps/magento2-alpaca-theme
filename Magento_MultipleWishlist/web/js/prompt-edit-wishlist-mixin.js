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
                var template = $('<div class="checkbox">' +
                    '<input ' +
                        'class="checkbox__field" ' +
                        'id="wishlist-public" ' +
                        'type="checkbox" ' +
                        'name="' + this.options.isPublicFieldAttributeName +
                    '">' +
                    '<svg class="checkbox__icon checkbox__icon--checked" role="presentation" focusable="false">' +
                        '<use xlink:href="' +  this.options.iconCheckboxChecked + '"></use>' +
                    '</svg>' +
                    '<svg class="checkbox__icon checkbox__icon--unchecked" role="presentation" focusable="false">' +
                        '<use xlink:href="' +  this.options.iconCheckboxUnchecked + '"></use>' +
                    '</svg>' +
                    '<label ' +
                        'for="wishlist-public" ' +
                        'class="checkbox__label"' +
                    '>' +
                        this.options.isPublicFieldLabel +
                    '</label>' +
                    '<input ' +
                        'name="form_key" ' +
                        'type="hidden" ' +
                        'value="' + this.options.hiddenFieldValue +
                    '">' +
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
