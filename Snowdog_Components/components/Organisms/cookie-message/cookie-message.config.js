module.exports = {
  title: 'Message',
  context: {
    linkAnchor: 'Action\'s details',
    ariaLabel: 'Cookie policy message',
    closeClass: 'button--rotate-icon',
    closeIcon: {
      id: 'close',
      title: 'Close',
      class: 'button__icon cookie-message__close-icon',
      hidden: true
    },
    closeLabel: false,
    closeAriaLabel: 'Close cookie message',
    text: '<a href="#" class="link--invert">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
    class: 'cookie-message',
    dataType: 'cookie'
  },
  variants: [
    {
      name: 'Button label',
      context: {
        linkAnchor: 'Details',
        ariaLabel: 'Cookie policy message',
        closeIcon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon cookie-message__close-icon',
          hidden: true
        },
        closeLabel: 'Close',
        closeAriaLabel: false,
        text: 'This site uses cookies. <a href="#" class="link--invert">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
        class: 'cookie-message--button-label',
        dataType: 'cookie1'
      }
    }
  ]
};
