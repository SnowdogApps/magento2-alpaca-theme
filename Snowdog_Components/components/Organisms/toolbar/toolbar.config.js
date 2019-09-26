module.exports = {
  context: {
    showMode: true,
    showSorter: true,
    showAmount: true,
    showLimit: true,
    amount: {
      class: 'toolbar__amount',
      prefix: 'Items',
      currentRange: '1-9',
      preposition: 'of',
      total: '12'
    },
    gridMode: {
      class: 'toolbar__mode-button toolbar__mode-button--active',
      attributes: 'aria-label="grid view"',
      icon: {
        id: 'grid',
        title: 'Grid',
        class: 'toolbar__mode-icon',
      }
    },
    listMode: {
      class: 'toolbar__mode-button',
      attributes: 'aria-label="list view"',
      icon: {
        id: 'list',
        title: 'List',
        class: 'toolbar__mode-icon',
      }
    },
    list: {
      href: '',
      icon: {
        id: 'list',
        title: 'List',
        class: 'toolbar__mode-icon',
      }
    },
    sortBy: {
      class: 'toolbar__sorter',
      label: {
        attributes: '',
        text: 'Sort By',
        class: 'toolbar__sorter-label margin-right-s margin-bottom-0'
      },
      field: {
        id: 'sorter',
        name: 'sorter',
        class: 'toolbar__sorter-select'
      },
      options: [
        {
          text: 'Product Name',
          value: 'product-name'
        },
        {
          text: 'Price',
          value: 'price'
        },
      ]
    },
    limiter: {
      select: {
        class: 'toolbar__limiter margin-0',
        label: {
          attributes: '',
          text: 'Show',
          class: 'toolbar__limiter-label margin-right-s margin-bottom-0'
        },
        field: {
          id: 'limiter',
          name: 'limiter',
          class: 'toolbar__limiter-select'
        },
        options: [
          {
            text: '12',
            value: '12'
          },
          {
            text: '24',
            value: '24'
          },
          {
            text: '36',
            value: '36'
          },
        ]
      },
      suffix: ''
    }
  }
}
