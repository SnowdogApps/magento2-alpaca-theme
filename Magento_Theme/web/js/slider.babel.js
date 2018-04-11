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
        this.active = 'slider__dot--active';
        this.config = {
          classNameFrame         : 'slider__handler',
          classNameSlideContainer: 'slider__slides',
          classNamePrevCtrl      : 'slider__prev',
          classNameNextCtrl      : 'slider__next',
          slidesToScroll         : 1
        };
        this.dataValues = slider.dataset;
        this.slider = slider;
        this.dotContainer = this.slider.querySelector('.slider__dot-navigation');
        this.items = this.slider.querySelectorAll('.slider__item').length;
        this.navigationContainer = this.slider.querySelector('.slider__navigation');
        this.dotCount = 0;

        if (this.dotContainer) {
          this.dots = this.dotContainer.childNodes;

          this.slider.addEventListener('before.lory.init', () => {
            this.cloneDots()
            this.addDotListeners();
          });

          this.slider.addEventListener('after.lory.slide', (event) => {
            this.dotClassToggle(event);
          });

          this.slider.addEventListener('on.lory.resize', () => {
            this.lorySlider.slideTo(0);
            this.dotContainer.innerHTML = '';

            this.cloneDots();
            this.addDotListeners();

            this.dotContainer.childNodes[0].classList.add(this.dotActive);
          });
        }

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

      cloneDots() {
        this.dotNumber();
        const dotItem          = document.createElement('div'),
              navigationHidden = 'slider__navigation--hidden';

        if (this.dotCount > 1) {
          this.navigationContainer.classList.remove(navigationHidden);

          for (let i = 0; i < this.dotCount; i++) {
            let clone = dotItem.cloneNode();
            const nestedElement = document.createElement('span');

            clone.classList.add('slider__dot');

            clone.appendChild(nestedElement);
            nestedElement.classList.add('slider__dot-inside');

            this.dotContainer.appendChild(clone);
          }

          this.dotContainer.childNodes[0].classList.add(this.active);
        }
        else {
          this.navigationContainer.classList.add(navigationHidden);
        }
      }

      dotNumber() {
        const sliderWidth     = this.slider.querySelector('.slider__slides').offsetWidth,
              itemWidth       = this.slider.querySelector('.slider__item').offsetWidth,
              visibleElements = Math.round(sliderWidth / itemWidth),
              itemsLeft       = (this.items - visibleElements) + 1;

        this.dotCount = (itemsLeft > 1) ? (this.items - visibleElements) + 1 : 1;

        return this.dotCount;
      }

      addDotListeners() {
        const dots = this.dotContainer.childNodes;

        dots.forEach(dot => {
          dot.addEventListener('click', (event) => {
            if (event.target.parentNode === dot) {
              this.lorySlider.slideTo(Array.prototype.indexOf.call(dots, event.target.parentNode));
            }
            else {
              this.lorySlider.slideTo(Array.prototype.indexOf.call(dots, event.target));
            }
          });
        })
      }

      dotClassToggle(e) {
        this.dotContainer.childNodes.forEach(dot => {
          dot.classList.remove(this.active);
        });

        this.dotContainer.childNodes[e.detail.currentSlide].classList.add(this.active);
      }
    }

    new Slider(element);
  }
});
