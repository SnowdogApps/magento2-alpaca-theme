'use strict';

(function() { // eslint-disable-line
  const swatchWrapper = document.querySelector('.swatch__wrapper'),
        swatchOptions = swatchWrapper.querySelectorAll('.swatch__option-container');

  swatchOptions.forEach(option => {
    option.addEventListener('click', () => {
      swatchOptions.forEach(option => {
        option.classList.remove('selected');
        option.setAttribute('aria-selected', 'false');
      })

      option.classList.add('selected');
      swatchWrapper.setAttribute('aria-activedescendant', option.id);
      option.setAttribute('aria-selected', 'true');
    })
  })
})();
