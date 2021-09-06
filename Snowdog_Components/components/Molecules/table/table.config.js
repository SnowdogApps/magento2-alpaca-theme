module.exports = {
  context: {
    captionText: 'This is a table. Binded text in caption should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
    mainTags: [
      {
        mainTag: 'thead',
        rowTags: [
          {
            rowTag: 'tr',
            rowTagAttributes: 'role="row"',
            childTags: [
              {
                childTag: 'th',
                content: 'Example heading',
                childTagAttributes: 'scope="col" role="columnheader"'
              },
              {
                childTag: 'th',
                content: 'Example heading',
                childTagAttributes: 'scope="col" role="columnheader"'
              },
              {
                childTag: 'th',
                content: 'Example heading',
                childTagAttributes: 'scope="col" role="columnheader"'
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
            rowTagAttributes: 'role="row"',
            childTags: [
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              }
            ]
          },
          {
            rowTag: 'tr',
            rowTagAttributes: 'role="row"',
            childTags: [
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              }
            ]
          },
          {
            rowTag: 'tr',
            rowTagAttributes: 'role="row"',
            childTags: [
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              },
              {
                childTag: 'td',
                childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                content: 'Example content'
              }
            ]
          }
        ]
      },
      {
        mainTag: 'tfoot',
        rowTags: [
          {
            rowTag: 'tr',
            rowTagAttributes: 'role="row"',
            childTags: [
              {
                childTag: 'td',
                content: 'Footer content',
                childTagAttributes: 'colspan=\'3\' role="gridcell"'
              }
            ]
          }
        ]
      }
    ]
  },
  variants: [
    {
      name: 'odd-even',
      context: {
        class: 'table--odd-even'
      }
    },
    {
      name: 'scope-row',
      context: {
        class: 'table--scope-row',
        mainTags: [
          {
            mainTag: 'tbody',
            rowTags: [
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'th',
                    childTagAttributes: 'data-th="Example heading:" scope="row" role="rowheader"',
                    content: 'Example content'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                    content: 'Example content'
                  }
                ]
              },
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'th',
                    childTagAttributes: 'data-th="Example heading:" scope="row" role="rowheader"',
                    content: 'Example content'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                    content: 'Example content'
                  }
                ]
              },
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'th',
                    childTagAttributes: 'data-th="Example heading:" scope="row" role="rowheader"',
                    content: 'Example content'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Example heading:" role="gridcell"',
                    content: 'Example content'
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    {
      name: 'tfoot-scope-row',
      context: {
        class: 'table--tfoot-scope-row',
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'th',
                    content: 'Example header',
                    childTagAttributes: 'class="col item full-width" role="columnheader" scope="col"'
                  },
                  {
                    childTag: 'th',
                    content: 'Example header',
                    childTagAttributes: 'class="col item" role="columnheader" scope="col"'
                  },
                  {
                    childTag: 'th',
                    content: 'Example header',
                    childTagAttributes: 'class="col item" role="columnheader" scope="col"'
                  },
                  {
                    childTag: 'th',
                    content: 'Example header',
                    childTagAttributes: 'class="col item" role="columnheader" scope="col"'
                  }
                ]
              }
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
                    childTagAttributes: 'class="col item" data-th="Example item"',
                    content: 'Example item'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'class="col item" data-th="Example content"',
                    content: 'Example content'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'class="col item" data-th="Example content"',
                    content: 'Example content'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'class="col item" data-th="Example content"',
                    content: 'Example content'
                  },
                ]
              },
            ]
          },
          {
            mainTag: 'tfoot',
            rowTags: [
              {
                rowTag: 'tr',
                childTags: [
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="row" colspan="3"',
                    content: 'Example item'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Example item"',
                    content: 'Example value'
                  }
                ],
              },
            ]
          }
        ]
      }
    }
  ]
};
