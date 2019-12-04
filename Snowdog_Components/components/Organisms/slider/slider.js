/* globals lory */

(function colibriSlider() {
  'use strict';

  const sliders = [...document.querySelectorAll('.slider')];
  const dot = document.createElement('span');

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

      if (e.type === 'before.lory.init') {
        for (let i = 1, len = this.items; i < len; i++) {
          this.addDotClone()
        }
        this.addDotListeners()
        this.addActiveClassToSlide(0)
      }

      if (e.type === 'after.lory.slide') {
        for (let i = 0, len = this.dotsContainer.childNodes.length; i < len; i++) {
          this.removeActiveClassFromSlide(i)
        }
        this.addActiveClassToSlide(e.detail.currentSlide)
      }

      if (e.type === 'on.lory.resize') {
        for (let i = 0, len = this.dotsContainer.childNodes.length; i < len; i++) {
          this.removeActiveClassFromSlide(i)
        }
        this.addActiveClassToSlide(0)
      }
    }

    addDotClone() {
      let clone = dot.cloneNode();
      clone.className = 'slider__dot';
      this.dotsContainer.appendChild(clone);
    }

    addDotListeners() {
      const dots = this.dotsContainer.childNodes;

      dots.forEach(dot => {
        dot.addEventListener('click', (event) => {
          if (event.target.parentNode === dot) {
            this.lorySlider.slideTo(Array.prototype.indexOf.call(dots, event.target.parentNode))
          }
          else {
            this.lorySlider.slideTo(Array.prototype.indexOf.call(dots, event.target))
          }
        })
      })
    }

    addActiveClassToSlide(index) {
      this.dotsContainer.childNodes[index].classList.add('active');
    }

    removeActiveClassFromSlide(index) {
      this.dotsContainer.childNodes[index].classList.remove('active');
    }
  }

  sliders.forEach(slider => {
    const dataValues = slider.dataset;

    new Slider(slider, dataValues);
  });
}());
