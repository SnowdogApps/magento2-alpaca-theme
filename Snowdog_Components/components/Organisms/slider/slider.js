'use strict'
$(document).ready(function() {
  $('[data-slider="default"]').each(function() {
    var slider = $(this),
        sliderPrev = slider.find('.slider__prev'),
        sliderNext = slider.find('.slider__next');

    slider.each(function() {
      $(this).find('.slider__slides')
      .not('.slick-initialized')
      .slick({
        dots: false,
        infinite: true,
        centerMode: false,
        mobileFirst: true,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        dotsClass: 'slider__dots',
      })
      .addClass('slider__slides--loaded');
    });
  });
});
