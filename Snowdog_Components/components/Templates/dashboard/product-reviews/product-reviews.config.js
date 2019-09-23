module.exports = {
  context: {
    reviews: {
      title: 'My Product Reviews',
      class: 'dashboard__item',
      table: {
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'Created'
                  },
                  {
                    childTag: 'th',
                    content: 'Product Name'
                  },
                  {
                    childTag: 'th',
                    content: 'Rating'
                  },
                  {
                    childTag: 'th',
                    content: 'Review'
                  },
                  {
                    childTag: 'th',
                    content: ''
                  }
                ]
              },
            ]
          },
          {
            mainTag: 'tbody',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Created:"',
                    content: '8/23/17'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Product Name:"',
                    content: 'Lorem Ipsum'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Rating:"',
                    content: '<div class="rating__summary"><span class="rating__fill" style="width: 80%;"><span>80%</span></span></div>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Review:"',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'See Details'
                  }
                ]
              },
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Created:"',
                    content: '1/2/17'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Product Name:"',
                    content: 'Lorem Ipsum2'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Rating:"',
                    content: '<div class="rating__summary"><span class="rating__fill" style="width: 40%;"><span>40%</span></span></div>'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Review:"',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    content: 'See details'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    button: {
      sides: [
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    }
  },
  variants: [
    {
      name: 'details',
      context: {
        title: {
          tag: 'h2',
          class: 'heading--fourth-level dashboard__title',
          text: 'Review Details'
        },
        product: {
          tag: 'div',
          class: 'dashboard__product',
          image: {
            dataSrc: '/images/catalog-grid-item/product-1_320_312.jpg'
          },
          name: {
            tag: 'h2',
            class: 'product-reviews__name',
            text: 'Juno Jacket'
          }
        },
        yourReview: {
          tag: 'h2',
          class: 'heading--fourth-level dashboard__title',
          text: 'Your review'
        }
      }
    }
  ]
}
