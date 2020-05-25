define(['jquery'], function ($) {
    'use strict';

    var modalWidgetMixin = {
        options: {
            closeIconSvgUrl: window.closeIcon
        }
    };

    return function (targetWidget) {
        $.widget('mage.modal', targetWidget, modalWidgetMixin);

        return $.mage.modal;
    };
});
