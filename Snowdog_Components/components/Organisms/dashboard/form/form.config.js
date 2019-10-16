module.exports = {
  label: 'Form',
  name: 'dashboard-form',
  context: {
    script: true,
    title: 'Account Information',
    titleClass: 'margin-bottom-m',
    contentClass: 'margin-bottom-sm',
    fieldsClass: 'margin-bottom-sm',
    fields: [
      {
        input: {
          class: 'margin-bottom-sm',
          field: {
            id: 'firstName',
            name: 'firstName',
            placeholder: 'Firist name'
          },
          label: {
            attributes: '',
            text: 'Firist name'
          }
        }
      },
      {
        input: {
          class: 'margin-bottom-sm',
          field: {
            id: 'secondName',
            name: 'secondName',
            placeholder: 'Second name'
          },
          label: {
            attributes: '',
            text: 'Second name'
          }
        }
      }
    ],
    formTitle: 'Change',
    formTitleClass: 'margin-bottom-sm',
    checkboxes: [
      {
        checkbox: {
          id: 'changeEmail',
          name: 'changeEmail',
          label: {
            text: 'Change Email'
          }
        }
      },
      {
        checkbox: {
          class: 'margin-bottom-sm',
          id: 'changePassword',
          name: 'changePassword',
          label: {
            text: 'Change Password'
          }
        }
      }
    ],
    hiddenFields: [
      {
        hiddenField: {
          class: 'margin-bottom-sm dashboard-form--hidden email',
          label: {
            text: 'Email',
          },
          field: {
            id: 'email',
            name: 'email'
          }
        }
      },
      {
        hiddenField: {
          password: true,
          class: 'margin-bottom-sm dashboard-form--hidden password',
          label: {
            text: 'Current Password',
          },
          field: {
            id: 'password',
            name: 'password',
            placeholder: 'Current Password'
          }
        }
      },
      {
        hiddenField: {
          password: true,
          class: 'margin-bottom-sm dashboard-form--hidden newPassword',
          label: {
            text: 'New Password'
          },
          field: {
            id: 'newPassword',
            name: 'newPassword',
            placeholder: 'New Password'
          }
        }
      },
      {
        hiddenField: {
          password: true,
          class: 'margin-bottom-sm dashboard-form--hidden confirmPassword',
          label: {
            text: 'Confirm New Password'
          },
          field: {
            id: 'confirmPassword',
            name: 'confirmPassword',
            placeholder: 'Confirm New Password'
          }
        }
      }
    ]
  }
}
