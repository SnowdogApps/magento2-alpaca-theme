define([
  'jquery',
  'select2',
  'domReady!'
], function ($, select2) {
  'use strict'

  return function (config, select) {
    const isSearchable = $(select).hasClass('select--search');

    function matchCustom(params, data) {
      if ($(data.element).data('option') === 'fallback') {
        return data;
      }

      if ($.trim(params.term) === '') {
        return data;
      }

      if (typeof data.text === 'undefined') {
        return null;
      }

      if (data.text.toLowerCase().indexOf(params.term.toLowerCase()) > -1) {
        return data;
      }

      return null;
    }

    const selectId = select.id,
      defaultOptions = {
        minimumResultsForSearch: Infinity,
        width: null,
        position: 'bottom',
        debug: true
      }

    if (config.type === 'number') {
      defaultOptions.sorter = (data) =>
        data.sort((a, b) => a.text.localeCompare(b.text))
    }

    if (isSearchable) {
      defaultOptions.minimumResultsForSearch = undefined;
      defaultOptions.dropdownCssClass = 'select-dropdown--search';
      defaultOptions.matcher = matchCustom;
    }

    config.options = Object.assign(defaultOptions, config.options);
    $(`#${selectId}`).select2(config.options);
  }
})
