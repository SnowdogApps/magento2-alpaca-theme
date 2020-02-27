module.exports = {
  context: {
    statusClass: 'steps__status--4',
    steps: [
      {
        class: 'steps__item--completed',
        attributes: 'data-number="1" data-label="1. Processing"'
      },
      {
        class: 'steps__item--failed',
        attributes: 'data-number="2" data-label="2. Approved"'
      },
      {
        class: 'steps__item--failed',
        attributes: 'data-number="3" data-label="3. Delivered"'
      },
      {
        class: 'steps__item--completed',
        attributes: 'data-number="4" data-label="4. Completed"'
      }
    ]
  }
}
