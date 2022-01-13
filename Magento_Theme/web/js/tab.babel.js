define([], function () {
  'use strict';

  return function (config, element) {
    const activeTitleClass = 'tab__title--active';
    const activeContentClass = 'tab__content--active';
    const tabItems = Array.from(element.children);
    const stickyLabels = document.querySelectorAll('.tab__title--sticky');
    const allItems = [...tabItems, ...stickyLabels];

    allItems.forEach((item) => {
      const tabTitle = item.dataset.tab;

      if (item.classList.contains('tab__title')) {
        item.addEventListener('click', () => {
          allItems.forEach((item) => {
            clean(item);
            setActiveContent(item, tabTitle);
          });
        });
      }
    });

    function clean(item) {
      if (item.classList.contains('tab__content')) {
        item.classList.remove(activeContentClass);
        item.setAttribute('aria-hidden', true);
      }
      else {
        item.classList.remove(activeTitleClass);
        item.setAttribute('aria-expanded', false);
        item.setAttribute('aria-selected', false);
      }
    }

    function setActiveContent(item, tabTitle) {
      if (item.classList.contains('tab__content') && tabTitle === item.dataset.content) {
        item.classList.add(activeContentClass);
        item.setAttribute('aria-hidden', false);
      }
      else if (tabTitle === item.dataset.tab) {
        item.scrollIntoView({
          behavior: 'smooth'
        });
        item.classList.add(activeTitleClass);
        item.setAttribute('aria-expanded', true);
        item.setAttribute('aria-selected', true);
      }
    }
  };
});
