define([
  'jquery',
  'select2'
], function($, select2) {
  'use strict';
  function sorterFilter() {
    data => data.sort((a, b) => a.text.localeCompare(b.text));
  }
  return function(config, select) {
    const defaultOptions = {
      minimumResultsForSearch: Infinity,
      width: null,
    };
    if (config.type === 'number') {
      defaultOptions.sorter = sorterFilter();
    }
    config.options = Object.assign(defaultOptions, config.options);
    $(select).select2(config.options);
  };
});
