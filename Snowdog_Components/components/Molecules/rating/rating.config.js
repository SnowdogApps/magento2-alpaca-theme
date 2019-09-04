module.exports = {
  context: {
    ariaLabel: 'Average rating: 72%',
    title: 'Average rating: 72%',
    star: {
      attributes: 'style="width: 72%"'
    }
  },
  variants: [
    {
      name: 'rate',
      context: {
        script: true,
        star: {
          attributes: ''
        },
        rateItems: [
          {
            id: 'Rating_1',
            name: 'ratings[1]',
            labelText: 'Rate option, 1 of 5. Click to vote'
          },
          {
            id: 'Rating_2',
            name: 'ratings[2]',
            labelText: 'Rate option, 2 of 5. Click to vote'
          },
          {
            id: 'Rating_3',
            name: 'ratings[3]',
            labelText: 'Rate option, 3 of 5. Click to vote'
          },
          {
            id: 'Rating_4',
            name: 'ratings[4]',
            labelText: 'Rate option, 4 of 5. Click to vote'
          },
          {
            id: 'Rating_5',
            name: 'ratings[5]',
            labelText: 'Rate option, 5 of 5. Click to vote'
          }
        ]
      }
    }
  ]
}
