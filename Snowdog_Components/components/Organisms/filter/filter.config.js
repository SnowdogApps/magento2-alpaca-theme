module.exports = {
  default: 'checkbox',
  context: {
    id: 'checkbox',
    collapseIcon: {
      class: 'dropdown-list__icon',
      id: 'angle-down',
      title: 'Arrow down',
      hidden: true
    },
    contentClass: 'margin-xs',
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
    },
    {
      name: 'category',
      context: {
        class: 'margin-vc-m'
      }
    }
  ]
}
