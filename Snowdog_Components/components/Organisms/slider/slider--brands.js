'use strict'
// eslint-disable-next-line func-names
$(document).ready(function() {
  // eslint-disable-next-line func-names
  $('[data-slider="brands"]').each(function() {
    let slider = $(this),
        sliderPrev = slider.find('.slider__prev'),
        sliderNext = slider.find('.slider__next');
    // eslint-disable-next-line func-names
    slider.each(function() {
      $(this).find('.slider__slides')
        .not('.slick-initialized')
        .slick({
          dots: false,
          slidesToShow: 3,
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
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
              }
            },
          ]
        })
        .addClass('slider__slides--loaded');
    });
  });
});
