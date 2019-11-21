define([
  'jquery',
  'uiComponent',
  'Magento_Customer/js/customer-data',
  'underscore',
  'jquery/jquery-storageapi'
], function ($, Component, customerData, _) {
  'use strict';
  console.log('siedem');
  return function (targetModule) {
    targetModule.defaults.isHidden = false;
    targetModule.defaults.listens.isHidden = 'onHiddenChange';
    targetModule.defaults.selector = '.page.messages .messages';

    return targetModule.extend({
      initialize: function () {
        let original = this._super();
        console.log('dupcia blada', targetModule.defaults);
        return original;
      },
      initObservable: function () {
        this._super()
            .observe('isHidden');

        return this;
      },

      isVisible: function () {
        return this.isHidden(!_.isEmpty(this.messages().messages) || !_.isEmpty(this.cookieMessages));
      },

      removeAll: function () {
        $(this.selector).find('.message').removeClass('show');
      },

      onHiddenChange: function (isHidden) {
        let self = this;
        if (isHidden) {
          setTimeout(function () {
            $(self.selector).find('.message').removeClass('show');
            self.isHidden('false');
          }, 5000);
        }
      }
    });
  };
});
