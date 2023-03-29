module.exports = {
  meta: {
    checkout: true
  },
  context: {
    title: 'Shipping Address',
    labels: {
      mail: 'Email Address',
      password: 'Password'
    },
    notes: {
      customer: 'You already have an account with us. Sign in or continue as guest.',
      accounts: 'You can create an account after checkout.',
    },
    loginBtn: {
      tag: 'button',
      class: 'action login primary shipping-address__btn-login',
      attributes: 'type="button" aria-label="button"',
      text: 'Login'
    },
    forgotBtn: {
      tag: 'a',
      class: 'action remind shipping-address__btn-remind',
      text: 'Forgot Your Password?'
    },
    questionIcon: {
      id: 'question-mark'
    }
  }
}
