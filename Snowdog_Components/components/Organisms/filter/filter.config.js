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
    title: {
      tag: 'h3',
      class: 'filter__heading',
      text: 'Filters'
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
        id: 'range',
        title: {
          tag: 'h3',
          class: 'filter__heading',
          text: 'Range'
        }
      }
    },
    {
      name: 'category',
      context: {
        class: 'margin-vc-xl'
      }
    },
    {
      name: 'swatch',
      context: {
        id: 'swatch',
        title: {
          class: 'filter__heading',
          tag: 'h3',
          text: 'Swatch'
        },
        options: [
          {
            text: 'XS',
            href: '#'
          },
          {
            class: 'filter__swatch-option--active',
            text: 'S',
            href: '#'
          },
          {
            text: 'M',
            href: '#'
          },
          {
            text: 'L',
            href: '#'
          },
          {
            text: 'XL',
            href: '#'
          }
        ]
      }
    },
    {
      name: 'color',
      context: {
        id: 'color',
        title: {
          class: 'filter__heading',
          tag: 'h3',
          text: 'Color'
        },
        options: [
          {
            href: '#',
            class: 'filter__color-option--active',
            attributes: 'style="background: #000"',
            label: 'Black'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: red"',
            label: 'Red'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: #5cb85c"',
            label: 'Green'
          },
          {
            href: '#',
            class: 'filter__color-option',
            attributes: 'style="background: #0275d8"',
            label: 'Blue'
          }
        ]
      }
    }
  ]
}
