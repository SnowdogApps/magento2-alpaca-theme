module.exports = {
  context: {
    rowClass: 'row',
    columns: [
      {
        class: 'col-xs-12',
        elements: [
          {
            contentElement: 'heading',
            contentContext: {
              tag: 'h2',
              class: 'content-block__heading',
              text: 'Lorem ipsum'
            }
          },
          {
            contentElement: 'paragraph',
            contentContext: {
              tag: 'span',
              class: 'content-block__description',
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text'
            }
          },
          {
            contentElement: 'link',
            contentContext: {
              class: 'content-block__link'
            }
          }
        ]
      }
    ]
  },
  variants: [
    {
      name: 'Secondary',
      context: {
        class: 'content-block--secondary',
        rowClass: 'row between-lg evenly-xl',
        columns: [
          {
            class: 'col-xs-12 col-lg-4 col-xl-3',
            elements: [
              {
                contentElement: 'heading',
                contentContext: {
                  tag: 'h2',
                  class: 'heading--first-level content-block__heading content-block__heading--secondary',
                  text: 'Lorem ipsum is simply'
                }
              }
            ]
          },
          {
            class: 'col-xs-12 col-lg-7 col-xl-6',
            elements: [
              {
                contentElement: 'paragraph',
                contentContext: {
                  tag: 'span',
                  class: 'content-block__introduction',
                  text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s'
                }
              },
              {
                contentElement: 'paragraph',
                contentContext: {
                  tag: 'span',
                  class: 'content-block__description'
                }
              }
            ]
          }
        ]
      }
    }
  ]
}
