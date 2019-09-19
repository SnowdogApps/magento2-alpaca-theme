module.exports = {
  context: {
    signInInfo: 'If you have an account, sign in with your email address.',
    email: {
      attributes: '',
      class: 'login-form__input',
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
    password: {
      attributes: '',
      class: 'login-form__input',
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
      class: 'login-form__button',
      tag: 'button',
      text: 'Sign in'
    },
    forgetPassword: {
      href: '#',
      text: 'Forgot Your Password'
    },
    validationTips: '* Required Fields'
  }
};
