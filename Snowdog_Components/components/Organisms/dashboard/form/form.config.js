module.exports = {
  label: 'Form',
  name: 'dashboard-form',
  context: {
    title: 'Account Information',
    fields: [
      {
        input: {
          class: 'dashboard-form__divider',
          field: {
            id: 'firstName',
            name: 'firstName',
            placeholder: 'Firist name'
          }
        }
      },
      {
        input: {
          class: 'dashboard-form__divider',
          field: {
            id: 'secondName',
            name: 'secondName',
            placeholder: 'Second name'
          }
        }
      }
    ],
    formTitle: 'Change',
    checkboxes: [
      {
        checkbox: {
          id: 'changeEmail',
          label: {
            text: 'Change Email'
          }
        }
      },
      {
        checkbox: {
          class: 'dashboard-form__divider',
          id: 'changePassword',
          label: {
            text: 'Change Password'
          }
        }
      }
    ],
    hiddenFields: [
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden email',
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
          class: 'dashboard-form__divider dashboard-form--hidden password',
          label: {
            text: 'Current Passwords',
          },
          field: {
            id: 'password',
            name: 'password'
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden newPassword',
          label: {
            text: 'New Password'
          },
          field: {
            id: 'newPassword',
            name: 'newPassword'
          }
        }
      },
      {
        hiddenField: {
          class: 'dashboard-form__divider dashboard-form--hidden confirmPassword',
          label: {
            text: 'Confirm New Password'
          },
          field: {
            id: 'confirmPassword',
            name: 'confirmPassword'
          }
        }
      }
    ]
  }
}
