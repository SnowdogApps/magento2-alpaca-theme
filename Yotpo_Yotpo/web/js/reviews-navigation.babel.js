define([], function () {
  'use strict';

  class ReviewsNavigation {
    constructor(element) {
      this.element = element;
      this.summaryLinks = [];
      this.summaryLinksClass = '.yotpo-bottomline';
      this.tab = document.querySelector('.tab__title--reviews');

      if (this.tab) {
        this.init();
      }
    }

    init() {
      const self = this;
      const getSummaryLinks = setInterval(() => {
        if (self.summaryLinks.length > 0) {
          clearInterval(getSummaryLinks);
          self.setListeners();
        }
        else {
          self.summaryLinks = self.element.querySelectorAll(self.summaryLinksClass);
        }
      }, 500);

      if (this.tab) {
        getSummaryLinks;
      }
    }

    setListeners() {
      this.summaryLinks.forEach((item) => {
        item.addEventListener('click', () => this.goToTab(this.tab));

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
