var config = {
  config: {
    mixins: {
      "Magento_Checkout/js/action/place-order": {
        "Magento_CheckoutAgreements/js/model/place-order-mixin": true,
      },
      "Magento_Checkout/js/action/set-payment-information": {
        "Magento_CheckoutAgreements/js/model/set-payment-information-mixin": true,
      },
      "Magento_CheckoutAgreements/js/view/checkout-agreements": {
        "Magento_CheckoutAgreements/js/mixins/checkout-agreements-mixin": true,
      }
    }
  }
};
