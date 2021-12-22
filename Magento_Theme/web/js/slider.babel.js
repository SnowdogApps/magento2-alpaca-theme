define([
  'jquery',
  'slick',
  'Magento_Swatches/js/swatch-renderer-mixin'
// eslint-disable-next-line no-unused-vars
], ($, slick, swatch) => {
  'use strict';

  class Slider {
    constructor(element) {
      this.slider = element;
      this.dataValues = element.dataset;
      this.sliderItems = [];
      this.currentSlide = null;
      this.currentSlideIndex = 0;
      this.focusable = 'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex]';

      this.init();
    }

    createSlickSlider() {
      const slider = $(this.slider),
            slides = slider.find(this.dataValues.elementSlides),
            prevArrow = slider.find(this.dataValues.elementNavPrev),
            nextArrow = slider.find(this.dataValues.elementNavNext);

      slides.not('.slick-initialized').slick(
        {
          slide: this.dataValues.elementSlide,
          dots: JSON.parse(this.dataValues.dots),
          infinite: JSON.parse(this.dataValues.infinite),
          centerMode: JSON.parse(this.dataValues.centerMode),
          mobileFirst: JSON.parse(this.dataValues.mobileFirst),
          prevArrow,
          nextArrow,
          dotsClass: this.dataValues.dotsClass,
          autoplay: JSON.parse(this.dataValues.autoplay),
          autoplaySpeed: parseInt(this.dataValues.autoplaySpeed),
          pauseOnFocus: JSON.parse(this.dataValues.pauseOnFocus),
          pauseOnHover: JSON.parse(this.dataValues.pauseOnHover),
          slidesToShow: parseInt(this.dataValues.slidesToShow),
          slidesToScroll: parseInt(this.dataValues.slidesToScroll),
          swipeToSlide: JSON.parse(this.dataValues.swipeToSlide),
          responsive: JSON.parse(this.dataValues.responsiveConfig),
          accessibility: false
        }
      )
    }

    displaySlider() {
      this.slider.classList.remove(this.dataValues.loadingClass);
    }

    changeInnerFocus(element, tabIndex) {
      const focusableChildren = [...element.querySelectorAll(this.focusable)];

      focusableChildren.forEach(item => {
        item.setAttribute('tabindex', tabIndex);
      });
    }

    switchFocusBetweenSlides() {
      this.changeInnerFocus(this.currentSlide, -1);
      this.currentSlide.setAttribute('tabindex', -1);

      this.currentSlide = this.sliderItems[this.currentSlideIndex];
      this.changeInnerFocus(this.currentSlide, 0);
      this.currentSlide.setAttribute('tabindex', 0);
      this.currentSlide.focus();
    }

    moveFocusForward() {
      if (this.currentSlideIndex === this.sliderItems.length - 1) {
        this.currentSlideIndex = 0;
      }
      else {
        ++this.currentSlideIndex;
      }

      this.switchFocusBetweenSlides();
    }

    moveFocusBack() {
      if (this.currentSlideIndex === 0) {
        this.currentSlideIndex = this.sliderItems.length - 1
      }
      else {
        --this.currentSlideIndex;
      }

      this.switchFocusBetweenSlides();
    }

    setKeyboardListeners() {
      this.slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.moveFocusForward();
        }
        else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.moveFocusBack();
        }
        else if (e.key === 'Escape') {
          e.preventDefault();
          const focusableElements = [...document.querySelectorAll(this.focusable)];
          const currentElementIndex = focusableElements.indexOf(e.target);

          if (currentElementIndex > -1) {
            let nextFocusableElementIndex = currentElementIndex;
            let nextFocusableElement;

            do {
              nextFocusableElementIndex++;
              nextFocusableElement = focusableElements[nextFocusableElementIndex];
            } while (this.slider.contains(nextFocusableElement));

            nextFocusableElement.focus();
         }
        }
      });
    }

    setKeyboardSupport() {
      const keyboardNavInfo = this.slider.querySelector(this.dataValues.elementKeyboardNavInfo);

      if ((this.sliderItems.length > 1) && keyboardNavInfo) {
        this.changeInnerFocus(this.slider, -1);
        this.changeInnerFocus(this.currentSlide, 0);
        keyboardNavInfo.setAttribute('tabindex', 0);

        keyboardNavInfo.addEventListener('focus', () => {
          this.setKeyboardListeners();
        }, { once: true });
      }
    }

    initKeyboardSupport() {
      const swatchContainers = [...this.slider.querySelectorAll('.swatch__container')];
      this.sliderItems = [...this.slider.querySelectorAll(this.dataValues.elementSlide)];
      this.currentSlide = this.sliderItems[this.currentSlideIndex];

      if (swatchContainers.length === 0) {
        this.setKeyboardSupport();
      }
      else {
        // If slider contains swatches, wait until all swatches are loaded
        // before setting keyboard support
        let initializedSwatchesNum = 0;

        $(this.slider).on('swatch.initialized', () => {
          initializedSwatchesNum++;
          if (initializedSwatchesNum === swatchContainers.length) {
            this.setKeyboardSupport();
          }
        })
      }
    }

    init() {
      $.when(this.createSlickSlider())
        .then(this.displaySlider())
        .then(this.initKeyboardSupport())
    }
  }

  return (config, element) => {
    new Slider(element);
  };
});
