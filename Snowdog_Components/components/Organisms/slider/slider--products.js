'use strict'
$(document).ready(function slickSlider() {
  $('.slider__slides')
    .not('.slick-initialized')
    .slick({
      dots: true,
      slidesToShow: 2,
      slidesToScroll: 2,
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
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false
          }
        },
      ]
    })
    .addClass('slider__slides--loaded');
});
