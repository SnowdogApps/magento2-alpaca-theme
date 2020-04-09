module.exports = {
  context: {
    signInInfo: 'If you have an account, sign in with your email address.',
    signInSection: {
      fieldset: {
        attributes: '',
        class: ''
      },
      legend: {
        class: 'account-form__legend--hidden',
        text: 'Sign in'
      }
    },
    email: {
      attributes: '',
      class: 'margin-bottom-sm',
      label: {
        attributes: '',
        text: 'Email *',
        hidden: false
      },
      field: {
        attributes: 'aria-required="true" autocomplete="email" required',
        class: '',
        id: 'email',
        name: 'email',
        placeholder: '',
        type: 'email'
      }
    },
    passwordWrapClass: 'margin-bottom-sm',
    password: {
      attributes: '',
      class: 'margin-bottom-m',
      label: {
        attributes: '',
        text: 'Password *',
        hidden: false
      },
      field: {
        attributes: 'aria-required="true" autocomplete="off" required',
        class: '',
        id: 'password',
        name: 'password',
        placeholder: '',
        type: 'password'
      }
    },
    loginButton: {
      class: 'account-form__button',
      tag: 'button',
      text: 'Sign in'
    },
    forgotPassword: {
      text: 'Forgot Your Password',
      class: 'account-form__forgot-password'
    },
    validationTips: '* Required Fields'
  },
  variants: [
    {
      name: 'registration',
      context: {
        signUpInfo: 'Creating an account has many benefits: check out faster, keep more than one address, track orders and more.',
        personalSection: {
          fieldset: {
            attributes: '',
            class: 'margin-bottom-xl'
          },
          legend: {
            class: '',
            text: 'Personal information'
          }
        },
        signInSection: {
          fieldset: {
            attributes: '',
            class: ''
          },
          legend: {
            class: 'account-form__legend',
            text: 'Sign-In information'
          }
        },
        firstName: {
          attributes: '',
          class: 'margin-bottom-sm',
          label: {
            attributes: '',
            text: 'First name *',
            hidden: false
          },
          field: {
            attributes: 'aria-required="true" autocomplete="name" required',
            class: '',
            id: 'firstname',
            name: 'fisrtname',
            placeholder: '',
            type: 'text'
          }
        },
        lastName: {
          attributes: '',
          class: 'margin-bottom-sm',
          label: {
            attributes: '',
            text: 'Last name *',
            hidden: false
          },
          field: {
            attributes: 'aria-required="true" autocomplete="family-name" required',
            class: '',
            id: 'lastname',
            name: 'lastname',
            placeholder: '',
            type: 'text'
          }
        },
        newsletterCheckbox: {
          class: 'account-form__newsletter-checkbox',
          id: 'is_subscribed',
          name: 'is_subscribed',
          label: {
            text: 'Sign Up for Newsletter',
            class: 'account-form__newsletter-checkbox-label'
          },
          input: {
            class: 'account-form__newsletter-checkbox-field'
          },
          icon: {
            class: 'account-form__newsletter-checkbox-icon'
          }
        },
        email: {
          attributes: '',
          class: 'margin-bottom-sm',
          label: {
            attributes: '',
            text: 'Email *',
            hidden: false
          },
          field: {
            attributes: 'aria-required="true" autocomplete="email" required',
            class: '',
            id: 'registration-email',
            name: 'email',
            placeholder: '',
            type: 'email'
          }
        },
        password: {
          script: true,
          passwordTrigger: true,
          attributes: '',
          label: {
            attributes: '',
            text: 'Password *',
            hidden: false
          },
          field: {
            attributes: 'aria-required="true" autocomplete="off" required',
            class: '',
            id: 'registration-password',
            name: 'password',
            placeholder: '',
            type: 'password'
          }
        },
        passwordConfirmation: {
          passwordTrigger: true,
          attributes: '',
          class: 'margin-bottom-sm',
          label: {
            attributes: '',
            text: 'Confirm password *',
            hidden: false
          },
          field: {
            attributes: 'aria-required="true" autocomplete="off" required',
            class: '',
            id: 'registration-confirm-password',
            name: 'password-confirmation',
            placeholder: '',
            type: 'password'
          }
        },
        passwordStrength: {
          none: {
            text: 'Password Strength:',
            noPassword: 'No Password',
            class: 'password-none'
          },
          weak: {
            text: '',
            noPassword: 'Weak',
            class: 'password-weak'
          },
          medium: {
            text: '',
            noPassword: 'Medium',
            class: 'password-medium'
          },
          strong: {
            text: '',
            noPassword: 'Strong',
            class: 'password-strong'
          },
          veryStrong: {
            text: '',
            noPassword: 'Very strong',
            class: 'password-very-strong'
          }
        },
        registrationButton: {
          class: 'account-form__button',
          tag: 'button',
          text: 'Create an Account'
        },
        validationTips: '* Required Fields'
      }
    }
  ]
};
