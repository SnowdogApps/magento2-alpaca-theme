module.exports = {
  title: 'Message',
  context: {
    linkAnchor: 'Action\'s details',
    ariaLabel: 'Cookie policy message',
    closeIcon: 'close',
    closeLabel: false,
    closeAriaLabel: 'Close cookie message',
    text: '<a href="#" class="cookie-message__link">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
    class: 'cookie-message',
    dataType: 'cookie'
  },
  variants: [
    {
      name: 'With button',
      context: {
        linkAnchor: 'Details',
        ariaLabel: 'Cookie policy message',
        closeIcon: 'close',
        closeLabel: 'Close',
        closeAriaLabel: false,
        text: 'This site uses cookies. <a href="#" class="cookie-message__link">Example link</a> Find out more about their purpose and settings in your browser. By browsing the site you are agreeing to use cookies according to your browser settings.',
        class: 'cookie-message--with-button',
        dataType: 'cookie1'
      }
    }
  ]
};
