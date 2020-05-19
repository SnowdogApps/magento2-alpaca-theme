define([], function () {
  'use strict';

  return function (config, element) {
    const activeTitleClass = 'tab__title--active',
      activeContentClass = 'tab__content--active',
      tabItems = Array.from(element.children),
      stickyLabels = document.querySelectorAll('.tab__title--sticky'),
      allItems = [...tabItems, ...stickyLabels];

    function clean(item) {
      item.classList.remove(activeTitleClass);
      item.classList.remove(activeContentClass);
    }

    function setActiveContent(item, tabTitle) {
      if (item.classList.contains('tab__content') && tabTitle === item.dataset.content) {
        item.classList.add(activeContentClass);
      }
      else if (tabTitle === item.dataset.tab) {
        item.classList.add(activeTitleClass);
      }
    }

    allItems.forEach(item => {
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
  };
});
