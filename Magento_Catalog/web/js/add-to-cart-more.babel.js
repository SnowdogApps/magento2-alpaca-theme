define([], function () {
  'use strict';
  
  const mediaBq = window.matchMedia('(max-width: 767px)');

  function toggleBtnAction(button) {
    let currentState = button.getAttribute('aria-expanded'),
        newState = currentState === 'true' ? 'false' : 'true';
    button.setAttribute('aria-expanded', newState);
  }

  return function (config, element) {
    if (mediaBq) {
      const toggleBtn = element;
      toggleBtn.addEventListener('click', () => {
        toggleBtnAction(toggleBtn);
      });
    }
  };
});
