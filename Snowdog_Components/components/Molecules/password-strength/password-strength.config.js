module.exports = {
  collated: true,
  context: {
    text: 'Password Strength:',
    strengthIndicatorClass: 'password-none',
    noPassword: 'No Password',
  },
  variants: [
    {
      name: 'Week',
      context: {
        strengthIndicatorClass: 'password-weak',
        noPassword: 'Weak'
      }
    },
    {
      name: 'Medium',
      context: {
        strengthIndicatorClass: 'password-medium',
        noPassword: 'Medium'
      }
    },
    {
      name: 'Strong',
      context: {
        strengthIndicatorClass: 'password-strong',
        noPassword: 'Strong'
      }
    },
    {
      name: 'Very Strong',
      context: {
        strengthIndicatorClass: 'password-very-strong',
        noPassword: 'Very Strong'
      }
    }
  ]
}
