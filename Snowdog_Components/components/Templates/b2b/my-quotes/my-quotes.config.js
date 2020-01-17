module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'My quotes',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My quotes'
    },
    switchButton: {
      text: 'Show my quotes'
    },
    toolbar: {
      class: 'toolbar--secondary',
      showMode: false,
      showSorter: false,
      showAmount: true,
      showLimit: true,
      showPager: true
    },
    quotesTable: {
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
                  content: 'Quote Name',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Created',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Created By',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Status',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Last Updated',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Quote Total',
                  childTagAttributes: 'scope="col" role="columnheader"'
                },
                {
                  childTag: 'th',
                  content: 'Action',
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
                  childTagAttributes: 'data-th="Quote Name:" role="gridcell"',
                  content: 'Example quote Name'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created By:" role="gridcell"',
                  content: 'John Snow'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Submitted'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Last Updated:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Total:" role="gridcell"',
                  content: '$10,059.50'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View</a>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Name:" role="gridcell"',
                  content: 'Example quote Name'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created By:" role="gridcell"',
                  content: 'John Snow'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Submitted'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Last Updated:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Total:" role="gridcell"',
                  content: '$10,059.50'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View</a>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Name:" role="gridcell"',
                  content: 'Example quote Name'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Created By:" role="gridcell"',
                  content: 'John Snow'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Status:" role="gridcell"',
                  content: 'Submitted'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Last Updated:" role="gridcell"',
                  content: '19/12/2019'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Quote Total:" role="gridcell"',
                  content: '$10,059.50'
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action:" role="gridcell"',
                  content: '<a href="#">View</a>'
                }
              ]
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

      }
    }
  ]
}
