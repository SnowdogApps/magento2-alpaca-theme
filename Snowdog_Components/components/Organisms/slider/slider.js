'use strict'
// eslint-disable-next-line func-names
$(document).ready(function() {
  // eslint-disable-next-line func-names
  $('[data-slider="default"]').each(function() {
    let slider = $(this),
        sliderPrev = slider.find('.slider__prev'),
        sliderNext = slider.find('.slider__next');
    // eslint-disable-next-line func-names
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
