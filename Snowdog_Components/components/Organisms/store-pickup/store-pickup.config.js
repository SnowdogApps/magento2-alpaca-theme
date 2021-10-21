module.exports = {
  title: 'Header module',
  context: {
    tabShippingButton: {
      tag: 'button',
      class: 'tab__trigger',
      text: 'Shipping',
      attributes: 'type="button"'
    },
    tabPickInStoreButton: {
      tag: 'button',
      class: 'tab__trigger',
      text: 'Pick in store',
      attributes: 'type="button"'
    },
    title: {
      tag: 'span',
      class: 'heading heading--second-level',
      text: 'Store'
    },
    selectOtherStoreButton: {
      tag: 'button',
      class: '',
      text: 'Select other',
      attributes: 'type="button"'
    }
  },
  variants: [
    {
      name: 'no-selection',
      context: {
        noSelection: {
          tag: 'p',
          class: '',
          text: 'We could not preselect pickup location based on available information, please select it manually.'
        },
        selectStoreButton: {
          tag: 'button',
          class: '',
          text: 'Select store',
          attributes: 'type="button"'
        },
        nextButton: {
          tag: 'button',
          class: '',
          text: 'Next',
          attributes: 'type="button"'
        }
      }
    }
  ]
}
