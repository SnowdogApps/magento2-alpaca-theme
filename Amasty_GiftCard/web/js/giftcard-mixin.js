define(['jquery'], function ($) {
  'use strict';

  return function (Component) {
    return Component.extend({
      defaults: {
        element: {
          addToCardButton: '.tocart',
        }
      },
      validateForm: function (event) {
        var textareaValue = $(this.element.textarea).val();
        var isValidTextarea = textareaValue ? textareaValue.length <= this.maxLength : true;

        if ($('#product_addtocart_form').validate().form() && isValidTextarea) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();
      },
    });
  };
});
