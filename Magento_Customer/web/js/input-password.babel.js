define(() => (config, element) => {
  'use strict'

  const components = [...document.querySelectorAll('.input--password')],
        activeClass = 'input__button-pass--active';

  components.forEach(component => {
    const input = component.querySelector('.input__field'),
          button = component.querySelector('.input__button-pass');

    button.addEventListener('click', () => {
      if (!button.classList.contains(activeClass)) {
        button.classList.add(activeClass);
        input.type = 'text';
      }
      else {
        button.classList.remove(activeClass);
        input.type = 'password';
      }
    })
  })
})
