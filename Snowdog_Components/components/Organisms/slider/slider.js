/* globals lory */

(function colibriSlider() {
  'use strict';

  const sliders = [...document.querySelectorAll('.slider')];

  class Slider {
    constructor(slider, dataValues) {
      this.config = {
        classNameFrame         : 'slider__handler',
        classNameSlideContainer: 'slider__slides',
        classNamePrevCtrl      : 'slider__prev',
        classNameNextCtrl      : 'slider__next',
        slidesToScroll         : 1
      };
      this.dataValues = dataValues;
      this.slider = slider;
      this.items = this.slider.querySelectorAll('.slider__item').length;
      this.navigationContainer = this.slider.querySelector('.slider__navigation');

      this.slider.addEventListener('on.lory.resize', () => {
        this.lorySlider.slideTo(0);
      });

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

      this.lorySlider = lory(this.slider, this.config);
    }
  }

  sliders.forEach(slider => {
    const dataValues = slider.dataset;

    new Slider(slider, dataValues);
  });
}());
