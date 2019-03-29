'use strict';

class MegaMenu {
  constructor(element) {
    this.menu = document.querySelector('#mega-menu');
    this.menuItems = document.querySelectorAll('.mega-menu__item');
    this.focusable = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]';
    this.focusableChildren = Array.from(this.menu.querySelectorAll(this.focusable));
    this.setListeners();
    this.setFocusable(-1);
  }

  setListeners() {
    this.menuItems.forEach(el => {
      el.addEventListener('mouseenter', () => {
        console.log(el);
        this.open(el);
      })

      el.addEventListener('mouseleave', () => {
        if (this.isOpen()) {
          this.close(el);
        }
      })
    })
  }

  open(elem) {
    this.setAria(true, elem);
    window.addEventListener(
      'keydown',
      this.keyboardClose.bind(this)
    );
    this.menu.addEventListener('keydown', (e) => {
      this.trap(e);
    });
    this.setFocusable(0);
    this.menu.classList.add('mega-menu--is-open');
    elem.classList.add('mega-menu__item--active');
  }

  close(elem) {
    this.setAria(false, elem);
    this.setFocusable(-1);
    this.menu.classList.remove('mega-menu--is-open');
    elem.classList.remove('mega-menu__item--active');
  }

  isOpen() {
    return this.menu.classList.contains('mega-menu--is-open');
  }

  setFocusable(value) {
    this.focusableChildren.forEach(item => {
      item.setAttribute('tabindex', value);
    })
  }

  keyboardClose(event) {
    if (event.which === 27) {
      if (this.isOpen()) {
        event.preventDefault();
        this.menuItems.forEach(el => {
          el.classList.remove('mega-menu__item--active');
        })
      }
    }
  }

  setAria(isOpen, elem) {
    if (isOpen) {
      this.menu.setAttribute('aria-hidden', false);
      elem.setAttribute('aria-expanded', true);
      this.focusableChildren[0].focus();
    }
    else {
      this.menu.setAttribute('aria-hidden', true);
      elem.setAttribute('aria-expanded', false);
      this.menuItems[0].focus();
    }
  }

  trap(e) {
    if (e.which == 9) {
      let currentFocus = document.activeElement,
          totalOfFocusable = this.focusableChildren.length,
          focusedIndex = this.focusableChildren.indexOf(currentFocus);

      if (e.shiftKey) {
        if (focusedIndex === 0) {
          e.preventDefault();
          this.focusableChildren[totalOfFocusable - 1].focus();
        }
      }
      else {
        if (focusedIndex == totalOfFocusable - 1) {
          e.preventDefault();
          this.focusableChildren[0].focus();
        }
      }
    }
  }
}

define(() => (config, element) => {
  new MegaMenu(element);
});
