define([
  'jquery',
  'select2',
  'domReady!'
], function($, select2) {
  'use strict';

  function sorterFilter() {
    data => data.sort((a, b) => a.text.localeCompare(b.text));
  }

  return function (config, select) {
    const selectId = select.id,
      defaultOptions = {
        minimumResultsForSearch: Infinity,
        width: null,
        position: 'bottom',
        debug: true
      };
    if (config.type === 'number') {
      defaultOptions.sorter = sorterFilter();
    }
    config.options = Object.assign(defaultOptions, config.options);
    $(`#${selectId}`).select2(config.options);
  };
});
