define(['jquery'], function ($) {
    'use strict';

    return function (widget) {
        $.widget('mage.multipleWishlist', widget, {

            /**
             * Show create wishlist popup block
             * @private
             * @param {String} url - create wishlist url
             * @param {Boolean} isAjax - if need to use ajax to call create wishlist url
             */
            _showCreateWishlist: function (url, isAjax) {
                if ($('#' + this.options.createTmplData.popupWishlistBlockId).length > 0) {
                    this.createTmpl.show()
                } else {
                    this.createModal();
                }
                $('#' + this.options.createTmplData.popupWishlistFormId).attr('action', url);
                $(this.options.createTmplData.focusElement).focus();
                this.createAjax = isAjax;
            },

            /**
             * Edit wishlist
             * @private
             * @param {jQuery.Event} e - Edit wishlist button
             */
            _createEditWishlistModal: function (e)  {
                var json = $(e.currentTarget).data('wishlist-edit'),
                    self = this;

                this.options.editTmplData.url = json.url;
                this.options.editTmplData.name = json.name;
                this.options.editTmplData.isPublic = json.isPublic;

                $.mage.promptEditWithList({
                    title: json.title,
                    value: this.options.editTmplData.name,
                    label: $.mage.__('Wish List Name'),
                    isPublicFieldLabel: $.mage.__('Public Wish List'),
                    isPublicFieldAttributeName: 'visibility',
                    isPublicFieldChecked: this.options.editTmplData.isPublic,
                    hiddenFieldValue: json.formKey,
                    iconCheckboxUnchecked: json.iconCheckboxUnchecked,
                    iconCheckboxChecked: json.iconCheckboxChecked,
                    attributesField: {
                        name: 'name',
                        'data-validate': '{required:true}',
                        maxlength: '255'
                    },
                    attributesForm: {
                        id: this.options.editTmplData.popupWishlistFormId,
                        action: this.options.editTmplData.url,
                        novalidate: 'novalidate'
                    },
                    buttons: [{
                        text: $.mage.__('Save'),

                        /**
                         * Click action.
                         */
                        click: function () {
                            $.ajax({
                                url: self.options.editTmplData.url,
                                data: $('#' + self.options.editTmplData.popupWishlistFormId).serialize(),
                                dataType: 'json',
                                method: 'post'
                            }).done(function (data) {
                                window.location.href = data.redirect;
                            });
                        }
                    }, {
                        text: $.mage.__('Close'),

                        /**
                         * Click action.
                         */
                        click: function () {
                            this.closeModal();
                            this.modal.one(this.options.transitionEvent, function () {
                                this._remove();
                            }.bind(this, arguments));
                        }
                    }]
                });

                return false;
            }
        });

        return $.mage.multipleWishlist;
    };
});
