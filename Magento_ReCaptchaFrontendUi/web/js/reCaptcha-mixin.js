define(function () {
  'use strict';

  var mixin = {
    initCaptcha: function () {
      var $parentForm,
        $wrapper,
        $reCaptcha,
        widgetId,
        parameters;

      if (this.captchaInitialized) {
        return;
      }

      // SNOWDOG CHANGES
      // Halt function if Recaptcha is disabled
      if (typeof this.settings === 'undefined') {
        return;
      }

      this.captchaInitialized = true;

      /*
       * Workaround for data-bind issue:
       * We cannot use data-bind to link a dynamic id to our component
       * See:
       * https://stackoverflow.com/questions/46657573/recaptcha-the-bind-parameter-must-be-an-element-or-id
       *
       * We create a wrapper element with a wrapping id and we inject the real ID with jQuery.
       * In this way we have no data-bind attribute at all in our reCAPTCHA div
       */
      $wrapper = $('#' + this.getReCaptchaId() + '-wrapper');
      $reCaptcha = $wrapper.find('.g-recaptcha');
      $reCaptcha.attr('id', this.getReCaptchaId());

      $parentForm = $wrapper.parents('form');

      parameters = _.extend(
        {
          'callback': function (token) { // jscs:ignore jsDoc
            this.reCaptchaCallback(token);
            this.validateReCaptcha(true);
          }.bind(this),
          'expired-callback': function () {
            this.validateReCaptcha(false);
          }.bind(this)
        },
        this.settings.rendering
      );

      if (parameters.size === 'invisible' && parameters.badge !== 'inline') {
        nonInlineReCaptchaRenderer.add($reCaptcha, parameters);
      }

      // eslint-disable-next-line no-undef
      widgetId = grecaptcha.render(this.getReCaptchaId(), parameters);
      this.initParentForm($parentForm, widgetId);

      registry.ids.push(this.getReCaptchaId());
      registry.captchaList.push(widgetId);
      registry.tokenFields.push(this.tokenField);

    },
  };

  return function (target) {
    return target.extend(mixin);
  }

});
