'use strict';

class SelectAll {
  constructor(wrapper) {
    this.linkElement      = wrapper.querySelectorAll('input[value]');
    this.allElements      = wrapper.querySelector('#links-all');
    this.allElementsLabel = wrapper.querySelector('label[for="links-all"] .checkbox__text');
    this.checkedText      = this.allElements.getAttribute('data-checked');
    this.notCheckedText   = this.allElements.getAttribute('data-notchecked');

    this.createGlobalEventHandlers();
  }

  reloadAllCheckText() {
    let allChecked = true;

    this.linkElement.forEach(el => {
      if (!el.checked) {
        allChecked = false;
      }
    });

    if (allChecked) {
      this.allElementsLabel.innerText = this.checkedText;
      this.allElements.checked = true;
    }
    else {
      this.allElementsLabel.innerText = this.notCheckedText;
      this.allElements.checked = false;
    }
  }

  createGlobalEventHandlers() {
    this.linkElement.forEach(el => {
      el.addEventListener('change', () => {
        this.reloadAllCheckText();
      })
    })

    this.allElements.addEventListener('change', () => {
      if (this.allElements.checked) {
        this.allElementsLabel.innerText = this.checkedText;
        this.linkElement.forEach(el => {
          el.checked = true;
        });
      }
      else {
        this.allElementsLabel.innerText = this.notCheckedText;
        this.linkElement.forEach(el => {
          el.checked = false;
        });
      }
    });
  }
}

new SelectAll(document.querySelector('#downloadable-links-list'));
