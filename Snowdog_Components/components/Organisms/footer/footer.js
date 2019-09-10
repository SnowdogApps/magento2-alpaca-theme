'use strict';

const scrollToTop = document.querySelector('.footer__scroll-top');

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
});
