define([], function () {
  'use strict';

  function skipNavigation(skipElem) {
    skipElem.addEventListener('click', (e) => {
      let targetElem = document.querySelector(e.target.hash);
      if (targetElem) {
        targetElem.setAttribute('tabindex', -1);
        targetElem.focus();
        targetElem.addEventListener('focusout', (e) => {
          e.target.removeAttribute('tabindex');
        });
      }
    });
  }

  return function (config, element) {
    skipNavigation(element);
  };
});
