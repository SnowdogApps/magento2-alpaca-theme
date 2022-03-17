module.exports = {
  meta: {
    checkout: true
  },
  context: {
    steps: [
      {
        label: 'Shipping address',
        active: true
      },
      {
        label: 'Payment'
      }
    ]
  }
}
