module.exports = {
  meta: {
    checkout: true
  },
  context: {
    contactInfo: {
      script: false,
      title: {
        tag: 'h2',
        class: 'dashboard-form__title margin-bottom-sm',
        text: 'Contact Information'
      },
      class: 'col-sm-6 dashboard__form',
      fields: [
        {
          input: {
            class: 'margin-bottom-l required',
            field: {
              id: 'firstName',
              name: 'firstName',
              placeholder: 'First Name'
            },
            label: {
              text: 'First name',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l required',
            field: {
              id: 'lastName',
              name: 'lastName',
              placeholder: 'Last Name'
            },
            label: {
              text: 'Last name',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l',
            field: {
              id: 'company',
              name: 'company',
              placeholder: 'Company'
            },
            label: {
              text: 'Company',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l',
            field: {
              id: 'phoneNumber',
              name: 'phoneNumber',
              placeholder: 'Phone Number'
            },
            label: {
              text: 'Phone Number',
              hidden: false
            }
          }
        },
      ]
    },
    address: {
      script: false,
      title: {
        tag: 'h2',
        class: 'dashboard-form__title margin-bottom-sm',
        text: 'Address'
      },
      class: 'col-sm-6 dashboard__form',
      fields: [
        {
          input: {
            class: 'margin-bottom-l required',
            field: {
              id: 'address',
              name: 'address',
            },
            label: {
              text: 'Street Address',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l',
            field: {
              id: 'address2',
              name: 'address2',
            },
            label: {
              text: 'Street Address 2',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l',
            field: {
              id: 'address3',
              name: 'address3',
            },
            label: {
              text: 'Street Address vol.3',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l required',
            field: {
              id: 'city',
              name: 'city',
              placeholder: 'City'
            },
            label: {
              text: 'City',
              hidden: false
            }
          }
        },
        {
          input: {
            class: 'margin-bottom-l',
            field: {
              id: 'zipCode',
              name: 'zipCode',
              placeholder: 'Zip/Postal Code'
            },
            label: {
              text: 'Zip/Postal Code',
              hidden: false
            }
          }
        }
      ],
      selects: [
        {
          select: {
            class: 'dashboard__address margin-bottom-sm',
            label: {
              text: 'State/Province',
            },
            options: [
              {
                value: 'example1',
                text: 'Example State 1'
              },
              {
                value: 'example2',
                text: 'Example state 2'
              },
              {
                value: 'example3',
                text: 'Example state 3'
              }
            ]
          }
        },
        {
          select: {
            class: 'dashboard__address margin-bottom-sm',
            label: {
              text: 'Country'
            },
            options: [
              {
                value: 'example1',
                text: 'Example country 1'
              },
              {
                value: 'example2',
                text: 'Example country 2'
              },
              {
                value: 'example3',
                text: 'Example country 3'
              }
            ]
          }
        }
      ],
      checkboxes: [
        {
          checkbox: {
            class: '',
            id: 'defaultBillingAddress',
            name: 'defaultBillingAddress',
            label: {
              text: 'Use as my default billing address'
            }
          }
        },
        {
          checkbox: {
            class: '',
            id: 'defaultShippingAddress',
            name: 'defaultShippingAddress',
            label: {
              text: 'Use as my default shipping address'
            }
          }
        }
      ]
    },
    actions: {
      class: 'margin-top-l',
      sides: [
        {
          action: [
            {
              button: {
                text: 'Save address',
                class: 'actions-group__button'
              }
            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Go back',
                title: 'go back',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    }
  }
}
