module.exports = {
  context: {
    heading: {
      tag: 'h2',
      class: 'active-filters__heading',
      text: 'Now Shopping by'
    },
    clear: {
      href: '#',
      text: 'Clear All',
      title: 'Clear all filters',
      class: 'button button--fluid button--secondary margin-top-l'
    },
    removeIcon: {
      id: 'close',
      title: 'Close',
      hidden: true
    },
    filters: [
      {
        buttonClass: 'button button--icon button--icon-light',
        label: 'label name',
        value: 'some value',
        ariaLabel: 'Disable filter: Label - Value'
      },
      {
        buttonClass: 'button button--icon button--icon-light',
        label: 'label text which is long',
        value: 'another value little bit longer',
        ariaLabel: 'Disable filter: Label - Value'
      },
      {
        buttonClass: 'button button--icon button--icon-light',
        label: 'short label',
        value: 'Not so short value text with some numbers 123123',
        ariaLabel: 'Disable filter: Label - Value'
      }
    ]
  }
};
