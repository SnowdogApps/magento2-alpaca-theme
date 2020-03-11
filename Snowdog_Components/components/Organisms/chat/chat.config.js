module.exports = {
  context: {
    message: {
      incoming: {
        username: 'Admin',
        text: 'Please, provide us with additional details and attach photos if possible so that we could approve your request.',
        date: '2019-08-20 13:05:27'
      },
      sent: {
        username: 'User',
        text: 'Hello. I want to return this item because of the material, it is not as good as I expected!',
        date: '2019-08-20 13:06:33'
      }
    },
    input: {
      label: {
        hidden: true
      },
      field: {
        class: 'chat__textarea',
        placeholder: 'Message'
      }
    },
    button: {
      text: 'Send'
    }
  }
}
