module.exports = {
  context: {
    buttons: {
      class: 'dashboard__actions',
      sides: [
        {
          action: [
            {
              button: true,
              title: 'Add New Address'
            }
          ]
        },
        {
          action: [
            {
              title: 'Back'
            }
          ]
        }
      ]
    },
    addresses: {
      title: 'Default Addresses',
      informations: [
        {
          title: 'Default Billing Address',
          class: 'col-sm-6',
          information: 'qweqwe qwe 136 N. Bay Road',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Change Billing Address'
                  }
                ]
              }
            ]
          }
        },
        {
          title: 'Default Shipping address',
          class: 'col-sm-6',
          information: '11233 Easer 53rd Ave, Suite 600 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Change Shipping Address'
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    additionalAddresses: {
      title: 'Additional Addresses Entries',
      informations: [
        {
          class: 'col-sm-6',
          information: 'qweqwe qwe 601 s Galves St New Orlean',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        },
        {
          class: 'col-sm-6',
          information: 'Delray Beach, Florida, 33444-1250',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        },
        {
          class: 'col-sm-6',
          information: 'San Antonio, Texas, 78215-1298 US',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        },
        {
          class: 'col-sm-6',
          information: '3848 Bryn Marw Drive University Park, Texas',
          actions: {
            sides: [
              {
                action: [
                  {
                    title: 'Edit Address'
                  },
                  {
                    title: 'Delete Address'
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  variants: [
    {
      name: 'edit',
      title: 'Add/Edit',
      context: {
        contactInfo: {
          title: 'Contact Information',
          class: 'col-sm-6 dashboard__form',
          fields: [
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'firstName',
                  name: 'firstName',
                  placeholder: 'First Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'lastName',
                  name: 'lastName',
                  placeholder: 'Last Name'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'company',
                  name: 'company',
                  placeholder: 'Company'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'phoneNumber',
                  name: 'phoneNumber',
                  placeholder: 'Phone Number'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'fax',
                  name: 'fax',
                  placeholder: 'Fax'
                }
              }
            }
          ]
        },
        address: {
          title: 'Address',
          class: 'col-sm-6 dashboard__form',
          fields: [
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'address',
                  name: 'address',
                  placeholder: 'Street Address'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'address2',
                  name: 'address2',
                  placeholder: 'Street Address vol.2'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'city',
                  name: 'city',
                  placeholder: 'City'
                }
              }
            },
            {
              input: {
                class: 'dashboard__input',
                field: {
                  id: 'zipCode',
                  name: 'zipCode',
                  placeholder: 'Zip/Postal Code'
                }
              }
            }
          ],
          selects: [
            {
              select: {
                class: 'dashboard__address dashboard-form__select',
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
                class: 'dashboard__address dashboard-form__select',
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
                class: 'dashboard-form__divider',
                id: 'defaultBillingAddress',
                label: {
                  text: 'Use as my default billing address'
                }
              }
            },
            {
              checkbox: {
                class: 'dashboard-form__divider',
                id: 'defaultShippingAddress',
                label: {
                  text: 'Use as my default shipping address'
                }
              }
            }
          ]
        },
        buttons: {
          sides: [
            {
              action: [
                {
                  button: true,
                  title: 'Save Address'
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
