module.exports = {
  label: 'Quote Totals',
  name: 'quote-totals',
  context: {
    tableTotals: {
      class: 'quote-table-totals',
      mainTags: [
        {
          mainTag: 'tfoot',
          rowTags: [
            {
              rowTag: 'tr',
              rowTagAttributes: 'class="catalog_price_table" role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'colspan="2" role="gridcell"',
                  contentComponent: 'table',
                  contentContext: {
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
                                content: '<strong>Subtotal (Excl. Tax)</strong>',
                                childTagAttributes: 'scope="row" role="gridcell"'
                              },
                              {
                                childTag: 'td',
                                content: '$3,117.00',
                                childTagAttributes: 'data-th="Subtotal (Excl. Tax)" role="gridcell"'
                              }
                            ]
                          },
                          {
                            rowTag: 'tr',
                            rowTagAttributes: 'role="row"',
                            childTags: [
                              {
                                childTag: 'th',
                                content: '<strong>Subtotal (Incl. Tax)</strong>',
                                childTagAttributes: 'scope="row" role="gridcell"'
                              },
                              {
                                childTag: 'td',
                                content: '$3,117.00',
                                childTagAttributes: 'data-th="Subtotal (Incl. Tax)" role="gridcell"'
                              }
                            ]
                          },
                          {
                            rowTag: 'tr',
                            rowTagAttributes: 'role="row"',
                            childTags: [
                              {
                                childTag: 'th',
                                content: '<strong>Discount</strong>',
                                childTagAttributes: 'scope="row" role="gridcell"'
                              },
                              {
                                childTag: 'td',
                                content: '$0.00',
                                childTagAttributes: 'data-th="Discount" role="gridcell"'
                              }
                            ]
                          },
                          {
                            rowTag: 'tr',
                            rowTagAttributes: 'role="row"',
                            childTags: [
                              {
                                childTag: 'th',
                                content: '<strong>Estimated Tax</strong>',
                                childTagAttributes: 'scope="row" role="gridcell"'
                              },
                              {
                                childTag: 'td',
                                content: '$0.00',
                                childTagAttributes: 'data-th="Estimated Tax" role="gridcell"'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                  //content: 'duspa'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  content: '<strong>Quote Subtotal (Excl. Tax)</strong>',
                  childTagAttributes: 'scope="row" role="gridcell"'
                },
                {
                  childTag: 'td',
                  content: '$3,117.00',
                  childTagAttributes: 'data-th="Quote Subtotal (Excl. Tax)" role="gridcell"'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  content: '<strong>Estimated Tax</strong>',
                  childTagAttributes: 'scope="row" role="gridcell"'
                },
                {
                  childTag: 'td',
                  content: '$0.00',
                  childTagAttributes: 'data-th="Estimated Tax" role="gridcell"'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  content: '<strong>Quote Grand Total (Incl. Tax)</strong>',
                  childTagAttributes: 'scope="row" role="gridcell"'
                },
                {
                  childTag: 'td',
                  content: '<strong>$3,117.00</strong>',
                  childTagAttributes: 'data-th="Quote Grand Total (Incl. Tax)" role="gridcell"'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
