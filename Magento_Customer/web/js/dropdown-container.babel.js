define([
    'setHeightFn'
], function(setHeight) {
    'use strict';

    return function(options, element) {
        const wrap     = element,
              wrapLabel     = wrap.querySelector('.dropdown-container__label'),
              wrapContent   = wrap.querySelector('.dropdown-container__content'),
              mqBreakpoint = window.matchMedia('screen and (min-width: 768px)');

        function isOpenWide() {
            return wrap.classList.contains('dropdown-container--open-wide');
        }

        function toggleContent() {
            if (!isOpenWide() || (isOpenWide() && !mqBreakpoint.matches)) {
                if (wrapContent && wrapContent.clientHeight > 0) {
                    wrapContent.style.height = 0;
                }
                else {
                    const contentHeight =  setHeight.setListHeight(wrapContent);
                    wrapContent.style.height = `${contentHeight}px`;
                }
                wrap.classList.toggle('dropdown-container--open');
            }
        }

        function bindEvents() {
            wrapLabel.addEventListener('click', toggleContent, false);

            window.addEventListener('resize', () => {
                if (isOpenWide()) {
                    (mqBreakpoint.matches) ? wrapContent.style.height = 'auto' : wrapContent.style.height = 0;
                    wrap.classList.remove('dropdown-container--open');
                }
            });
        }

        bindEvents();
    };
});
