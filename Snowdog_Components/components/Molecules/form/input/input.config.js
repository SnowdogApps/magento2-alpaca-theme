module.exports = {
  context: {
    attributes: '',
    class: '',
    label: {
      attributes: '',
      text: 'Label text',
      hidden: false
    },
    field: {
      attributes: '',
      class: '',
      id: 'field-id',
      name: 'field-name',
      placeholder: 'First and last name',
      type: 'text'
    }
  },
  variants: [
    {
      name: 'inline',
      context: {
        class: 'input--inline'
      }
    }
  ]
};
