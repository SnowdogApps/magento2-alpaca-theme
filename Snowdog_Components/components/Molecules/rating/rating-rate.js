'use strict'

class Rating {
  constructor() {
    this.rating = document.querySelector('.rating--rate');
    this.activeItemClass = 'rating__rate-item--active';
    this.ratingElements = [...this.rating.querySelectorAll('.rating__rate-item')];
    this.optionChoosen = false;

    this.setListeners();
  }
  deleteOtherRates() {
    this.ratingElements.forEach(item => {
      item.classList.remove(this.activeItemClass);
    });
  }
  setListeners() {
    this.ratingElements.forEach(oneRank => {
      oneRank.addEventListener('click', () => {
        this.deleteOtherRates();

        oneRank.querySelector('.radio__field').checked = true;
        oneRank.classList.add(this.activeItemClass);
        this.optionChoosen = true;
        oneRank.setAttribute('aria-selected', true);

        for (let i = 0; i < this.ratingElements.length; i++) {
          if (!this.ratingElements[i].classList.contains(this.activeItemClass)) {
            this.ratingElements[i].classList.add(this.activeItemClass);
          }
          else {
            return;
          }
        }
      });
    });
  }
}
new Rating();


