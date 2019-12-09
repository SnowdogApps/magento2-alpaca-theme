'use strict';
const mediaBq = window.matchMedia('(max-width: 767px)');

function toggleBtnAction(button) {
  let currentState = button.getAttribute('aria-expanded'),
      newState = currentState === 'true' ? 'false'  : 'true';
  button.setAttribute('aria-expanded', newState);
}

if (mediaBq) {
  const toggleBtn = document.querySelector('.add-to-cart__button-more');

  toggleBtn.addEventListener('click', () => {
    toggleBtnAction(toggleBtn);
  });
}
