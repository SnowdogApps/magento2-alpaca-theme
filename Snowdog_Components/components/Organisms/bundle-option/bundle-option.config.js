module.exports = {
  default: 'radio',
  context: {
    title: {
      tag: 'h4',
      class: 'bundle-option__title',
      text: 'Sprite Stasis Ball',
      attributes: 'id="radio-options-title"'
    },
    qty: {
      class: 'bundle-option__qty margin-bottom-0',
      label: {
        class: 'bundle-option__qty-label margin-0',
        text: 'Qty:'
      },
      field: {
        type: 'number',
        class: 'bundle-option__qty-input margin-left-xs text-center',
        id: 'qty1',
        name: 'qty1',
        placeholder: '',
        attributes: 'min="0"'
      }
    },
    radio: {
      legend: false,
      legendId: 'radio-options-title',
      class: 'bundle-option__radio margin-bottom-xs',
      options: [
        {
          id: 'id1',
          label: 'Sprite Stasis Ball 55 cm'
        },
        {
          id: 'id2',
          label: 'Sprite Stasis Ball 65 cm'
        },
        {
          id: 'id3',
          label: 'Sprite Stasis Ball 75 cm'
        }
      ]
    }
  },
  variants: [
    {
      name: 'checkbox',
      context: {
        title: {
          text: 'Sprite Yoga Strap',
          tag: 'h4',
          attributes: ''
        },
        checkboxes: [
          {
            id: 'checkbox-1',
            name: 'checkbox-name-1',
            label: {
              text: '1 x Sprite Yoga Strap 6 foot'
            }
          },
          {
            id: 'checkbox-2',
            name: 'checkbox-name-2',
            label: {
              text: '1 x Sprite Yoga Strap 8 foot'
            }
          }
        ],
        qty: false
      }
    },
    {
      name: 'select',
      context: {
        title: {
          text: 'Sprite Foam Roller',
          tag: 'h4',
          attributes: ''
        },
        select: {
          class: 'bundle-option__select margin-bottom-m',
          label: {
            class: 'label--hidden'
          },
          field: {
            class: 'bundle-option__select'
          },
          options: [
            {
              text: 'Sprite Foam Roller'
            },
            {
              text: 'Sprite Foam Roller S'
            },
            {
              text: 'Sprite Foam Roller XL',
              attributes: false
            }
          ]
        },
        qty: {
          field: {
            id: 'qty2',
            name: 'qty2'
          }
        }
      }
    }
  ]
}
