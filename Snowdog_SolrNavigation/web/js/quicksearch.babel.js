define(['jquery'], ($) => (config, element) => {
  'use strict';

  const inputSearch = $(element),
        form = $(config.formSelector),
        solrWrapper = form.find('.quicksearch'),
        solrClose = solrWrapper.find('.quicksearch__close-button'),
        destinationSearch = $(config.destinationSelector),
        ajaxUrl = config.url,
        finaldoneTypingInterval = 250;

  let searchVal = '',
      typingTimer = {},
      searchValTmp = '',
      searchLength = 0,
      minSearchLength = 3;

  function loadSearch(url) {
    $.get(url, (data) => {
      solrWrapper.addClass('quicksearch--visible');
      destinationSearch.html(data);
    });
  }

  function checkSearch() {
    searchVal = inputSearch.val();
    searchValTmp = searchVal.replace(/\s/g, "");
    searchLength = searchValTmp.length;
    searchVal = searchVal.replace(/\s/g, '+');
    if (searchLength >= minSearchLength) {
      loadSearch(ajaxUrl + '?q=' + searchVal);
    } else {
      closeSolrSearch();
    }
  }

  function closeSolrSearch() {
    destinationSearch.html('');
    solrWrapper.removeClass('quicksearch--visible');
  }

  inputSearch.on('input', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      checkSearch();
    }, finaldoneTypingInterval);
  });

  inputSearch.on('focus', () => {
    checkSearch();
  });

  solrClose.on('click', () => {
    closeSolrSearch();
  });
});
