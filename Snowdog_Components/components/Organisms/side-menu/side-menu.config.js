module.exports = {
  title: 'Header module',
  context: {
    sideMenuTrigger: {
      tag: 'button',
      class: 'modal-trigger side-menu__trigger',
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
      modalContainer: {
        class: 'side-menu__container'
      },
      modalContent: {
        class: 'side-menu__content'
      },
      modalMiddle: true,
      modalMiddleClass: 'side-menu__content-middle',
      modalComponent: {
        content: 'dropdown-list--with-nested'
      },
      modalBottom: true,
      modalBottomClass: 'side-menu__content-bottom',
      modalBottomActionsClass: 'side-menu__bottom-actions',
      modalBottomActions: [
        {
          content: 'contact-bar--vertical',
          class: 'side-menu__bottom-action'
        }
      ],
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button side-menu__close-button',
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
