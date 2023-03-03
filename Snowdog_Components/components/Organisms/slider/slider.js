/* global $ */
(function Slider() {
  'use strict';

  function init() {
    const sliders = [...document.querySelectorAll('.slider')];
    sliders.forEach(element => {
      const dataValues = element.dataset;
      $.when(createSlider(element, dataValues)).then(displaySlider(element, dataValues));
    });
  }

  function createSlider(element, dataValues) {
    const slider = $(element)
    const slides = slider.find(dataValues.elementSlides)
    const navPrev = slider.find(dataValues.elementNavPrev)
    const navNext = slider.find(dataValues.elementNavNext)
    let direction;
    (document.dir !== undefined)? direction = document.dir : direction =document.getElementsByTagName("html")[0].getAttribute("dir");
    let rtl = direction === "rtl";

    slides.not('.slick-initialized').slick(
      {
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
        rtl: rtl,
        responsive: JSON.parse(dataValues.responsiveConfig)
      }
    )
  }

  function displaySlider(element, dataValues) {
    const slider = $(element)
    const loader = slider.find(dataValues.elementLoader)

    loader.removeClass(dataValues.loaderVisibleClass);
    slider.removeClass(dataValues.loadingClass);
  }

  init();
}());
