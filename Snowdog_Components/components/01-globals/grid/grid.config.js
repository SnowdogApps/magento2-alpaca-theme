module.exports = {
  preview: '@docs-only-styles',
  context: {
    title: 'Responsive',
    grids: [
      [
        'col-xs-12 col-sm-3 col-md-2 col-lg-1',
        'col-xs-6 col-sm-6 col-md-8 col-lg-10',
        'col-xs-6 col-sm-3 col-md-2 col-lg-1'
      ],
      [
        'col-xs-12 col-sm-3 col-md-2 col-lg-1',
        'col-xs-12 col-sm-9 col-md-10 col-lg-11'
      ],
      [
        'col-xs-10 col-sm-6 col-md-8 col-lg-10',
        'col-xs-2 col-sm-6 col-md-4 col-lg-2'
      ]
    ]
  },
  variants: [
    {
      name: 'fluid',
      context: {
        title: 'Fluid',
        grids: [
          [
            'col-xs-12'
          ],
          [
            'col-xs-1',
            'col-xs-11'
          ],
          [
            'col-xs-2',
            'col-xs-10'
          ],
          [
            'col-xs-3',
            'col-xs-9'
          ],
          [
            'col-xs-4',
            'col-xs-8'
          ],
          [
            'col-xs-5',
            'col-xs-7'
          ],
          [
            'col-xs-6',
            'col-xs-6'
          ]
        ]
      }
    },
    {
      name: 'auto Width',
      context: {
        title: 'Auto Width',
        grids: [
          [
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs'
          ],
          [
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs'
          ]
        ]
      }
    },
    {
      name: 'reordering',
      context: {
        title: 'Reordering',
        grids: [
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2 first-xs'
          ],
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2 last-xs',
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]
        ]
      }
    },
    {
      name: 'distribution - around',
      context: {
        title: 'Distribution - around',
        rowClass: 'around-xs',
        grids: [
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]
        ]
      }
    },
    {
      name: 'distribution - between',
      context: {
        title: 'Distribution - between',
        rowClass: 'between-xs',
        grids: [
          [
            'col-xs-2',
            'col-xs-2',
            'col-xs-2'
          ]
        ]
      }
    },
    {
      name: 'alignment - start',
      context: {
        title: 'Alignment - start',
        rowClass: 'start-xs',
        grids: [
          ['col-xs-6']
        ]
      }
    },
    {
      name: 'alignment - center',
      context: {
        title: 'Alignment - center',
        rowClass: 'center-xs',
        grids: [
          ['col-xs-6']
        ]
      }
    },
    {
      name: 'alignment - end',
      context: {
        title: 'Alignment - end',
        rowClass: 'end-xs',
        grids: [
          ['col-xs-6']
        ]
      }
    },
    {
      name: 'alignment - top',
      context: {
        title: 'Alignment - top',
        rowClass: 'end-xs',
        grids: [
          [
            'col-xs col-large',
            'col-xs'
          ]
        ]
      }
    },
    {
      name: 'alignment - middle',
      context: {
        title: 'Alignment - middle',
        rowClass: 'middle-xs',
        grids: [
          [
            'col-xs col-large',
            'col-xs'
          ]
        ]
      }
    },
    {
      name: 'alignment - bottom',
      context: {
        title: 'Alignment - bottom',
        rowClass: 'bottom-xs',
        grids: [
          [
            'col-xs col-large',
            'col-xs'
          ]
        ]
      }
    },
    {
      name: 'reversing',
      context: {
        title: 'Reversing',
        rowClass: 'reverse',
        grids: [
          [
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs',
            'col-xs'
          ]
        ]
      }
    }
  ]
}
