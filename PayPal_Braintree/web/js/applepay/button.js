/**
 * Braintree Apple Pay button
 **/
define([
  "uiComponent",
  "knockout",
  "jquery",
  "braintree",
  "braintreeApplePay",
  "mage/translate",
  "Magento_Checkout/js/model/payment/additional-validators",
], function (
  Component,
  ko,
  jQuery,
  braintree,
  applePay,
  $t,
  additionalValidators
) {
  "use strict";

  var that;

  return {
    init: function (element, context) {
      // No element or context
      if (!element || !context) {
        return;
      }

      // Context must implement these methods
      if (typeof context.getClientToken !== "function") {
        console.error(
          "Braintree ApplePay Context passed does not provide a getClientToken method",
          context
        );
        return;
      }
      if (typeof context.getPaymentRequest !== "function") {
        console.error(
          "Braintree ApplePay Context passed does not provide a getPaymentRequest method",
          context
        );
        return;
      }
      if (typeof context.startPlaceOrder !== "function") {
        console.error(
          "Braintree ApplePay Context passed does not provide a startPlaceOrder method",
          context
        );
        return;
      }

      if (this.deviceSupported() === false) {
        return;
      }

      // init braintree api
      braintree.create(
        {
          authorization: context.getClientToken(),
        },
        function (clientErr, clientInstance) {
          if (clientErr) {
            console.error("Error creating client:", clientErr);
            return;
          }

          applePay.create(
            {
              client: clientInstance,
            },
            function (applePayErr, applePayInstance) {
              // No instance
              if (applePayErr) {
                console.error(
                  "Braintree ApplePay Error creating applePayInstance:",
                  applePayErr
                );
                return;
              }

              // Create a button within the KO element, as apple pay can only be instantiated through
              // a valid on click event (ko onclick bind interferes with this).
              var el = document.createElement("div");
              el.className = "braintree-apple-pay-button";
              el.title = $t("Pay with Apple Pay");
              el.alt = $t("Pay with Apple Pay");
              el.addEventListener("click", function (e) {
                e.preventDefault();

                if (!additionalValidators.validate()) {
                  return;
                }

                // Payment request object
                var paymentRequest = applePayInstance.createPaymentRequest(
                  context.getPaymentRequest()
                );
                if (!paymentRequest) {
                  alert(
                    $t(
                      "We're unable to take payments through Apple Pay at the moment. Please try an alternative payment method."
                    )
                  );
                  console.error(
                    "Braintree ApplePay Unable to create paymentRequest",
                    paymentRequest
                  );
                  return;
                }

                // Show the loader
                jQuery("body").loader("show");

                // Init apple pay session
                try {
                  var session = new ApplePaySession(1, paymentRequest);
                } catch (err) {
                  jQuery("body").loader("hide");
                  console.error(
                    "Braintree ApplePay Unable to create ApplePaySession",
                    err
                  );
                  alert(
                    $t(
                      "We're unable to take payments through Apple Pay at the moment. Please try an alternative payment method."
                    )
                  );
                  return false;
                }

                // Handle invalid merchant
                session.onvalidatemerchant = function (event) {
                  applePayInstance.performValidation(
                    {
                      validationURL: event.validationURL,
                      displayName: context.getDisplayName(),
                    },
                    function (validationErr, merchantSession) {
                      if (validationErr) {
                        session.abort();
                        console.error(
                          "Braintree ApplePay Error validating merchant:",
                          validationErr
                        );
                        alert(
                          $t(
                            "We're unable to take payments through Apple Pay at the moment. Please try an alternative payment method."
                          )
                        );
                        return;
                      }

                      session.completeMerchantValidation(merchantSession);
                    }
                  );
                };

                // Attach payment auth event
                session.onpaymentauthorized = function (event) {
                  applePayInstance.tokenize(
                    {
                      token: event.payment.token,
                    },
                    function (tokenizeErr, payload) {
                      if (tokenizeErr) {
                        console.error(
                          "Error tokenizing Apple Pay:",
                          tokenizeErr
                        );
                        session.completePayment(ApplePaySession.STATUS_FAILURE);
                        return;
                      }

                      // Pass the nonce back to the payment method
                      context.startPlaceOrder(payload.nonce, event, session);
                    }
                  );
                };

                // Attach onShippingContactSelect method
                if (typeof context.onShippingContactSelect === "function") {
                  session.onshippingcontactselected = function (event) {
                    return context.onShippingContactSelect(event, session);
                  };
                }

                // Attach onShippingMethodSelect method
                if (typeof context.onShippingMethodSelect === "function") {
                  session.onshippingmethodselected = function (event) {
                    return context.onShippingMethodSelect(event, session);
                  };
                }

                // Hook
                if (typeof context.onButtonClick === "function") {
                  context.onButtonClick(session, this, e);
                } else {
                  jQuery("body").loader("hide");
                  session.begin();
                }
              });
              element.appendChild(el);
            }
          );
        }
      );
    },

    /**
     * Check the site is using HTTPS & apple pay is supported on this device.
     * @return boolean
     */
    deviceSupported: function () {
      if (location.protocol != "https:") {
        console.warn(
          "Braintree Apple Pay requires your checkout be served over HTTPS"
        );
        return false;
      }

      if (
        (window.ApplePaySession && ApplePaySession.canMakePayments()) !== true
      ) {
        console.warn(
          "Braintree Apple Pay is not supported on this device/browser"
        );
        return false;
      }

      return true;
    },
  };
});
