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
      class: 'margin-top-sm text-center'
    },
    form: {
      legend: 'General',
      description: 'Please fill out the form below. We\'re here to answer all of your questions and recommend the best products that will help you achieve your specific goals! We look forward to working with you!',
      select: {
        label: {
          text: 'Choose from options below',
          class: 'label--hidden'
        },
        field: {
          id: 'select-1',
          name: 'select-1'
        },
        options: [
          {
            text: 'Choose from options below'
          }
        ]
      },
      input1: {
        label: {
          text: 'First name'
        },
        field: {
          id: 'input-1',
          name: 'input-1',
          attributes: 'required',
          placeholder: ''
        }
      },
      input2: {
        label: {
          text: 'Last name'
        },
        field: {
          id: 'input-2',
          name: 'input-2',
          attributes: 'required',
          placeholder: ''
        }
      },
      input3: {
        label: {
          text: 'Email'
        },
        field: {
          id: 'input-3',
          name: 'input-3',
          attributes: 'required autocomplete="email"',
          placeholder: ''
        }
      },
      input4: {
        label: {
          text: 'Phone'
        },
        field: {
          id: 'input-4',
          name: 'input-4',
          attributes: 'autocomplete="tel"',
          placeholder: ''
        }
      },
      input5: {
        label: {
          text: 'Comment / Questions'
        },
        field: {
          id: 'input-5',
          name: 'input-5',
          placeholder: ''
        }
      },
      button: {
        sides: [
          {
            action: [
              {
                button: {
                  text: 'Submit message',
                  class: 'contact-us__button actions-group__button',
                  attributes: 'type="submit"'
                }
              }
            ]
          }
        ]
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
      name: 'Alpaca',
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
