module.exports = {
  title: 'Header module',
  context: {
    sideMenuTrigger: {
      tag: 'button',
      class: 'button--icon-light modal-trigger side-menu__trigger',
      attributes: 'type="button" data-modal-trigger="side-menu" aria-label="Open menu"',
      icon: {
        id: 'mobile-menu',
        title: 'Mobile-menu',
        class: 'side-menu__trigger-icon',
        hidden: true
      },
    },
    sideMenuModal: {
      trigger: false,
      modal: {
        id: 'side-menu',
        class: 'modal--tertiary side-menu__modal'
      },
      modalMiddle: true,
      modalComponent: {
        content: 'dropdown-list--with-nested'
      },
      modalBottom: true,
      modalBottomActions: [
        {
          content: 'contact-bar--vertical'
        }
      ],
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon modal__close-button-icon'
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
    }
  }
}
