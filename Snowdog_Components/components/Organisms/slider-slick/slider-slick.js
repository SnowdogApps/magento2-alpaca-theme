'use strict'
$(document).ready(function slickSlider() {
  $('.slider-slick__slides')
    .slick({
      dots: true,
      infinite: true,
      centerMode: false,
      prevArrow: '.slider-slick__prev',
      nextArrow: '.slider-slick__next',
      dotsClass: 'slider-slick__dots'
    })
    .addClass('slider-slick__slides--loaded');
});
