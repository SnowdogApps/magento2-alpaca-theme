module.exports = {
  meta: {
    checkout: true
  },
  context: {
    button: {
      tag: 'button',
      class: 'shipping-information__button',
      text: '',
      icon: {
        id: 'edit',
        title: 'Arrow left',
        class: 'button__icon',
      },
      attributes: 'type="button" aria-label="click to do something"'
    }
  }
}
