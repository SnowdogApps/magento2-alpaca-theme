define([
  'jquery',
  'mage/translate'
], function ($, $t) {
  'use strict';

  $.widget('snowdog.solrAddToCart', {
    options: {
      processStart: null,
      processStop: null,
      bindSubmit: true,
      minicartSelector: '[data-block="minicart"]',
      messagesSelector: '[data-placeholder="messages"]',
      productStatusSelector: '.stock.available'
    },

    _create: function () {
      if (this.options.bindSubmit) {
        this._bindSubmit();
      }
    },

    _bindSubmit: function () {
      var self = this;

      this.element.on('submit', function (e) {
        e.preventDefault();
        self.submitForm($(this));
      });
    },

    isLoaderEnabled: function () {
      return this.options.processStart && this.options.processStop;
    },

    submitForm: function (form) {
      var self           = this,
          cookieFormKey  = $.cookie('form_key'),
          action         = form.attr('action'),
          currentFormKey = form.find('[name="form_key"]').val();

      if (cookieFormKey !== '' && cookieFormKey !== null) {
        form.find('[name="form_key"]').val(cookieFormKey);
        action = action.replace(currentFormKey, cookieFormKey);
      }

      $(self.options.minicartSelector).trigger('contentLoading');
      self.disableAddToCartButton(form);

      $.ajax({
        url: action,
        data: form.serialize(),
        type: 'post',
        dataType: 'json',

        beforeSend: function () {
          if (self.isLoaderEnabled()) {
            $('body').trigger(self.options.processStart);
          }
        },

        success: function (res) {
          var eventData,
              parameters;

          $(document).trigger('ajax:addToCart', {
            'form': form,
            'response': res
          });

          if (self.isLoaderEnabled()) {
            $('body').trigger(self.options.processStop);
          }

          if (res.backUrl) {
            eventData = {
              'form': form,
              'redirectParameters': []
            };
            // trigger global event, so other modules will be able add parameters to redirect url
            $('body').trigger('catalogCategoryAddToCartRedirect', eventData);

            if (eventData.redirectParameters.length > 0) {
              parameters = res.backUrl.split('#');
              parameters.push(eventData.redirectParameters.join('&'));
              res.backUrl = parameters.join('#');
            }
            window.location = res.backUrl;

            return;
          }

          if (res.messages) {
            $(self.options.messagesSelector).html(res.messages);
          }

          if (res.minicart) {
            $(self.options.minicartSelector).replaceWith(res.minicart);
            $(self.options.minicartSelector).trigger('contentUpdated');
          }

          if (res.product && res.product.statusText) {
            $(self.options.productStatusSelector)
              .removeClass('available')
              .addClass('unavailable')
              .find('span')
              .html(res.product.statusText);
          }
          self.enableAddToCartButton(form);
        }
      });
    },

    disableAddToCartButton: function (form) {
      var addToCartButtonTextWhileAdding = $t('Adding...'),
          addToCartButton                = $(form).find('button[type=submit]');

      addToCartButton.prop('disabled', true);
      addToCartButton.addClass('disabled');
      addToCartButton.find('span').text(addToCartButtonTextWhileAdding);
      addToCartButton.attr('title', addToCartButtonTextWhileAdding);
    },

    enableAddToCartButton: function (form) {
      var addToCartButtonTextAdded = $t('Added'),
          addToCartButton          = $(form).find('button[type=submit]');

      addToCartButton.find('span').text(addToCartButtonTextAdded);
      addToCartButton.attr('title', addToCartButtonTextAdded);

      setTimeout(function () {
        var addToCartButtonTextDefault = $t('Add to Cart');

        addToCartButton.prop('disabled', false);
        addToCartButton.removeClass('disabled');
        addToCartButton.find('span').text(addToCartButtonTextDefault);
        addToCartButton.attr('title', addToCartButtonTextDefault);
      }, 2500);
    }
  });

  return $.snowdog.solrAddToCart;
});
