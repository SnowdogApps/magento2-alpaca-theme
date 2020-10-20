define([], function () {
  'use strict';

  return function (options, element) {
    element.addEventListener('click', function () {
      const focusable = document.querySelectorAll('a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex]:not([tabindex="-1"])');
      const firstFocusable = focusable[0];
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      firstFocusable.focus();
    });
  };
});
