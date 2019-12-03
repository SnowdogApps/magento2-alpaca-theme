module.exports = {
  preview: '@checkout',
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
