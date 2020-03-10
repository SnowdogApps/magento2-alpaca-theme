'use strict'
$(document).ready(function slickSlider() {
  $('.slider__slides')
    .slick({
      infinite: true,
      centerMode: false,
      mobileFirst: true,
      prevArrow: '.slider__prev',
      nextArrow: '.slider__next',
      dotsClass: 'slider__dots',
      responsive: [
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
      ]
    })
    .addClass('slider__slides--loaded');
});
