define(['choices'], function(Choices) {
    'use strict';

    /** 
      * This is for all select's in form to load chocices on it
      * Customer Dashboard -> Gift Registry form
      *
      */
    return function(options, element) {
        let selects = element.querySelectorAll('select');
        const defaultOptions = {
            placeholder  : false,
            searchEnabled: false,
            classNames   : {
                containerInner: 'select__field',
                list          : 'select__field-list',
                input         : 'select__field-input',
                item          : 'select__field-item',
                listSingle    : 'select__field-list--single'
            }
        };
        options = Object.assign(defaultOptions, options);

        selects.forEach(item => {
            new Choices(item, options);
        });   
    }
});
