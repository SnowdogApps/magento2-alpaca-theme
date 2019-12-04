'use strict';

define(function () {
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
//# sourceMappingURL=scroll-top.babel.js.map
