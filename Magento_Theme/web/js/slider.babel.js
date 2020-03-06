define(
  [
    'jquery',
    'slick'
  ],
  function(
    $,
    slick
  ) {
    'use strict';

    return function(options, element) {
      function init() {
        createSlickSlider(element);
      }

      function createSlickSlider(slider) {
        const elementSlider = $(slider),
              slides = elementSlider.find(options.elementSlides),
              navPrev = elementSlider.find(options.elementNavPrev),
              navNext = elementSlider.find(options.elementNavNext);

        slides.slick(
          {
            dots: options.dots,
            infinite: options.infinite,
            centerMode: options.centerMode,
            prevArrow: navPrev,
            nextArrow: navNext,
            dotsClass: options.dotsClass,
            autoplay: options.autoplay,
            autoplaySpeed: options.autoplaySpeed,
            pauseOnFocus: options.pauseOnFocus,
            pauseOnHover: options.pauseOnHover
          }
        ).addClass(options.loadedClass);
      }

      init();
    }
  }
);
