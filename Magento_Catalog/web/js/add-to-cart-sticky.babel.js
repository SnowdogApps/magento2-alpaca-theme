define([], function () {
  'use strict';

  const mediaBq = window.matchMedia('(max-width: 767px)');

  function setAriaHidden(adToCartSticky) {
    if (mediaBq.matches) {
      adToCartSticky.setAttribute('aria-hidden', 'false');
    } else {
      adToCartSticky.setAttribute('aria-hidden', 'true');
    }
  }

  return function (config, element) {
    setAriaHidden(element);

    window.addEventListener('resize', () => {
      setAriaHidden(element);
    })
  };
});
