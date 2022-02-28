define([], function () {
  'use strict';

  return function (Component) {
    return Component.extend({
      defaults: {
        element: {
          addToCardButton: '.tocart',
        }
      }
    });
  };
});
