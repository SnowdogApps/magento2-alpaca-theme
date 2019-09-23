module.exports = {
  context: {
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Contact Us',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      text: 'Send us an email',
      class: 'margin--top-sm text-center'
    },
    form: {
      legend: 'General',
      description: 'Please fill out the form below. We\'re here to answer all of your questions and recommend the best products that will help you achieve your specific goals! We look forward to working with you!',
      button: {
        class: 'contact-us__button',
        tag: 'button',
        text: 'Submit message'
      },
      validationTips: 'Fields marked * are mandatory'
    },
    phone: {
      heading: {
        class: 'contact-us__heading',
        tag: 'h2',
        text: 'Call us'
      },
      number: '800 - 123 - 4567'
    },
    address: {
      heading: {
        class: 'contact-us__heading',
        tag: 'h2',
        text: 'Warehouse & office address'
      },
      name: 'Colibri',
      details: '442 Route 206 Montague NJ, 07827'
    },
    openingHours: {
      heading: {
        class: 'contact-us__heading',
        tag: 'h2',
        text: 'Store hours'
      },
      items: [
        {
          day: 'Monday',
          hour: '10 A.M EST - 7 P.M. EST'
        },
        {
          day: 'Tuesday',
          hour: '10 A.M EST - 7 P.M. EST'
        },
        {
          day: 'Wednesday',
          hour: '10 A.M EST - 7 P.M. EST'
        },
        {
          day: 'Thursday',
          hour: '10 A.M EST - 7 P.M. EST'
        },
        {
          day: 'Friday',
          hour: '10 A.M EST - 7 P.M. EST'
        },
        {
          day: 'Saturday',
          hour: '10 A.M EST - 5 P.M. EST'
        },
        {
          day: 'Sunday',
          hour: 'Closed',
          dayClass: 'contact-us__day--special',
          hourClass: 'contact-us__hour--special'
        }
      ]
    }
  }
}
