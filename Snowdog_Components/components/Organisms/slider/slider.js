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
        slidesToScroll         : 1,
        enableDots             : true
      };
      this.dataValues = dataValues;
      this.slider = slider;
      this.items = this.slider.querySelectorAll('.slider__item').length;
      this.dotsContainer = this.slider.querySelector('.slider__dots');

      this.slider.addEventListener('on.lory.resize', () => {
        this.lorySlider.slideTo(0);
        this.handleDotEvent.bind(this);
      });

      this.slider.addEventListener('before.lory.init', this.handleDotEvent.bind(this));
      this.slider.addEventListener('after.lory.init', this.handleDotEvent.bind(this));
      this.slider.addEventListener('after.lory.slide', this.handleDotEvent.bind(this));


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

    handleDotEvent(e) {
      if (!this.config.enableDots) {
        return false;
      }

      let dot = document.createElement('li');

      if (e.type === 'before.lory.init') {
        for (let i = 0, len = this.items; i < len; i++) {
          let clone = dot.cloneNode();
          clone.className = 'slider__dot'
          this.dotsContainer.appendChild(clone);
        }
        this.dotsContainer.firstChild.classList.add('active');
      }

      if (e.type === 'after.lory.slide') {
        for (let i = 0, len = this.dotsContainer.childNodes.length; i < len; i++) {
          this.dotsContainer.childNodes[i].classList.remove('active');
        }

        this.dotsContainer.childNodes[e.detail.currentSlide].classList.add('active');
      }

      if (e.type === 'on.lory.resize') {
        for (let i = 0, len = this.dotsContainer.childNodes.length; i < len; i++) {
          this.dotsContainer.childNodes[i].classList.remove('active');
        }
        this.dotsContainer.firstChild.classList.add('active');
      }
    }
  }

  sliders.forEach(slider => {
    const dataValues = slider.dataset;

    new Slider(slider, dataValues);
  });
}());
