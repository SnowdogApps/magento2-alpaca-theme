define([], function () {
  'use strict';

  return function (config, element) {
    const pageWasReloaded = getUrlFromLocalStorage() === window.location.search
    
    element.addEventListener('click', changeActiveTab);

    if (window.location.search.indexOf('?p=') >= 0 && !pageWasReloaded) {
      changeActiveTab();

      jumpToAnchor(config.reviewId);

      setUrlToLocalStorage(window.location.search);      
    }
    
    function changeActiveTab() {
      const element = document.getElementById(config.reviewId);

      if (element) {
        const parentElement = findAncestor(element, 'tab__content');
        setActiveFormTab(parentElement, parentElement.dataset.content);
      }
    }

    function findAncestor(element, containClass) {
      while ((element = element.parentElement) && !element.classList.contains(containClass)) ;
      return element;
    }

    function setActiveFormTab(oneTab, searchingTab) {
      const tabButton = oneTab.parentElement.querySelector(`[data-tab=${searchingTab}]`)

      if (tabButton) {
        tabButton.click();
      }
    }

    function getUrlFromLocalStorage() {
      return window.localStorage.getItem('oldSearchUrl');
    }

    function setUrlToLocalStorage(url) {
      window.localStorage.setItem('oldSearchUrl', url);
    }

    function jumpToAnchor(id) {
      window.location.href = "#" + id;
    }
  };
});
