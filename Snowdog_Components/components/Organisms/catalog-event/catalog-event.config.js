module.exports = {
  context: {
    class: '',
    heading: {
      tag: 'h2',
      class: 'heading heading--second-level margin-bottom-0',
      text: 'Sale ends in',
    },
    date: {
      class: 'list',
      elements: [
        {
          class: 'list__item',
          value: {
            class: 'value',
            text: '5'
          },
          label: {
            class: 'label',
            text: 'Dayclears'
          }
        },
        {
          class: 'list__item',
          value: {
            class: 'value',
            text: '23'
          },
          label: {
            class: 'label',
            text: 'Hrs'
          }
        },
        {
          class: 'list__item',
          value: {
            class: 'value',
            text: '45'
          },
          label: {
            class: 'label',
            text: 'Mins'
          }
        }
      ]
    }
  },
  variants: [
    {
      name: 'slider item',
      context: {
        class: 'catalog-event--slider-item',
        heading: {
          tag: 'h2',
          class: 'heading heading--second-level',
          text: 'Hoodies & Sweatshirts',
        },
        subheading: {
          tag: 'h3',
          class: 'heading heading--third-level margin-bottom-0',
          text: 'Sale ends in',
        },
        date: {
          class: 'list',
          elements: [
            {
              class: 'list__item',
              value: {
                class: 'value',
                text: '5'
              },
              label: {
                class: 'label',
                text: 'Dayclears'
              }
            },
            {
              class: 'list__item',
              value: {
                class: 'value',
                text: '23'
              },
              label: {
                class: 'label',
                text: 'Hrs'
              }
            },
            {
              class: 'list__item',
              value: {
                class: 'value',
                text: '45'
              },
              label: {
                class: 'label',
                text: 'Mins'
              }
            }
          ]
        },
        button: {
          tag: 'a',
          class: 'catalog-event__button',
          attributes: 'href="#"',
          text: 'Go to sale'
        }
      }
    }
  ]
}
