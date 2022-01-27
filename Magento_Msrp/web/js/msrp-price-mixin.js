define([
  'jquery'
], function ($) {
  'use strict';

  return function (targetModule) {
    return targetModule.extend({
      defaults: {
        popupOptions: {
          dialogClass: 'popup map-popup-wrapper modal modal--active msrp__modal',
          dialogContentClass: 'active modal__container msrp__modal-container',
          autoPosition: false,
          cancelButton: '.msrp__cancel-button',
          buttons: []
        }
      },

      openPopup: function (data, elem, event) {
        var $elem = $(elem);
        var $popup = $elem.find(this.popupSelector);
        var $trigger = $elem.find(this.popupTriggerSelector);

        event.stopPropagation();

        this.popupOptions.position.of = $trigger;
        this.popupOptions.triggerTarget = $trigger;

        $popup.dropdownDialog(this.popupOptions)
          .dropdownDialog('open');

        if (this.popupOptions.cancelButton) {
          $popup.find(this.popupOptions.cancelButton).on('click', function () {
            $popup.dropdownDialog('close');
          });
        }
      },
    });
  };
});
