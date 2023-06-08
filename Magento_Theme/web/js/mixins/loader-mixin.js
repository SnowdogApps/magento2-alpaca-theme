define([
  'jquery',
], function ($) {
  'use strict';

  return function (widget) {
    /*** replace magento loader widget template
      magento triggers:
        show loader: $('body').trigger('processStart');
        hide loader: $('body').trigger('processStop');
    ***/
    $.widget('mage.loader', widget.loader, {
      options: {
        template:
          '<div class="loading-mask" data-role="loader">' +
            '<div class="loader loader--visible">' +
              '<div class="loader__icon"></div>' +
            '</div>' +
          '</div>'
      }
    });

    return {
      /* must return all widgets */
      loader: $.mage.loader,
      loaderAjax: $.mage.loaderAjax
    };
  };
});
