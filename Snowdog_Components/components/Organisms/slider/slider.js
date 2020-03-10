'use strict'
$(document).ready(function slickSlider() {
  $('.slider__slides')
    .slick({
      dots: false,
      infinite: true,
      centerMode: false,
      prevArrow: '.slider__prev',
      nextArrow: '.slider__next',
      dotsClass: 'slider__dots',
    })
    .addClass('slider__slides--loaded');
});
