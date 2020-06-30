define([], function () {
  'use strict';

  class DropdownList {  // eslint-disable-line
    constructor(element) {
      this.element = element;
      this.dropdownCollapseLabel = '.dropdown-list__item--collapse > .dropdown-list__label, .dropdown-list__item--collapse > .dropdown-list__label-wrapper > .dropdown-list__label';
      this.dropdownItem = [...this.element.querySelectorAll(this.dropdownCollapseLabel)];
      this.contentClass = 'dropdown-list__content';
      this.mq = '(min-width: 768px)';
      this.mqClass = 'dropdown-list--with-breakpoint';
      this.dropdownMediumOpen = this.element.classList.contains(this.mqClass);
      this.init();
    }

    setAriaAttributes(label, content, expanded) {
      if (expanded) {
        label.setAttribute('aria-expanded', 'false');
        content.setAttribute('aria-hidden', 'true');
      }
      else {
        label.setAttribute('aria-expanded', 'true');
        content.setAttribute('aria-hidden', 'false');
      }
    }

    removeAriaAttributes(label, content) {
      label.removeAttribute('aria-expanded');
      content.setAttribute('aria-hidden', 'false');
      label.disabled = true;
    }

    isMediumOpen(dropdownBlock) {
      return (dropdownBlock.classList.contains(this.mqClass)) && window.matchMedia(this.mq).matches;
    }

    getRightOffset(dropdownContent) {
      return window.innerWidth - dropdownContent.getBoundingClientRect().right;
    }

    setDropdownPosition(dropdownContent, rightOffset) {
      const dropdownContentRight = 'dropdown-list__content--right';
      if (rightOffset < 0) {
        if (!dropdownContent.classList.contains(dropdownContentRight)) {
          dropdownContent.classList.add(dropdownContentRight);
        }
      } else {
        dropdownContent.classList.remove(dropdownContentRight);
      }
    }

    resetMqMediumOpen(item) {
      const dropdownItem    = item.parentNode,
            dropdownContent = dropdownItem.querySelector(`.${this.contentClass}`);

      if (window.matchMedia(this.mq).matches) {
        this.removeAriaAttributes(item, dropdownContent);
      }
      else {
        this.setAriaAttributes(item, dropdownContent, true);
        item.disabled = false;
      }
    }

    toggleContent(trigger, dropdownContent, opening) {
      const dropdownBlock = trigger.closest('.dropdown-list'),
            focusableElements = dropdownContent.querySelectorAll('button:not([disabled]), a[href], area[href] input:not([disabled]), select:not([disabled]), textarea:not([disabled]), *[tabindex]:not([tabindex="-1"]), object, embed, *[contenteditable]');

      if (!this.isMediumOpen(dropdownBlock)) {
        if (dropdownContent.clientHeight > 0) {
          this.setAriaAttributes(trigger, dropdownContent, true);
          trigger.focus();
        }
        else if (opening) {
          this.setAriaAttributes(trigger, dropdownContent, false);
          if (focusableElements[0]) {
            focusableElements[0].focus();
          }
        }
      }

      this.setDropdownPosition(dropdownContent, this.getRightOffset(dropdownContent));
    }

    setMediumOpen() {
      if (this.dropdownMediumOpen) {
        let dropdownItems = [...this.element.querySelectorAll(this.dropdownCollapseLabel)];
        dropdownItems.forEach(key => this.resetMqMediumOpen(key));
      }
    }

    init() {
      this.dropdownItem.forEach(key => {
        const dropdownId = key.getAttribute('aria-controls'),
              dropdownContent = document.getElementById(dropdownId);

        key.addEventListener('click', e => {
          e.preventDefault();
          this.toggleContent(key, dropdownContent, true);
        }, false);

        [key, dropdownContent].forEach(el => el.addEventListener('keydown', e => {
          if (e.key === 'Escape') {
            this.toggleContent(key, dropdownContent, false);
          }
        }));
      });

      this.setMediumOpen();

      window.addEventListener('resize', () => {
        this.setMediumOpen();
      });
    }
  }

  return function (config, element) {
    new DropdownList(element);
  };
});
