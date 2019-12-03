module.exports = {
  preview: '@checkout',
  context: {
    heading: 'Payment Method',
    paymentMethods: [
      {
        label: 'Credit Card (Braintree)',
        id: 'braintree',
        logo: '/images/checkout/paypal-logo.png',
        active: true
      },
      {
        label: 'Check / Money order',
        id: 'checkmo'
      },
      {
        label: 'Cash On Delivery',
        id: 'cashondelivery'
      },
      {
        label: 'Bank Transfer Payment',
        id: 'banktransfer'
      }
    ]
  }
}
