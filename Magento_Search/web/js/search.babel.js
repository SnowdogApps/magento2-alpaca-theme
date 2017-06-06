define(function() {
    'use strict'

    const searchForm        = document.querySelector('.search-block__form'),
          searchLabel        = document.querySelector('.search-block__toggle-btn');

    searchLabel.addEventListener('click', () => searchForm.classList.toggle('search-block__form--visible'));
});
