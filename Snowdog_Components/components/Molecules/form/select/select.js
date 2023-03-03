/* global $ */
'use strict';
$(document).ready(function selectTwo() {
  let direction;
  (document.dir !== undefined) ? direction = document.dir : direction = document.getElementsByTagName('html')[0].getAttribute('dir');
  const elem = $('.select__field');
  const isSearchable = $('.select').hasClass('select--search');

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

  const config = {
    minimumResultsForSearch: Infinity,
    width: null,
    position: 'bottom',
    dir: direction,
  };

  if (isSearchable) {
    config.minimumResultsForSearch = undefined;
    config.dropdownCssClass = 'select-dropdown--search';
    config.matcher = matchCustom;
  }

  elem.select2(config);
});
