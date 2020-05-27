define([], function () {
  'use strict';

  return function (config, element) {
    const button = element,
      input = element.closest('.input--password').querySelector('.input__field'),
      activeClass = 'input__button-pass--active';

    button.addEventListener('click', () => {
      if (!button.classList.contains(activeClass)) {
        button.classList.add(activeClass);
        input.type = 'text';
      }
      else {
        button.classList.remove(activeClass);
        input.type = 'password';
      }
    });
  };
});

