define(['jquery'], function ($) {
  'use strict';
  var widgetMixin = {
    options: {
      showAddToCart: true,
      submitUrl: '',
      cartButtonId: '',
      singleOpenDropDown: true,
      dialog: {}, // Options for mage/dropdown
      dialogDelay: 500, // Delay in ms after resize dropdown shown again
      origin: '', //Required, type of popup: 'msrp', 'tier' or 'info' popup

      // Selectors
      cartForm: '.form.map.checkout',
      msrpLabelId: '#map-popup-msrp',
      msrpPriceElement: '#map-popup-msrp .price-wrapper',
      priceLabelId: '#map-popup-price',
      priceElement: '#map-popup-price .price',
      mapInfoLinks: '.map-show-info',
      displayPriceElement: '.old-price.map-old-price .price-wrapper',
      fallbackPriceElement: '.normal-price.map-fallback-price .price-wrapper',
      displayPriceContainer: '.old-price.map-old-price',
      fallbackPriceContainer: '.normal-price.map-fallback-price',
      popUpAttr: '[data-role=msrp-popup-template]',
      popupCartButtonId: '#map-popup-button',
      paypalCheckoutButons: '[data-action=checkout-form-submit]',
      popupId: '',
      realPrice: '',
      isSaleable: '',
      msrpPrice: '',
      helpLinkId: '',
      addToCartButton: '',

      // Text options
      productName: '',
      addToCartUrl: ''
    },

    openDropDown: null,
    triggerClass: 'dropdown-active',

    popUpOptions: {
        appendTo: 'body',
        dialogContentClass: 'modal__container',
        closeOnMouseLeave: false,
        autoPosition: false,
        closeOnClickOutside: false,
        dialogClass: 'modal modal--active',
        position: {
            my: 'left top',
            collision: 'fit none',
            at: 'left bottom',
            within: 'body'
        },
        shadowHinter: 'popup popup-pointer'
    },
    popupOpened: false,
    wasOpened: false
  };

  return function (targetWidget) {
      $.widget('mage.addToCart', targetWidget, widgetMixin);

      return $.mage.addToCart;
  };
});
