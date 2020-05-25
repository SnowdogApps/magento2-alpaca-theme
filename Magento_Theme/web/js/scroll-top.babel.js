define([], function () {
  'use strict';

  return function (options, element) {
    element.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    });
  };
});
