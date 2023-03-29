module.exports = {
  meta: {
    checkout: true
  },
  context: {
    heading: {
      tag: 'h1',
      class: 'heading--page',
      text: 'checkout'
    },
    progressBar: {
      steps: [
        {
          label: 'Shipping address'
        },
        {
          label: 'Payment',
          active: true
        }
      ]
    }
  }
}
