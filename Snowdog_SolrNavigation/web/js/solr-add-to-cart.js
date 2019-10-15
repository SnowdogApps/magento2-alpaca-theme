define([
  'jquery',
  'Magento_Catalog/js/product/view/product-ids-resolver',
  'Magento_Customer/js/customer-data',
  'Magento_Catalog/js/catalog-add-to-cart'
], function($, idsResolver, customerData) {

  $.widget('snowdog.solrAddToCart', $.mage.catalogAddToCart, {
    _create: function() {
      this._bindSubmit();

      // It's necessary to block add-to-cart buttons until page load
      // issue: https://github.com/magento/magento2/pull/21007
      $(this.options.addToCartButtonSelector).attr('disabled', false);
    },

    reloadCustomerData: function () {
      var sections = [ 'cart' ];

      customerData.invalidate(sections);
      customerData.reload(sections, true);
    },

    ajaxSubmit: function (form) {
      var self = this,
          productIds = idsResolver(form),
          formData;

      $(self.options.minicartSelector).trigger('contentLoading');
      self.disableAddToCartButton(form);
      formData = new FormData(form[0]);

      $.ajax({
        url: form.attr('action'),
        data: formData,
        type: 'post',
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false,

        beforeSend: function () {
          if (self.isLoaderEnabled()) {
            $('body').trigger(self.options.processStart);
          }
        },

        success: function (res) {
          var eventData, parameters;

          $(document).trigger('ajax:addToCart', {
            'sku': form.data().productSku,
            'productIds': productIds,
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

            self._redirect(res.backUrl);

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

          // Reload customer data - minicart product update
          self.reloadCustomerData();
          self.enableAddToCartButton(form);
        },

        error: function (res) {
          $(document).trigger('ajax:addToCart:error', {
            'sku': form.data().productSku,
            'productIds': productIds,
            'form': form,
            'response': res
          });
        },

        complete: function (res) {
          if (res.state() === 'rejected') {
            location.reload();
          }
        }
      });
    }
  });

  return $.snowdog.solrAddToCart;
});
