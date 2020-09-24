define([], function () {
  'use strict';

  class ScrollTo {
    constructor(element, config) {
      this.element = element;
      this.config = config;
      this.defaults = {
        selector: '',
        offset: 0,
        tab: {
          open: false,
          selector: ''
        },
        event: {
          trigger: false,
          type: 'click',
          selector: ''
        }
      }

      this.init();
    }

    init() {
      this.config = Object.assign({}, this.defaults, this.config);
      this.element.addEventListener('click', this.scrollTo.bind(this));
    }

    openTab() {
      const tab = document.querySelector(this.config.tab.selector);

      if (tab) {
        tab.click();
      }
    }

    triggerEvent() {
      const element = document.querySelector(this.config.event.selector);

      if (element) {
        element[this.config.event.type]();
      }
    }

    scrollTo(e) {
      e.preventDefault();

      if (this.config.tab.open) {
        this.openTab();
      }

      if (this.config.event.trigger) {
        this.triggerEvent();
      }

      const target = document.querySelector(this.config.selector);

      if (target) {
        const position = target.getBoundingClientRect().top + window.pageYOffset - parseInt(this.config.offset);

        window.scrollTo({
          top: position,
          behavior: 'smooth'
        });
      }
    }
  }

  return (config, element) => {
    new ScrollTo(element, config);
  };
});
