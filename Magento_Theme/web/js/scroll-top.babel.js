define([], function () {
  'use strict';

  return function (options, element) {
    element.addEventListener('click', function () {
      const firstFocusable = document.getElementById('skip-nav-top');
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      firstFocusable.focus();
    });
  };
});
