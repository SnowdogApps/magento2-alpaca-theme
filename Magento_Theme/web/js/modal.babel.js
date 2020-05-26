define([], function () {
  'use strict';

  class Modal { // eslint-disable-line
    constructor(modalTrigger) {
      this.setListeners(modalTrigger);
    }

    trap(e, modal) {
      if (e.which == 27) {
        this.closeModal(modal);
      }
      if (e.which == 9) {
        let currentFocus = document.activeElement,
            totalOfFocusable = modal.focusableChildren.length,
            focusedIndex = modal.focusableChildren.indexOf(currentFocus);
        if (e.shiftKey) {
          if (focusedIndex === 0) {
            e.preventDefault();
            modal.focusableChildren[totalOfFocusable - 1].focus();
          }
        }
        else {
          if (focusedIndex == totalOfFocusable - 1) {
            e.preventDefault();
            modal.focusableChildren[0].focus();
          }
        }
      }
    }

    openModal(modal) {
      modal.focused = document.activeElement;
      modal.el.setAttribute('aria-hidden', false);
      modal.trigger.setAttribute('aria-expanded', true);
      modal.el.classList.add(modal.activeClass);
      modal.focusableChildren = Array.from(modal.el.querySelectorAll(modal.focusable));
      modal.focusableChildren[0].focus();
      modal.el.addEventListener('keydown', (e) => {
        this.trap(e, modal);
      });
    }

    closeModal(modal) {
      modal.el.setAttribute('aria-hidden', true);
      modal.trigger.setAttribute('aria-expanded', false);
      modal.el.classList.remove(modal.activeClass);
      modal.focused.focus();
    }
    setListeners(modalTrigger) {
      const modal = {};
      modal.trigger = modalTrigger,
      modal.el = document.querySelector(`.modal[data-modal=${modal.trigger.dataset.modalTrigger}]`),
      modal.content     = modal.el.querySelector('.modal__content'),
      modal.closeButton = modal.el.querySelector('.modal__close-button'),
      modal.activeClass = 'modal--active',
      modal.focusable   = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]',
      modal.focused     = '';
      modal.trigger.addEventListener('click',
        () => this.openModal(modal)
      );
      // clicking on button (x) closes the modal
      if (modal.closeButton) {
        modal.closeButton.addEventListener('click',
          () => this.closeModal(modal)
        );
      }
      // clicking anywhere outside of the modal closes the modal
      window.addEventListener('click', (e) => {
        if (e.target === modal.el
          && modal.el.classList.contains(modal.activeClass)
          && !modal.content.contains(e.target)
        ) {
          this.closeModal(modal)
        }
      });
      // escape key closes the modal
      window.addEventListener('keydown', (e) => {
        if (e.which === 27
          && modal.el.classList.contains(modal.activeClass)
        ) {
          this.closeModal(modal)
        }
      });
    }
  }

  return function (config, element) {
    new Modal(element);
  };
});
