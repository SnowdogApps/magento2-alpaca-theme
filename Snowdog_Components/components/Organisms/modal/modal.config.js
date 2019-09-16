module.exports = {
  context: {
    modalContent: {
      class: '',
    },
    modal: {
      class: '',
      id: 'myDialog',
      // read README.md when implementing modal
      attributes: 'aria-labelledby="myTitle" aria-describedby="myDesc"'
    },
    trigger: true,
    modalTrigger: {
      buttonModalTrigger: {
        tag: 'button',
        class: 'modal-trigger',
        text: 'Modal trigger button',
        attributes: 'data-modal-trigger="myDialog" type="button"'
      }
    },
    header: {
      attributes: 'id="myTitle"',
      tag: 'h3',
      class: 'heading heading--third-level',
      text: 'Save "untitled" document?'
    },
    description: {
      attributes: 'id="myDesc"',
      class: '',
      tag: 'div',
      text: 'You have made changes to "untitled.txt" that have not been saved. What do you want to do?'
    },
    main: {
      content: '',
      contentContext: ''
    },
    buttonClose: {
      tag: 'button',
      text: '',
      class: 'button--icon modal__js-close-button modal__close-button',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'button__icon modal__close-button-icon'
      },
      attributes: 'type="button" aria-label="close modal button, click to close the modal"'
    },
    script: true
  },
};
