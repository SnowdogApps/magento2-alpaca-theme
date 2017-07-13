define([
    'choices'
], function(Choices) {
    'use strict'

    /*global Choices */

    const selects = [...document.querySelectorAll('.select')];

    selects.forEach(select => {
      new Choices(select, {
        placeholder: true,
        placeholderValue: 'Search item',
        classNames: {
          containerInner: 'select',
          list: 'select__list',
          input: 'select__input',
          item: 'select__item',
          listSingle: 'select__list--single',
        }
      });
    });

});
