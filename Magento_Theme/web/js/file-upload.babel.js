define(['choices'], function(Choices) {
  return function(config, element) {
    'use strict'

    const input  = element.querySelector('.file-upload__input'),
          name   = element.querySelector('.file-upload__name'),
          button = element.querySelector('span[role="button"]');

    input.addEventListener('change', file => {
      const filePath = file.target.value,
            fileName = filePath.split('\\').pop();

      if (fileName) {
        name.textContent = fileName;
      }
      else {
        name.textContent = name.dataset.defaultText;
      }
      name.focus();
    });

    button.addEventListener('keypress', event => {
      if (event.which === 32 || event.which === 13) {
        input.click();
      }
    });
  }
});
