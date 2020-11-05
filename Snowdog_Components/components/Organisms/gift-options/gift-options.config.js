module.exports = {
  name: 'gift-options',
  context: {
    content: {
      subtitle: 'Pick a paper of your choice (optional)'
    },
    details: {
      name: 'Dotted',
      class: 'padding-bottom-sm margin-bottom-xs',
      removeItem: {
        tag: 'button',
        text: 'Remove',
        class: 'button--secondary'
      }
    },
    list: {
      class: 'padding-0 margin-0'
    },
    item: {
      class: 'padding-right-xs margin-bottom-xs'
    },
    additional: {
      legend: {
        text: 'Pick a paper of your choice',
        class: 'fieldset__legend--hidden'
      },
      fieldset: {
        class: 'gift-options__additional padding-bottom-xs margin-bottom-m'
      }
    },
    message: {
      subtitle: 'Gift Message (optional)',
      legend: {
        text: 'Add message to gift',
        class: 'fieldset__legend--hidden'
      }
    },
    actions: {
      class: 'margin-vc-m',
      sides: [
        {
          action: [
            {
              button: {
                text: 'Update',
                class: 'actions-group__button'
              }
            },
            {
              button: {
                text: 'Cancel',
                class: 'actions-group__button button--secondary'
              }
            }
          ]
        },
      ]
    }
  }
}
