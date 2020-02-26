module.exports = {
  context: {
    steps: [
      {
        label: '1. Processing',
        class: 'steps__item--completed'
      },
      {
        label: '2. Approved',
        class: 'steps__item--failed'
      },
      {
        label: '3. Delivered',
        class: 'steps__item--failed'
      },
      {
        label: '3. Delivered',
        class: 'steps__item--checked'
      },
      {
        label: '3. Delivered',
        class: 'steps__item--disabled'
      },
      {
        label: '4. Completed',
        class: 'steps__item--completed'
      }
    ]
  }
}
