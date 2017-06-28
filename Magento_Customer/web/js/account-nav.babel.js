define([
    'setHeightFn'
], function(setHeight) {
    'use strict';

    return function(options, element) {
        const navBlock     = element,
              navTitle     = navBlock.querySelector('.account-nav-wrapper__title'),
              navContent   = navBlock.querySelector('.account-nav'),
              mqBreakpoint = window.matchMedia('screen and (max-width: 767px)');

        function toggleAccountNav() {
            if (navContent && navContent.clientHeight > 0) {
                navContent.style.height = 0;
            }
            else {
                const contentHeight =  setHeight.setListHeight(navContent);
                navContent.style.height = `${contentHeight}px`;
            }
        }

        navTitle.addEventListener('click', toggleAccountNav, false);

        window.onresize = () => {
            return (mqBreakpoint.matches) ? navContent.style.height = 0 : navContent.style.height = 'auto';
        };
    };
});
