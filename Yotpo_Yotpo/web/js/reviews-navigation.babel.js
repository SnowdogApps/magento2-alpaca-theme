define([], function () {
  'use strict';

  class ReviewsNavigation {
    constructor(element) {
      this.summaryLinks = element.querySelectorAll('.yotpo-bottomline');
      this.tab = document.querySelector('.tab__title--reviews');

      if (this.tab) {
        this.setListeners();
      }
    }

    setListeners() {
      this.summaryLinks.forEach((item) => {
        item.addEventListener('click', ev => this.goToTab(this.tab));

        item.addEventListener('keydown', ev => {
          if (ev.which === 13) {
            this.goToTab(this.tab);
          }
        });
      });
    }

    goToTab(tab) {
      tab.click();
    }
  }

  return function (config, element) {
    new ReviewsNavigation(element);
  };
});
