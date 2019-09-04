module.exports = {
  context: {
    closeIcon: 'close',
    text: 'Subscribe and get 10$ for Shopping!',
    class: 'marketing-bar--closed',
    attributes: 'data-type="marketing-bar"',
    closeButton: {
      tag: 'button',
      text: '',
      class: 'button--icon marketing-bar__close',
      icon: {
        id: 'close',
        title: 'Close',
        class: 'icon marketing-bar__close-icon'
      },
      attributes: 'type="button" aria-label="Close marketing bar"',
    },
  },
};
