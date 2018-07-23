define(['choices'], function(Choices) {
  'use strict';

  return function(config, select) {
    const options = {
      placeholder: false,
      searchEnabled: false,
      itemSelectText: '',
      position: 'bottom',
      sortFilter: (a, b) => {
        return a.label.localeCompare(b.label);
      },
      classNames: {
        containerInner: 'select__field',
        list          : 'select__field-list',
        input         : 'select__field-input',
        item          : 'select__field-item',
        listSingle    : 'select__field-list--single'
      },
      itemSelectText: ''
    };
    if (config.type === 'number') {
      options.sortFilter = (a, b) => {
        return a - b;
      }
    }
    new Choices(select, options);
  }
});
