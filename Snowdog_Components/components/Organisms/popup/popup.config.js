module.exports = {
  context: {
    popupTrigger: true,
    buttonPopupTrigger: {
      class: 'popup-trigger',
      text: 'Popup trigger button',
      attributes: 'data-popuptrigger="popup-1" type="button"'
    },
    class: '',
    popupId: 'popup-1',
    content: 'button',
    buttonClose: {
      tag: 'button',
      text: '',
      class: 'button--icon button--rotate-icon popup__close-button',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'button__icon popup__close-button-icon'
      },
      attributes: 'type="button" aria-label="close popup button, click to close the popup"'
    },
    script: true
  }
};
