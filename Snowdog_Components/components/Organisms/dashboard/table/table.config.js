module.exports = {
  label: 'Table',
  name: 'dashboard-table',
  context: {
    title: 'Recent Orders',
    link: 'View All',
    table: {
      captionText: 'This is a table. Binded text in caption should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
      class: 'dashboard-table__table',
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
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Order #'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Date'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Ship To'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Order'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Total'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Status'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Action',
                  contentVisuallyHidden: true
                },
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
                  childTagAttributes: 'data-th="Order #:" role="gridcell"',
                  content: '<a href="#">000000000123</a>'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Date:" role="gridcell"',
                  content: '6/23/12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Ship To:" role="gridcell"',
                  content: 'Store Alpaca'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order:" role="gridcell"',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Total:" role="gridcell"',
                  content: '$ 123,12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Pending'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View Order</a>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order #:" role="gridcell"',
                  content: '<a href="#">000000000124</a>'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Date:" role="gridcell"',
                  content: '8/23/12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Ship To:" role="gridcell"',
                  content: 'Store Alpaca2'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order:" role="gridcell"',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Total:" role="gridcell"',
                  content: '$ 1232,12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Pending'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View Order</a>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order #:" role="gridcell"',
                  content: '<a href="#">000000000125</a>'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Date:" role="gridcell"',
                  content: '2/23/12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Ship To:" role="gridcell"',
                  content: 'Store Alpaca3'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Order:" role="gridcell"',
                  content: 'Production Facility'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Total:" role="gridcell"',
                  content: '$ 1123,12'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Done'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View Order</a>'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
