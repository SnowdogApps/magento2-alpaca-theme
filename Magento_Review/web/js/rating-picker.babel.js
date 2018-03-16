define([], function() {
  return function(config, element) {
    'use strict'

    const ratingElements = [...element.querySelectorAll('.rating__rate-item')];

    ratingElements.forEach(oneRank => {
      oneRank.addEventListener('click', () => {
        deleteOtherRates();

        oneRank.querySelector('.radio__field').checked = true;
        oneRank.classList.add('rating__rate-item--active');
      });
    });

    function deleteOtherRates() {
      ratingElements.forEach(item => {
        item.classList.remove('rating__rate-item--active');
      });
    }
  }
});
