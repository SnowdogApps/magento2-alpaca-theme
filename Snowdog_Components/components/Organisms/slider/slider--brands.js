'use strict'
$(document).ready(function slickSlider() {
  $('.slider__slides')
    .not('.slick-initialized')
    .slick({
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true,
      centerMode: false,
      mobileFirst: true,
      prevArrow: '.slider__prev',
      nextArrow: '.slider__next',
      dotsClass: 'slider__dots',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          }
        },
      ]
    })
    .addClass('slider__slides--loaded');
});
