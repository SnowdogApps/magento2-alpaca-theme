'use strict';

const scrollToTop = document.querySelector('.footer__scroll-top');

scrollToTop.addEventListener('click', () => {
  // move focus to first focusable element on the page - skip nav link on top
  const focusable = document.querySelectorAll('a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex]:not([tabindex="-1"])');
  const firstFocusable = focusable[0];
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
  firstFocusable.focus();
});
