module.exports = {
  context: {
    script: true,
    modalContainer: {
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
    buttonClose: {
      tag: 'button',
      text: '',
      class: 'button--rotate-icon modal__close-button',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'button__icon modal__close-button-icon'
      },
      attributes: 'type="button" aria-label="close modal button, click to close the modal"'
    },
    modalTop: true,
    heading: {
      attributes: 'id="myTitle"',
      tag: 'h3',
      class: 'heading heading--third-level',
      text: 'Save "untitled" document?'
    },
    subheading: {
      tag: 'p',
      class: '',
      text: 'Some text'
    },
    modalMiddle: false,
    modalDescription: {
      attributes: 'id="myDesc"',
      class: '',
      tag: 'div',
      text: 'You have made changes to "untitled.txt" that have not been saved. What do you want to do?'
    },
    modalComponent: {
      content: 'button',
      contentContext: ''
    },
    modalBottom: true,
    modalBottomActions: [
      {
        content: 'button--secondary',
        contentContext: {
          text: 'Cancel'
        }
      },
      {
        content: 'button',
        contentContext: {
          text: 'Save'
        }
      }
    ]
  },
  variants: [
    {
      name: 'secondary',
      context: {
        modal: {
          class: 'modal--secondary'
        }
      }
    },
    {
      name: 'tertiary',
      context: {
        modal: {
          class: 'modal--tertiary'
        }
      }
    }
  ]
};
