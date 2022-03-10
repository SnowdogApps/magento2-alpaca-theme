module.exports = {
  meta: {
    checkout: true
  },
  context: {
    card: {
      number: {
        class: 'credit-card__number',
        label: {
          text: 'Credit Card Number'
        },
        field: {
          class: '',
          placeholder: ''
        }
      },
      verification: {
        class: 'credit-card__verification',
        label: {
          text: 'Card Verification Number'
        },
        field: {
          class: '',
          placeholder: ''
        }
      },
      date: {
        month: {
          class: 'credit-card__select margin-right-s',
          label: {
            text: 'Expiration Month'
          },
          field: {
            id: 'expiration_month',
            name: 'expiration_month',
            class: 'credit-card__field',
            attributes: ''
          }
        },
        year: {
          class: 'credit-card__select',
          label: {
            text: 'Expiration Year'
          },
          field: {
            id: 'expiration_year',
            name: 'expiration_year',
            class: 'credit-card__field',
            attributes: ''
          }
        }
      }
    }
  }
}
