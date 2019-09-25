module.exports = {
  name: 'filters',
  context: {
    closeButton: {
      class: 'filters__trigger filters__trigger--close',
      tag: 'button',
      attributes: 'type="button" aria-label="button" tabindex="0"',
      icon: {
        iconId: 'close'
      }
    },
    openButton: {
      class: 'filters__trigger filters__trigger--open',
      tag: 'button',
      attributes: 'type="button" aria-label="button" tabindex="0"',
      text: 'Category',
      iconAfter: {
        iconId: 'angle-right'
      }
    },
    openButtonFilters: {
      class: 'filters__trigger filters__trigger--open',
      tag: 'button',
      attributes: 'type="button" aria-label="button" tabindex="0"',
      text: 'Filters',
      iconAfter: {
        iconId: 'angle-right'
      }
    },
    divider: {
      class: 'filters__divider'
    },
    filterDropdown: {
      script: true,
      dropdowns: [
        {
          itemTag: 'div',
          itemAttributes: 'aria-expanded="false" role="button"',
          contentElement: 'filter--checkbox'
        },
        {
          itemTag: 'div',
          itemAttributes: 'aria-expanded="false" role="button"',
          contentElement: 'filter--checkbox'
        },
        {
          itemTag: 'div',
          itemAttributes: 'aria-expanded="false" role="button"',
          contentElement: 'filter--checkbox'
        },
        {
          itemTag: 'div',
          itemAttributes: 'aria-expanded="false" role="button"',
          contentElement: 'filter--range'
        }
      ]
    }
  }
};
