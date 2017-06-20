define(function() {
    'use strict'

    const searchForm        = document.querySelector('.search'),
          searchLabel        = document.querySelector('.search-trigger');

    searchLabel.addEventListener('click', () => searchForm.classList.toggle('search--visible'));
});
