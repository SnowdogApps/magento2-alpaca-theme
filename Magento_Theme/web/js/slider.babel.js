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
        $.when(createSlickSlider()).then(displaySlider());
      }

      function createSlickSlider() {
        let slider = $(element),
            slides = slider.find(options.elementSlides),
            navPrev = slider.find(options.elementNavPrev),
            navNext = slider.find(options.elementNavNext);

        slides.not('.slick-initialized').slick(
          {
            dots: options.dots,
            infinite: options.infinite,
            centerMode: options.centerMode,
            mobileFirst: options.mobileFirst,
            prevArrow: navPrev,
            nextArrow: navNext,
            dotsClass: options.dotsClass,
            autoplay: options.autoplay,
            autoplaySpeed: options.autoplaySpeed,
            pauseOnFocus: options.pauseOnFocus,
            pauseOnHover: options.pauseOnHover,
            slidesToShow: options.slidesToShow,
            slidesToScroll: options.slidesToScroll,
            responsive: options.responsiveConfig,
            swipeToSlide: options.swipeToSlide
          }
        )
      }

      function displaySlider() {
        let slider = $(element),
            loader = slider.find(options.elementLoader);

        loader.removeClass(options.loaderVisibleClass);
        slider.removeClass(options.loadingClass);
      }

      init();
    }
  }
);
