module.exports = {
  name: 'filters',
  context: {
    dropdownListId: 'test-id',
    categoryHeading: 'Category',
    filtersHeading: 'Shopping options',
    filterCategoryModal: {
      modal: {
        class: 'filters__modal modal--tertiary',
        id: 'filters-category',
        attributes: 'aria-labelledby="filters-categories-title"'
      },
      modalContainer: {
        class: 'filters__container'
      },
      modalContent: {
        class: 'filters__content'
      },
      trigger: false,
      buttonClose: {
        class: 'button--rotate-icon filters__close-button modal__close-button',
        tag: 'button',
        attributes: 'type="button" aria-label="Close filters modal"',
        icon: {
          id: 'close',
          class: 'button__icon modal__close-button-icon',
          hidden: true
        }
      },
      modalTop: true,
      modalTopClass: 'filters__content-top',
      heading: {
        attributes: 'id="filters-categories-title"',
        tag: 'h2',
        class: 'filters__heading',
        text: 'Category'
      },
      modalMiddle: true,
      modalMiddleClass: 'filters__content-middle',
      modalComponent: {
        content: 'filter--category'
      },
      modalBottom: false,
    },
    filterOptionsModal: {
      script: true,
      modal: {
        class: 'filters__modal modal--tertiary',
        id: 'filters-options',
        attributes: 'aria-labelledby="filters-option-title"'
      },
      modalContainer: {
        class: 'filters__container'
      },
      modalContent: {
        class: 'filters__content'
      },
      trigger: false,
      buttonClose: {
        class: 'button--rotate-icon modal__close-button filters__close-button',
        tag: 'button',
        attributes: 'type="button" aria-label="Close filters modal"',
        icon: {
          id: 'close',
          class: 'button__icon modal__close-button-icon',
          hidden: true
        }
      },
      modalTop: true,
      modalTopClass: 'filters__content-top',
      heading: {
        attributes: 'id="filters-option-title"',
        tag: 'h2',
        class: 'filters__heading',
        text: 'Shopping options'
      },
      modalMiddle: true,
      modalMiddleClass: 'filters__content-middle',
      modalComponent: {
        content: 'filters-content'
      },
      modalBottom: false,
    },
    openButton: {
      class: 'button--icon-light modal-trigger filters__trigger',
      tag: 'button',
      attributes: 'type="button" aria-label="Open categories filter" data-modal-trigger="filters-category" aria-expanded="true"',
      text: 'Category',
      iconAfter: {
        id: 'angle-right',
        hidden: true
      }
    },
    openButtonFilters: {
      class: 'button--icon-light modal-trigger filters__trigger filters__trigger--open',
      tag: 'button',
      attributes: 'type="button" aria-label="Open shopping options" data-modal-trigger="filters-options" aria-expanded="true"',
      text: 'Shopping Options',
      iconAfter: {
        id: 'angle-right',
        hidden: true
      }
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
