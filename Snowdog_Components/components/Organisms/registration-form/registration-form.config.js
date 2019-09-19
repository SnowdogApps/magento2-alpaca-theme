module.exports = {
  context: {
    signUpInfo: 'Creating an account has many benefits: check out faster, keep more than one address, track orders and more.',
    personalSection: {
      fieldset: {
        attributes: '',
        class: ''
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
        class: '',
        text: 'Sign-In information'
      }
    },
    firstName: {
      attributes: '',
      class: 'registration-form__input',
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
      class: 'registration-form__input',
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
      class: 'registration-form__newsletter-checkbox',
      id: 'is_subscribed',
      name: 'is_subscribed',
      label: {
        text: 'Sign Up for Newsletter',
        class: 'registration-form__newsletter-checkbox-label'
      },
      input: {
        class: 'registration-form__newsletter-checkbox-field'
      },
      icon: {
        class: 'registration-form__newsletter-checkbox-icon'
      }
    },
    email: {
      attributes: '',
      class: 'registration-form__input',
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
      class: 'registration-form__input',
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
      class: 'registration-form__button',
      tag: 'button',
      text: 'Create an Account'
    },
    validationTips: '* Required Fields'
  }
};
