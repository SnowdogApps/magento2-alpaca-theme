define(function() {
    'use strict';
    return function(options, elem) {
        const mobileBtn = elem,
              linksWrap = elem.parentNode.querySelector('.wrapper-collapsible__container');

        function showContent() {
            let allLinksWraps = document.querySelectorAll('.wrapper-collapsible__container.open');
            if (allLinksWraps.length && !linksWrap.classList.contains('open')) {
                allLinksWraps.forEach(key => key.classList.remove('open'));
                linksWrap.classList.add('open')
            }
            else {
                linksWrap.classList.toggle('open');
            }
        }
        mobileBtn.addEventListener('click', showContent);
    }
});
