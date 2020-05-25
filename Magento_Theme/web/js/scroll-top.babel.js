'use strict';
define(() => {
  return (options, element) => {
    element.addEventListener('click', () => {
      window.scrollTo(0, 0);
    })
  }
})
