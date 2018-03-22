define([], function() {
  return function(config, element) {
    'use strict'

    const activeItemClass   = 'rating__rate-item--active',
          errorVisibleClass = 'rating__error--visible',
          reviewError       = document.getElementById(config.reviewError),
          ratingElements    = [...element.querySelectorAll('.rating__rate-item')],
          submitButton      = document.getElementById(config.submitButton);

    let optionChoosen = false;

    ratingElements.forEach(oneRank => {
      oneRank.addEventListener('click', () => {
        deleteOtherRates();

        oneRank.querySelector('.radio__field').checked = true;
        oneRank.classList.add(activeItemClass);
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

    submitButton.addEventListener('click', () => {
      if (!optionChoosen) {
        reviewError.classList.add(errorVisibleClass);
      }
    });

    function deleteOtherRates() {
      ratingElements.forEach(item => {
        item.classList.remove(activeItemClass);
      });
    }
  }
});
