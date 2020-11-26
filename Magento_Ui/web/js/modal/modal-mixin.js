define(['jquery'], function ($) {
  'use strict'

  var modalWidgetMixin = {
    options: {
      closeIconSvgUrl: require.toUrl('images/icons-sprite.svg#close')
    }
  }

  return function (targetWidget) {
    $.widget('mage.modal', targetWidget, modalWidgetMixin)

    return $.mage.modal
  }
})
