define(['choices'], function(Choices) {
    'use strict';
    return function(options, select) {
        const defaultOptions = {
            placeholder     : true,
            placeholderValue: 'Search item',
            classNames      : {
                containerInner: 'select',
                list          : 'select__list',
                input         : 'select__input',
                item          : 'select__item',
                listSingle    : 'select__list--single',
            }
        };
        options = Object.assign(defaultOptions, options);
        new Choices(select, options);
    }
});
