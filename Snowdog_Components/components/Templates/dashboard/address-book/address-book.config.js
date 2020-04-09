module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Address book',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Dashboard'
    },
    buttons: {
      class: 'dashboard__actions margin-top-l',
      sides: [
        {
          action: [
            {
              button: {
                text: 'Add New Address',
                class: 'actions-group__button'
              }

            }
          ]
        },
        {
          action: [
            {
              link: {
                text: 'Back',
                class: 'actions-group__link'
              }
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
                    link: {
                      text: 'Change Billing Address',
                      class: 'actions-group__link'
                    }
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
                    link: {
                      text: 'Change Shipping Address',
                      class: 'actions-group__link'
                    }
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
                    link: {
                      text: 'Edit Address',
                      class: 'actions-group__link'
                    }
                  },
                  {
                    link: {
                      text: 'Delete Address',
                      class: 'actions-group__link'
                    }
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
                    link: {
                      text: 'Edit Address',
                      class: 'actions-group__link'
                    }
                  },
                  {
                    link: {
                      text: 'Delete Address',
                      class: 'actions-group__link'
                    }
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
                    link: {
                      text: 'Edit Address',
                      class: 'actions-group__link'
                    }
                  },
                  {
                    link: {
                      text: 'Delete Address',
                      class: 'actions-group__link'
                    }
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
                    link: {
                      text: 'Edit Address',
                      class: 'actions-group__link'
                    }
                  },
                  {
                    link: {
                      text: 'Delete Address',
                      class: 'actions-group__link'
                    }
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
          script: false,
          title: 'Contact Information',
          titleClass: 'margin-bottom-m',
          class: 'col-sm-6 dashboard__form',
          fields: [
            {
              input: {
                class: 'margin-bottom-l',
                field: {
                  id: 'firstName',
                  name: 'firstName',
                  placeholder: 'First Name'
                },
                label: {
                  text: 'First name',
                  hidden: true
                }
              }
            },
            {
              input: {
                class: 'margin-bottom-l',
                field: {
                  id: 'lastName',
                  name: 'lastName',
                  placeholder: 'Last Name'
                },
                label: {
                  text: 'Last name',
                  hidden: true
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
                  hidden: true
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
                  hidden: true
                }
              }
            },
            {
              input: {
                class: 'margin-bottom-l',
                field: {
                  id: 'fax',
                  name: 'fax',
                  placeholder: 'Fax'
                },
                label: {
                  text: 'Fax',
                  hidden: true
                }
              }
            }
          ]
        },
        address: {
          script: false,
          title: 'Address',
          titleClass: 'margin-bottom-m',
          class: 'col-sm-6 dashboard__form',
          fields: [
            {
              input: {
                class: 'margin-bottom-l',
                field: {
                  id: 'address',
                  name: 'address',
                  placeholder: 'Street Address'
                },
                label: {
                  text: 'Street Address',
                  hidden: true
                }
              }
            },
            {
              input: {
                class: 'margin-bottom-l',
                field: {
                  id: 'address2',
                  name: 'address2',
                  placeholder: 'Street Address vol.2'
                },
                label: {
                  text: 'Street Address vol.2',
                  hidden: true
                }
              }
            },
            {
              input: {
                class: 'margin-bottom-l',
                field: {
                  id: 'city',
                  name: 'city',
                  placeholder: 'City'
                },
                label: {
                  text: 'City',
                  hidden: true
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
                  hidden: true
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
        buttons: {
          class: 'margin-top-l',
          sides: [
            {
              action: [
                {
                  button: {
                    text: 'Save Address',
                    class: 'button actions-group__button'
                  }
                }
              ]
            }
          ]
        }
      }
    }
  ]
}
