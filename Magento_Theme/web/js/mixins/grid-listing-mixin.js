define([
  'slider'
], function (slider) {
  'use strict';

  return function (listing) {
    return listing.extend({
      initialize: function (element) {
        this._super();
        this.element = element;
        this.containerClass = '.' + this.element.containerClass;
        this.container = document.querySelectorAll(this.containerClass);
      },
      hideLoader: function () {
        this.container.forEach(el => {
          el.querySelector('.loader').classList.remove('loader--visible');
        });
      },
      showLoader: function () {
        this.container.forEach(el => {
          el.querySelector('.loader').classList.add('loader--visible');
        });
      },
      initAfterLoad: function () {
        if (this.getDisplayAs() === 'slider') {
          this.container.forEach(el => {
            var sliderElement = el.querySelector('.slider');
            slider(false, sliderElement);
          });
        }
      },
      getItemWrapperClasses: function () {
        return this.element.itemWrapperClasses;
      },
      getItemClasses: function () {
        return this.element.itemClasses;
      },
      getDisplayAs: function () {
        return this.element.displayAs;
      }
    });
  };
});
