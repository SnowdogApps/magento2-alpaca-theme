define(['tab'], function () {
  'use strict';

  let initialized = false;

  class ScrollTo {
    constructor(element, config) {
      this.element = element;
      this.config = config;
      this.defaults = {
        selector: '',
        offset: 0,
        scrollOnReload: false,
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

      if (this.config.scrollOnReload && !initialized) {
        this.openTabOnChangePagination();
      }

      initialized = true
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

    scrollTo(e = null) {
      if (e) {
        e.preventDefault();
      }

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

    openTabOnChangePagination() {
      if (window.location.search.includes('?p=')) {
        this.scrollTo();
      }
    }
  }

  return (config, element) => {
    new ScrollTo(element, config);
  };
});
