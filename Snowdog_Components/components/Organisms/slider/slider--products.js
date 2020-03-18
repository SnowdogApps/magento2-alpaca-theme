'use strict'
$(document).ready(function() {
  $('[data-slider="products"]').each(function() {
    var slider = $(this),
        sliderPrev = slider.find('.slider__prev'),
        sliderNext = slider.find('.slider__next');

    slider.each(function() {
      $(this).find('.slider__slides')
      .not('.slick-initialized')
      .slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        centerMode: false,
        mobileFirst: true,
        prevArrow: sliderPrev,
        nextArrow: sliderNext,
        dotsClass: 'slider__dots',
        responsive: [
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          },
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              dots: false
            }
          },
        ]
      })
      .addClass('slider__slides--loaded');
    });
  });
});
