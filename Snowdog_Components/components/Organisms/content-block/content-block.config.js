module.exports = {
  context: {
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
              text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
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
      name: '2-columns',
      context: {
        class: 'content-block--2-columns',
        columns: [
          {
            class: 'col-xs-12 col-md-4',
            elements: [
              {
                contentElement: 'heading',
                contentContext: {
                  tag: 'h2',
                  class: 'content-block__heading  content-block__heading--secondary',
                  text: 'Lorem ipsum is simply'
                }
              }
            ]
          },
          {
            class: 'col-xs-12 col-md-8',
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
