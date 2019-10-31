/* globals lory */

define([
  'lory',
  '!domReady!'
],
function(loryLib) {
  'use strict';

  return function(config, element) {
    class Slider {
      constructor(slider) {
        this.config = {
          classNameFrame         : 'slider__handler',
          classNameSlideContainer: 'slider__slides',
          classNamePrevCtrl      : 'slider__prev',
          classNameNextCtrl      : 'slider__next',
          slidesToScroll         : 1
        };
        this.dataValues = slider.dataset;
        this.slider = slider;
        this.items = this.slider.querySelectorAll('.slider__item').length;
        this.navigationContainer = this.slider.querySelector('.slider__navigation');

        Object.keys(this.dataValues).map((objectKey) => {
          if (objectKey !== 'slidesToScroll') {
            if (!isNaN(parseInt(this.dataValues[objectKey]))) {
              this.config[objectKey] = parseInt(this.dataValues[objectKey]);
            }
            else {
              this.config[objectKey] = this.dataValues[objectKey];
            }
          }
        });

        this.lorySlider = loryLib.lory(this.slider, this.config);
      }
    }

    new Slider(element);
  };
});
