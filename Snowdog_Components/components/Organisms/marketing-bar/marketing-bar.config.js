module.exports = {
  context: {
    closeIcon: 'close',
    text: 'Subscribe and get 10$ for Shopping! Lorem ipsum text in marketing bar.',
    class: 'marketing-bar--closed',
    attributes: 'data-type="marketing-bar"',
    closeButton: {
      tag: 'button',
      text: '',
      class: 'button--rotate-icon marketing-bar__close',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'button__icon marketing-bar__close-icon'
      },
      attributes: 'type="button" aria-label="Close marketing bar"',
    },
  },
};
