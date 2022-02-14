module.exports = {
  meta: {
    checkout: true
  },
  title: 'Header module',
  context: {
    tabShippingButtonText: 'Shipping',
    tabPickInStoreButtonText: 'Pick in store',
    title: {
      tag: 'span',
      class: 'heading heading--second-level store-pickup__heading',
      text: 'Store'
    },
    selectedStore: {
      name: {
        tag: 'p',
        class: 'store-pickup__paragraph',
        text: 'Good Wood Store'
      },
      address: {
        tag: 'p',
        class: 'store-pickup__paragraph',
        text: '119 Timberbrook Lane <br> Denver, Colorado 80216 <br> United States <br> 970-355-8188'
      },
      description: {
        tag: 'p',
        class: 'store-pickup__paragraph',
        text: 'The store is located next to the church.'
      }
    },
    selectStoreModal: {
      trigger: true,
      modalTrigger: {
        buttonModalTrigger: {
          tag: 'button',
          class: 'modal-trigger',
          text: 'Select store',
          attributes: 'data-modal-trigger="store-pickup-modal" type="button" aria-expanded="false"'
        }
      },
      modal: {
        class: '',
        id: 'store-pickup-modal',
        attributes: 'aria-labelledby="myTitle" aria-describedby="myDesc"'
      },
      buttonClose: {
        tag: 'button',
        text: '',
        class: 'button--rotate-icon modal__close-button',
        icon: {
          id: 'close',
          class: 'button__icon modal__close-button-icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to close the modal"'
      },
      modalTop: true,
      heading: {
        tag: 'h2',
        class: 'heading--second-level',
        attributes: 'id="modal-info-1-title"',
        text: 'Select Store'
      },
      modalMiddle: true,
      modalComponent: {
        content: 'store-pickup-modal',
        contentContext: ''
      }
    },
    nextButton: {
      tag: 'button',
      class: '',
      text: 'Next',
      attributes: 'type="button"'
    }
  },
  variants: [
    {
      name: 'no-selection',
      context: {
        selectedStore: false,
        noSelection: {
          tag: 'p',
          class: 'store-pickup__paragraph',
          text: 'We could not preselect pickup location based on available information, please select it manually.'
        },
        nextButton: {
          tag: 'button',
          class: '',
          text: 'Next',
          attributes: 'type="button" disabled'
        }
      }
    }
  ]
}
