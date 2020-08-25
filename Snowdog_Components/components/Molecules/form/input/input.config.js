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
    },
    {
      name: 'password',
      context: {
        class: '',
        field: {
          type: 'password',
          placeholder: 'Your password',
        },
        buttonAttributes: 'aria-label="Show/hide password"',
        passwordIconView: {
          id: 'visibility-off',
          title: 'view password icon',
          hidden: true,
          class: 'icon--secondary input__button-pass-icon-view'
        },
        passwordIconHide: {
          id: 'visibility',
          title: 'hide password icon',
          hidden: true,
          class: 'icon--secondary input__button-pass-icon-hide'
        },
        script: true
      }
    },
    {
      name: 'error',
      context: {
        class: 'required',
        field: {
          attributes: 'required',
          class: 'mage-error'
        },
        errorText: 'This is required field'
      }
    },
    {
      name: 'datepicker',
      context: {
        class: 'date',
        field: {
          class: 'datetime-picker'
        },
      }
    }
  ]
};
