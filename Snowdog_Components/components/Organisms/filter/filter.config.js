module.exports = {
  default: 'checkbox',
  context: {
    id: 'checkbox',
    collapseIcon: {
      class: 'dropdown-list__icon',
      iconId: 'expand-down',
      iconTitle: 'Arrow down',
      attributes: 'aria-hidden="true"'
    },
    checkboxes: [
      {
        class: '',
        href: '#',
        label: {
          text: 'Value 1',
        }
      },
      {
        class: 'checkbox--link-checked',
        href: '#',
        label: {
          text: 'Value 2'
        }
      },
      {
        class: '',
        href: '#',
        label: {
          text: 'Value 3',
        }
      }
    ]
  },
  variants: [
    {
      name: 'range',
      context: {
        id: 'range'
      }
    }
  ]
}
