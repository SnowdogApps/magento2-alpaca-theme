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
                this.createTmpl ? this.createTmpl.show() : this.createModal();
                $('#' + this.options.createTmplData.popupWishlistFormId).attr('action', url);
                $(this.options.createTmplData.focusElement).focus();
                this.createAjax = isAjax;
            },
        });

        return $.mage.multipleWishlist;
    };
});
