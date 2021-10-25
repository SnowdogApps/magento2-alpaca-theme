module.exports = {
  context: {
    search: {
      input: {
        attributes: '',
        class: '',
        label: {
          attributes: '',
          text: 'Search',
          hidden: false
        },
        field: {
          attributes: '',
          class: '',
          id: 'search',
          name: 'search',
          placeholder: 'Search with postcode or city name...',
          type: 'text'
        }
      },
      button: {
        tag: 'button',
        class: '',
        attributes: 'type="submit"',
        text: 'Search'
      }
    },
    description: {
      tag: 'p',
      class: '',
      text: 'Please provide postcode or city name to find nearest pickup locations.'
    }
  }
};
