define(['jquery'], function ($) {
  'use strict';

  var inputSearch = $('#search'),
      solrWrapper = $('.quicksearch'),
      solrClose = $('.quicksearch__close-button'),
      destinationSearch = $('#search_autocomplete'),
      ajaxUrl = inputSearch.attr('ajaxurl'),
      searchVal = '',
      searchValTmp = '',
      searchLength = 0,
      minSearchLength = 3,
      typingTimer = {},
      finaldoneTypingInterval = 250;

  function loadSearch(url) {
    $.get(url, function (data) {
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
    }
  }

  function closeSolrSearch() {
    destinationSearch.html('');
    solrWrapper.removeClass('quicksearch--visible');
    inputSearch.val('');
  }

  inputSearch.on('input', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(function () {
      checkSearch();
    }, finaldoneTypingInterval);
  });

  solrClose.on('click', function () {
    closeSolrSearch();
  });
});
