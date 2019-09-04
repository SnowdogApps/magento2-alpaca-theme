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
    }
  ]
};
