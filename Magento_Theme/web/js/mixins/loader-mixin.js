define([
  'jquery',
], function ($) {
  'use strict';

  return function (widget) {
    $.widget('mage.loader', widget.loader, {
      options: {
        template:
          '<div class="loading-mask" data-role="loader">' +
            '<div class="loader loader--visible dupa">' +
              '<div class="loader__icon"></div>' +
            '</div>' +
          '</div>'
      }
    });

    return {
      loader: $.mage.loader,
      loaderAjax: $.mage.loaderAjax
    };
  };
});
