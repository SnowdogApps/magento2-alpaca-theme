'use strict';

(function() { // eslint-disable-line
  const addElement = document.querySelector('.add-to-cart'),
        bodyElement = document.getElementsByTagName('body')[0],
        submitBtn = document.querySelector('.product-view__submit-btn'),
        activeClass = 'add-to-cart--active';

  const addActive = () => {
    bodyElement.style.marginBottom = addElement.offsetHeight;
    bodyElement.style.height = 'auto';
    addElement.classList.add(activeClass);
  }

  const removeActive = () => {
    bodyElement.style.marginBottom = '0';
    bodyElement.style.height = '100%';
    addElement.classList.remove(activeClass);
  }

  const isInViewport = (elem) => {
    const bounding = elem.getBoundingClientRect();

    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const scrollEvent = () => {
    const axisY = -submitBtn.getBoundingClientRect().y + window.scrollY;

    if ((axisY > 0) && (!isInViewport(submitBtn))) {
      addActive();
    }
    else {
      removeActive();
    }
  }

  const init = () => {
    const matchMedia = window.matchMedia('(max-width: 768px)').matches;

    if (matchMedia) {
      addActive();
      window.removeEventListener('scroll', scrollEvent);
    }
    else {
      removeActive();
      window.addEventListener('scroll', scrollEvent);
    }
  }

  init();
  window.addEventListener('resize', init);
})();
