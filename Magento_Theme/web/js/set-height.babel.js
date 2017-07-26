define(function() {
    'use strict';
    return {
        setListHeight: function(item) {
            return Array.from(item.children)
                        .map(elem => elem.clientHeight)
                        .reduce((a, b) => a + b, 0);
        }
    };
});
