define([], function() {
  return function(config, element) {
    'use strict'

    const ratingElements = [...element.querySelectorAll('.rating__rate-item')];

    ratingElements.forEach(oneRank => {
      oneRank.addEventListener('click', () => {
        deleteOtherRates();

        oneRank.querySelector('.radio__field').checked = true;
        oneRank.classList.add('rating__rate-item--active');

        for (let i = 0; i < ratingElements.length; i++) {
          if (!ratingElements[i].classList.contains('rating__rate-item--active')) {
            ratingElements[i].classList.add('rating__rate-item--active');
          }
          else {
            return;
          }
        }
      });
    });

    function deleteOtherRates() {
      ratingElements.forEach(item => {
        item.classList.remove('rating__rate-item--active');
      });
    }
  }
});
