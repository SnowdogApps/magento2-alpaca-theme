define([
  'uiComponent',
  'jquery',
  'underscore',
  'Magento_Ui/js/modal/modal',
  'Amasty_GdprCookie/js/model/cookie',
], function (Component, $, _, modal, cookieModel) {
  'use strict';

  return function (Component) {
    return Component.extend({
      defaults: {
        template: {
          afterRender: function () {},
        },
      },

      initModal: function () {
        var options = {
          type: 'popup',
          responsive: true,
          modalClass: '',
          buttons: [],
        };

        this.isShowModal(true);

        if (this.websiteInteraction == 1) {
          options.clickableOverlay = false;
          options.keyEventHandlers = {
            escapeKey: function () {},
          };

          options.opened = function () {
            $('.modal-header button.action-close').hide();
          };
        }

        this.cookieModal = modal(options, this.element.modal);

        this.cookieModal.element.html($(this.element.container));
        this.cookieModal.openModal().on(
          'modalclosed',
          function () {
            this.cookieModal.element.html('');
            $(window).off('resize', this.resizeFunc);
          }.bind(this)
        );
      },

      saveCookie: function () {
        var disabledFields = $(this.element.field + ':disabled');

        this.closeModal();

        disabledFields.removeAttr('disabled');
        cookieModel()
          .saveCookie()
          .done(
            function () {
              disabledFields.attr('disabled', true);
              cookieModel().triggerSave();
            }.bind(this)
          );
      },

      allowCookies: function () {
        this.closeModal();

        cookieModel()
          .allowAllCookies()
          .done(
            function () {
              cookieModel().triggerAllow();
            }.bind(this)
          );
      }
    });
  };
});
