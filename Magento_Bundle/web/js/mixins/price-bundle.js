define(['jquery'], function ($) {
  'use strict';

  var priceBundleMixin = {
    options: {
      priceBoxSelector: '.product-view__summary-price .price-box'
    }
  };

  console.log(priceBundleMixin.options.priceBoxSelector);

  return function (targetWidget) {
    $.widget('mage.priceBundle', targetWidget, priceBundleMixin);

    return $.mage.priceBundle;
  };
});
