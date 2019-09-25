module.exports = {
  name: 'filters',
  context: {
    dropdownListId: 'test-id',
    closeButton: {
      class: 'filters__trigger filters__trigger--close',
      tag: 'button',
      attributes: 'type="button" aria-label="button"',
      icon: {
        id: 'close'
      }
    },
    openButton: {
      class: 'filters__trigger filters__trigger--open',
      tag: 'button',
      attributes: 'type="button" aria-label="button"',
      text: 'Category',
      iconAfter: {
        id: 'angle-right',
        hidden: true
      }
    },
    openButtonFilters: {
      class: 'filters__trigger filters__trigger--open',
      tag: 'button',
      attributes: 'type="button" aria-label="button"',
      text: 'Filters',
      iconAfter: {
        id: 'angle-right',
        hidden: true
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
