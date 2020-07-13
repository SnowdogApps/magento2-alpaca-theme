module.exports = {
  label: 'Block Content',
  name: 'multishipping-block-content',
  context: {
    row: [
      {
        box: [
          {
            class: '',
            titleText: 'Billing Address',
            contentTag: 'address',
            contentText: 'orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat euismod felis in ultrices. in tincidunt leo.',
            contentClass: 'margin-bottom-m',
            link: {
              button: {
                href: '#',
                title: 'Title',
                text: 'Change',
                class: 'button button--link padding-hz-xs action'
              }
            }
          },
          {
            class: '',
            titleText: 'Payment Method',
            contentTag: 'address',
            contentClass: 'margin-bottom-m',
            contentComponent: 'radio',
            contentContext: {
              name: 'radio1',
              legendClass: 'radio__legend--hidden',
              fieldsetClass: '',
              legend: 'Choose option',
              legendId: 'legend-id',
              options: [
                {
                  id: 'id1',
                  label: 'Option one'
                },
              ]
            },
          },
        ]
      }
    ]
  }
}
