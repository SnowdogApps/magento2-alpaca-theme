/* global Choices */

(function() { // eslint-disable-line
  'use strict'

  const selects = [...document.querySelectorAll('.select__field')];

  selects.forEach(select => {
    new Choices(select, {
      searchEnabled: false,
      classNames: {
        containerInner: 'select__field',
        list: 'select__field-list',
        input: 'select__field-input',
        item: 'select__field-item',
        listSingle: 'select__field-list--single',
      },
      itemSelectText: ''
    });
  });
}());
