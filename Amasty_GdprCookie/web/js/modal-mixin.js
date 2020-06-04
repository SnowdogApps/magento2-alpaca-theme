define([
    'uiComponent',
    'jquery',
    'underscore',
    'Magento_Ui/js/modal/modal'
], function (Component, $, _, modal) {
    'use strict';

    return function (Component) {
        return Component.extend({
            defaults: {
                template: {
                    afterRender: function () {
                    }
                }
            },

            initModal: function () {
                var options = {
                    type: 'popup',
                    responsive: true,
                    modalClass: '',
                    buttons: []
                };

                this.isShowModal(true);

                if (this.websiteInteraction == 1) {
                    options.clickableOverlay = false;
                    options.keyEventHandlers = {
                        escapeKey: function () { }
                    };

                    options.opened = function () {
                        $('.modal-header button.action-close').hide();
                    };
                }

                this.cookieModal = modal(options, this.element.modal);

                this.cookieModal.element.html($(this.element.container));
                this.cookieModal.openModal().on('modalclosed', function () {
                    this.cookieModal.element.html('');
                    $(window).off('resize', this.resizeFunc);
                }.bind(this));
            },
        });
    };
});
