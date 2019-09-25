module.exports = {
  collated: true,
  context: {
    class: '',
    attributes: '',
    text: 'This is simple info message. Have a nice day!'
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
