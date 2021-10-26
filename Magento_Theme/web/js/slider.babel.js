define([
  'jquery',
  'slick'
], function ($) {
  'use strict';

  return function (options, element) {
    function init() {
      const dataValues = element.dataset;

      $.when(createSlickSlider(dataValues)).then(displaySlider(dataValues));
    }

    function createSlickSlider(dataValues) {
      const slider = $(element);
      const slides = slider.find(dataValues.elementSlides);
      const navPrev = slider.find(dataValues.elementNavPrev);
      const navNext = slider.find(dataValues.elementNavNext)

      slides.not('.slick-initialized').slick({
        slide: dataValues.elementSlide,
        dots: JSON.parse(dataValues.dots),
        infinite: JSON.parse(dataValues.infinite),
        centerMode: JSON.parse(dataValues.centerMode),
        mobileFirst: JSON.parse(dataValues.mobileFirst),
        prevArrow: navPrev,
        nextArrow: navNext,
        dotsClass: dataValues.dotsClass,
        autoplay: JSON.parse(dataValues.autoplay),
        autoplaySpeed: parseInt(dataValues.autoplaySpeed),
        pauseOnFocus: JSON.parse(dataValues.pauseOnFocus),
        pauseOnHover: JSON.parse(dataValues.pauseOnHover),
        slidesToShow: parseInt(dataValues.slidesToShow),
        slidesToScroll: parseInt(dataValues.slidesToScroll),
        swipeToSlide: JSON.parse(dataValues.swipeToSlide),
        responsive: JSON.parse(dataValues.responsiveConfig),
      });
    }

    function displaySlider(dataValues) {
      const slider = $(element);
      const loader = slider.find(dataValues.elementLoader);

      loader.removeClass(dataValues.loaderVisibleClass);
      slider.removeClass(dataValues.loadingClass);
    }

    init();
  };
});
