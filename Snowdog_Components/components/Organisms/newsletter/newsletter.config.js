module.exports = {
  collated: true,
  context: {
    heading: {
      title: 'JOIN OUR EMAIL LIST',
      subtitle: 'Sign up for savings and product announcements'
    },
    input: {
      class: 'newsletter__input',
      field: {
        placeholder: 'Enter your email',
        id: 'newsletterEmail',
        name: 'newsletterEamil',
        class: 'newsletter__field'
      },
      label: {
        class: 'newsletter__label',
        hidden: true,
        text: 'Email for newsletter subscription'
      }
    },
    button: {
      tag: 'button',
      text: 'Sign Up',
      class: 'button--secondary newsletter__button'
    },
    checkbox: {
      class: 'newsletter__checkbox',
      id: 'newsletter',
      label: {
        text: 'I agree to <a href="#" title="Terms and conditions">Terms & Conditions</a> and I am happy to receive your newsletter with all your promotions.'
      }
    }
  }
};
