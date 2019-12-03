module.exports = {
  collated: true,
  context: {
    class: '',
    attributes: '',
    text: 'This is simple info message. Have a nice day! If you believe it is the right one you can ignore this notice.'
  },
  variants: [
    {
      name: 'success',
      context: {
        class: 'message--success',
        text: 'You have added this fantastic product to the shopping cart.'
      }
    },
    {
      name: 'error',
      context: {
        class: 'message--error',
        text: 'Please specify product\'s required options(s).'
      }
    }
  ]
}
