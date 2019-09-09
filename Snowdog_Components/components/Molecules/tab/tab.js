'use strict';

(function() { // eslint-disable-line
  const tab                = document.querySelector('.tab'),
        activeTitleClass   = 'tab__title--active',
        activeContentClass = 'tab__content--active',
        children           = Array.from(tab.children),
        titles             = [...tab.querySelectorAll('.tab__title')],
        mqBreakpoint       = window.matchMedia('screen and (min-width: 768px)');

  function setActiveTab(elem) {
    const tabTitle = elem.dataset.tab;

    children.forEach((item) => {

      resetItems(item);

      if (
        item.classList.contains('tab__content')
        && tabTitle === item.dataset.content
      ) {
        item.classList.add(activeContentClass);
        item.setAttribute('aria-hidden', false);
      }

      elem.classList.add(activeTitleClass);
      elem.setAttribute('aria-expanded', true);
      elem.setAttribute('aria-selected', true);
    });
  }
  function keyboardForward(currentTitleIndex) {
    if (currentTitleIndex === titles.length - 1) {
      titles[0].focus();
    }
    else {
      titles[currentTitleIndex + 1].focus();
    }
  }

  function keyboardBackward(currentTitleIndex) {
    if (currentTitleIndex === 0) {
      titles[titles.length - 1].focus();
    }
    else {
      titles[currentTitleIndex - 1].focus();
    }
  }

  function resetItems(item) {
    if (item.classList.contains('tab__content')) {
      item.classList.remove(activeContentClass);
      item.setAttribute('aria-hidden', true);
    }
    else {
      item.classList.remove(activeTitleClass);
      item.setAttribute('aria-expanded', false);
      item.setAttribute('aria-selected', false);
    }
  }

  function setKeyboardNav(e) {
    let currentTitle = e.target,
        currentTitleIndex = titles.indexOf(currentTitle),
        isAccordion = currentTitle.parentNode.classList.contains('tab--accordion');

    if (mqBreakpoint.matches && !isAccordion) {
      if (e.which == 39) {
        e.preventDefault();
        keyboardForward(currentTitleIndex);
      }
      else if (e.which == 37) {
        e.preventDefault();
        keyboardBackward(currentTitleIndex);
      }
    }
    else {
      if (e.which == 38) {
        e.preventDefault();
        keyboardBackward(currentTitleIndex);
      }
      else if (e.which == 40) {
        e.preventDefault();
        keyboardForward(currentTitleIndex);
      }
    }
  }

  titles.forEach(item => {
    item.addEventListener('click', (e) => {
      setActiveTab(e.target);
    });
    item.addEventListener('keydown', (e) => {
      setKeyboardNav(e);
    })
  });
})();
