define([], function () {
  'use strict';

   class CookieModal { // eslint-disable-line
    constructor(element, config) {
      this.config = config
      this.modal = element
      this.setListeners();
    }

    trap(e) {
      if (e.which == 27) {
        this.closeModal(this.modal);
      }
      if (e.which == 9) {
        let currentFocus = document.activeElement,
            totalOfFocusable = this.modal.focusableChildren.length,
            focusedIndex = this.modal.focusableChildren.indexOf(currentFocus);
        if (e.shiftKey) {
          if (focusedIndex === 0) {
            e.preventDefault();
            this.modal.focusableChildren[totalOfFocusable - 1].focus();
          }
        }
        else {
          if (focusedIndex == totalOfFocusable - 1) {
            e.preventDefault();
            this.modal.focusableChildren[0].focus();
          }
        }
      }
    }

    modalOpenMq() {
      this.modal.setAttribute('aria-hidden', false);
    }

    closeOpenMq() {
      this.modal.setAttribute('aria-hidden', true);
    }

    openModal() {
      this.modal.focused = document.activeElement;
      this.modal.setAttribute('aria-hidden', false);
      this.modal.classList.add(this.modal.activeClass);
      this.modal.focusableChildren = Array.from(this.modal.querySelectorAll(this.modal.focusable));
      this.modal.focusableChildren[0].focus();
      this.modal.addEventListener('keydown', (e) => {
        this.trap(e);
      });
    }

    closeModal() {
      this.modal.setAttribute('aria-hidden', true);
      this.modal.classList.remove(this.modal.activeClass);
      this.modal.focused.focus();
    }
    setListeners() {
      this.modal.content     = this.modal.querySelector('.modal__content'),
      this.modal.closeButton = this.modal.querySelector('.modal__close-button'),
      this.modal.activeClass = 'modal--active',
      this.modal.focusable   = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), object, embed, *[tabindex], *[contenteditable]',
      this.modal.focused     = '';

      this.openModal(this.modal)

      // clicking on button (x) closes the modal
      if (this.modal.closeButton) {
        this.modal.closeButton.addEventListener('click',
          () => this.closeModal()
        );
      }

      // clicking anywhere outside of the modal closes the modal
      window.addEventListener('click', (e) => {
        if (e.target === this.modal
          && this.modal.classList.contains(this.modal.activeClass)
          && !this.modal.content.contains(e.target)
        ) {
          this.closeModal()
        }
      });
      // escape key closes the modal
      window.addEventListener('keydown', (e) => {
        if (e.which === 27
          && this.modal.classList.contains(this.modal.activeClass)
        ) {
          this.closeModal()
        }
      });

      if (this.config && this.config.mqOpen) {
        const mqOpenBreakpoint = window.matchMedia(this.config.mqOpen);
        if (mqOpenBreakpoint.matches) {
          this.modalOpenMq()
        }
        window.addEventListener('resize', (e) => {
          if (mqOpenBreakpoint.matches) {
            this.modalOpenMq();
          } else {
            this.closeOpenMq();
          }
        })
      }
    }
  }

  return function (config, element) {
    new CookieModal(element, config);
  };
});
