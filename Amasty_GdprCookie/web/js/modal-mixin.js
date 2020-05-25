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
                    name: 'Amasty_GdprCookie/modal',
                    afterRender: function (node, data) {
                        data.setModalHeight();
                    }
                },
                timeout: null,
                isNotice: null,
                groups: [],
                cookieModal: {},
                websiteInteraction: '',
                settingsLink: '/',
                firstShowProcess: '',
                isShowModal: false,
                element: {
                    modal: '[data-amgdpr-js="modal"]',
                    form: '[data-amcookie-js="form-cookie"]',
                    container: '[data-role="gdpr-cookie-container"]',
                    field: '[data-amcookie-js="field"]',
                    groups: '[data-amcookie-js="groups"]',
                    policy: '[data-amcookie-js="policy"]'
                }
            },
            
            initModal: function () {
                var options = {
                    type: 'popup',
                    responsive: true,
                    modalClass: 'amgdprcookie-modal-container',
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
                this.addResizeEvent();
                this.cookieModal.openModal().on('modalclosed', function () {
                    this.cookieModal.element.html('');
                    $(window).off('resize', this.resizeFunc);
                }.bind(this));
            },
        });
    };
});
