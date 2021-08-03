define([], function () {
  'use strict';

  const mediaBq = window.matchMedia('(max-width: 767px)');

  function setAriaHidden(addToCartSticky) {
    const focusableElements = addToCartSticky.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]');

    if (mediaBq.matches) {
      addToCartSticky.setAttribute('aria-hidden', 'false');
      focusableElements.forEach(el => {
        el.removeAttribute('tabindex');
      })
    } else {
      addToCartSticky.setAttribute('aria-hidden', 'true');
      focusableElements.forEach(el => {
        el.setAttribute('tabindex', '-1');
      })
    }
  }

  return function (config, element) {
    setAriaHidden(element);

    window.addEventListener('resize', () => {
      setAriaHidden(element);
    })
  };
});
