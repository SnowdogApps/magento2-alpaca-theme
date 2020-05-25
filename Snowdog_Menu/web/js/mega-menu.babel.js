'use strict';

class MegaMenu {
  constructor(element) {
    this.menu = element;
    this.focusable = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]';
    this.focusableChildren = [...this.menu.querySelectorAll(this.focusable)];
    this.firstLevelLinks = [...this.menu.querySelectorAll('.mega-menu__link')];
    this.content = document.getElementById('contentarea');
    this.removeInnerFocus();
    this.childrenLinksSelector = '.mega-menu__inner-link';
    this.setKeyboardListeners();
  }

  removeInnerFocus() {
    this.focusableChildren.forEach(item => {
      if (!item.parentNode.classList.contains('mega-menu__item')) {
        item.setAttribute('tabindex', -1);
      }
    });
  }

  moveFocusForward(array, focusIndex) {
    if (focusIndex === array.length - 1) {
      array[0].focus();
    }
    else {
      array[focusIndex + 1].focus();
    }
  }
  moveFocusBack(array, focusIndex) {
    if (focusIndex === 0) {
      array[array.length - 1].focus();
    }
    else {
      array[focusIndex - 1].focus();
    }
  }
  setKeyboardListeners() {
    this.menu.addEventListener('keydown', (e) => {
      if (e.which === 27) {
        e.preventDefault();
        this.content.focus();
      }
    });
    this.firstLevelLinks.forEach(link => {
      link.parentNode.addEventListener('keydown', (e) => {
        let focusableInners = [...link.parentNode.querySelectorAll(this.childrenLinksSelector)],
          indexInInners = focusableInners.indexOf(e.target),
          indexInFirsts = this.firstLevelLinks.indexOf(e.target);
        if (e.which === 40 && focusableInners.length) {
          e.preventDefault();
          this.moveFocusForward(focusableInners, indexInInners);
        }
        else if (e.which === 38 && focusableInners.length) {
          e.preventDefault();
          this.moveFocusBack(focusableInners, indexInInners);
        }
        else if (e.which === 39) {
          if (indexInFirsts !== -1) {
            e.preventDefault();
            this.moveFocusForward(this.firstLevelLinks, indexInFirsts);
          }
        }
        else if (e.which === 37) {
          if (indexInFirsts !== -1) {
            e.preventDefault();
            this.moveFocusBack(this.firstLevelLinks, indexInFirsts);
          }
        }
      });
    });
  }
}

define(() => (config, element) => {
  new MegaMenu(element);
});
