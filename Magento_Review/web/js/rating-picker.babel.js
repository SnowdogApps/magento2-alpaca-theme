define([], function() {
  return function(config, element) {
    'use strict'

    const activeItemClass = 'rating__rate-item--active';
    const errorVisibleClass = 'rating__error--visible';
    const reviewError = document.getElementById(config.reviewError);
    const ratingElements = [...element.querySelectorAll('.rating__rate-item')];
    const submitButton = document.getElementById(config.submitButton);
    const reviewForm = document.getElementById(config.reviewForm);

    let optionChoosen = false;

    ratingElements.forEach(oneRank => {
      oneRank.addEventListener('click', () => {
        deleteOtherRates();

        oneRank.querySelector('.radio__field').checked = true;
        oneRank.classList.add(activeItemClass);
        oneRank.setAttribute('aria-checked', true);
        optionChoosen = true;

        if (reviewError.classList.contains(errorVisibleClass)) {
          reviewError.classList.remove(errorVisibleClass);
        }

        for (let i = 0; i < ratingElements.length; i++) {
          if (!ratingElements[i].classList.contains(activeItemClass)) {
            ratingElements[i].classList.add(activeItemClass);
          }
          else {
            return;
          }
        }
      });
    });

    reviewForm.addEventListener('submit', (e) => {
      if (!optionChoosen) {
        reviewError.classList.add(errorVisibleClass);
        submitButton.disabled = false;
        e.preventDefault();
        return false;
      }
    });

    function deleteOtherRates() {
      ratingElements.forEach(item => {
        item.classList.remove(activeItemClass);
        item.setAttribute('aria-checked', false);
      });
    }
  }
});
