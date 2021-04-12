define(function () {
  'use strict';

  return function (target) {
      return target.extend({
        initialize() {
          this._super();
        },

        getPaddingBottom(width, height) {
          return `${(height/width) * 100}%`;
        }
      });
  };
});
