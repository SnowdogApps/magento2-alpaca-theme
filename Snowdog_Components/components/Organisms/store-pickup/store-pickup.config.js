module.exports = {
  title: 'Header module',
  context: {
    tabShippingButtonText: 'Shipping',
    tabPickInStoreButtonText: 'Pick in store',
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
    },
    selectedStore: {
      name: {
        tag: 'p',
        class: '',
        text: 'Good Wood Store'
      },
      address: {
        tag: 'p',
        class: '',
        text: '119 Timberbrook Lane <br> Denver, Colorado 80216 <br> United States <br> 970-355-8188'
      },
      description: {
        tag: 'p',
        class: '',
        text: 'The store is located next to the church.'
      }
    }
  },
  variants: [
    {
      name: 'no-selection',
      context: {
        selectedStore: false,
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
