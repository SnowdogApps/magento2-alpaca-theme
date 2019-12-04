'use strict'
$(document).ready(function selectTwo() {
  let elem = $('.select__field');
  elem.select2({
    minimumResultsForSearch: Infinity,
    width: null,
    position: 'bottom',
  })
});
