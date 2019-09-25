module.exports = {
  context: {
    clear: {
      href: '#',
      text: 'Clear All',
      title: 'Clear all filters',
    },
    filters: [
      {
        label: 'label name',
        value: 'some value',
        ariaLabel: 'Disable filter: Label - Value',
        icon: {
          iconId: 'close',
          iconTitle: 'Close',
          class: 'active-filters__remove-icon'
        }
      },
      {
        label: 'label text which is long',
        value: 'another value little bit longer',
        ariaLabel: 'Disable filter: Label - Value',
        icon: {
          iconId: 'close',
          iconTitle: 'Close',
          class: 'active-filters__remove-icon'
        }
      },
      {
        label: 'short label',
        value: 'Not so short value text with some numbers 123123',
        ariaLabel: 'Disable filter: Label - Value',
        icon: {
          iconId: 'close',
          iconTitle: 'Close',
          class: 'active-filters__remove-icon'
        }
      }
    ]
  }
};
