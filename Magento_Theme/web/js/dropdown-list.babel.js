class DropdownList {
  constructor(element) {
    this.contentClass = 'dropdown-list__content';
    this.element = element;
    this.dropdownCollapseLabel = '.dropdown-list__item--collapse .dropdown-list__label';
    this.dropdownItem = [...this.element.querySelectorAll(this.dropdownCollapseLabel)];
    this.openClass = 'dropdown-list__item--open';
    this.mqClass = 'js-is-medium-open';
    this.mq = '(min-width: 768px)';

    this.dropdownItem.forEach(
      key => key.addEventListener('click', (e) => {
        e.preventDefault();
        this.parentElement = key.parentNode;
        this.toggleContent(key, false);
      }, false)
    );

    window.addEventListener('resize', () => {
      const dropdownMediumOpen = this.element.classList.contains(this.mqClass);

      if (dropdownMediumOpen) {
        this.resetMqMediumOpen(this.element);
      }
    });
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

  isMediumOpen(dropdownBlock) {
    return (dropdownBlock.classList.contains(this.mqClass)) && window.matchMedia(this.mq).matches;
  }

  resetMqMediumOpen(item) {
    const dropdownContent = item.querySelector(`.${this.contentClass}`);

    if (window.matchMedia(this.mq).matches) {
      dropdownContent.style.height = 'auto';
      dropdownContent.parentElement.classList.remove(this.openClass);
      this.setAriaAttributes(item, dropdownContent, true);
    }
    else {
      dropdownContent.style.height = 0;
      dropdownContent.parentElement.classList.remove(this.openClass);
      this.setAriaAttributes(item, dropdownContent, false);
    }
  }

  toggleContent(item) {
    const dropdownId = item.dataset.dropdown,
      dropdownContent = this.parentElement.querySelector(`.${this.contentClass}[data-content="${dropdownId}"]`),
      dropdownBlock = item.closest('.dropdown-list');

    if (!this.isMediumOpen(dropdownBlock)) {
      if (dropdownContent.clientHeight > 0) {
        dropdownContent.style.height = 0;
        this.parentElement.classList.remove(this.openClass);
        this.setAriaAttributes(item, dropdownContent, true);
      }
      else {
        dropdownContent.style.height = 'auto';
        this.parentElement.classList.add(this.openClass);
        this.setAriaAttributes(item, dropdownContent, false);
      }
    }
    else {
      dropdownContent.style.height = 'auto';
      this.parentElement.classList.remove(this.openClass);
      this.setAriaAttributes(item, dropdownContent, false);
    }
  }
}

define(() => (config, element) => {
  new DropdownList(element);
});
