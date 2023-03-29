module.exports = {
  context: {
    class: 'margin-vc-m',
    sidebarClass: 'dashboard__sidebar margin-top-sl',
    contentClass: 'dashboard__content margin-top-sl',
    actionsGroupClass: 'invitations__actions',
    breadcrumbs: {
      categories: [
        {
          name: 'Home',
          href: '#',
          linkClass: 'breadcrumbs__link'
        },
        {
          name: 'Gift Registry',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'Gift Registry'
    },
    actions: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Add new',
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
                title: 'Back to My Account',
                class: 'actions-group__link'
              }
            }
          ]
        }
      ]
    },
    invitations: {
      class: 'margin-bottom-xs',
      table: {
        captionText: 'Gift Registry',
        class: 'margin-0',
        mainTags: [
          {
            mainTag: 'thead',
            rowTags: [
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Event'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Created On'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Message'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: ''
                  }
                ]
              },
            ]
          },
          {
            mainTag: 'tbody',
            rowTags: [
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Event:" role="gridcell"',
                    content: 'My bday'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Created On:" role="gridcell"',
                    content: 'Apr 20, 2020'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Message:" role="gridcell"',
                    content: 'Lorem ipsum'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Actions:" role="gridcell"',
                    content: '' +
                      '<a class="padding-right-xs" href="#">Manage Items</a> ' +
                      '<a class="padding-right-xs" href="#">Share</a> ' +
                      '<a class="padding-right-xs" href="#">Edit</a> ' +
                      '<a class="padding-right-xs" href="#">Delete</a>' +
                    ''
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  },
  variants: [
    {
      name: 'share',
      title: 'Share Gift Registry',
      context: {
        heading: {
          tag: 'h1',
          class: 'heading dashboard__content-heading',
          text: 'Share Gift Registry'
        },
        headingForm: {
          class: 'dashboard-form__title',
          tag: 'h2',
          text: 'Share "Gift Name" Gift Registry'
        },
        fieldset: {
          class: 'margin-vc-m'
        },
        legendSender: {
          class: '',
          text: 'Sender'
        },
        legendInvite: {
          class: '',
          text: 'Invitee'
        },
        nameInput: {
          class: 'required',
          label: {
            text: 'Name',
          },
          field: {
            id: 'name',
            name: 'name',
            placeholder: '',
            type: 'text'
          }
        },
        firstNameInput: {
          class: 'required',
          label: {
            text: 'First Name',
          },
          field: {
            id: 'first-name',
            name: 'first-name',
            placeholder: '',
            type: 'text'
          }
        },
        emailInput: {
          class: 'required',
          label: {
            text: 'Email',
          },
          field: {
            id: 'email_1',
            name: 'email_1',
            placeholder: '',
            type: 'text'
          }
        },
        textarea: {
          label: {
            text: 'Message',
          },
          field: {
            id: 'message',
            name: 'message',
            placeholder: '',
            type: 'text'
          }
        },
        buttonRemove: {
          tag: 'button',
          attributes: 'type="button" aria-label="button"',
          class: 'button--secondary margin-bottom-m remove',
          text: 'Remove'
        },
        buttonAdd: {
          class: 'margin-vc-m',
          tag: 'button',
          attributes: 'type="button" aria-label="button"',
          text: 'Add Invitee'
        },
        actions: {
          sides: [
            {
              action: [
                {
                  button: {
                    text: 'Share Gift Registry',
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
                    title: 'Back',
                    class: 'actions-group__link'
                  }
                }
              ]
            }
          ]
        }
      }
    },
    {
      name: 'list',
      title: 'Gift Registy Items',
      context: {
        heading: {
          tag: 'h1',
          class: 'heading dashboard__content-heading',
          text: 'Gift Registy Items'
        },
        actions: {
          sides: [
            {
              action: [
                {
                  button: {
                    text: 'Update gift registry',
                    class: 'actions-group__button'
                  }
                }
              ]
            },
          ]
        },
        items: {
          class: 'margin-bottom-xs',
          table: {
            captionText: 'Gift Items',
            class: 'margin-0',
            mainTags: [
              {
                mainTag: 'thead',
                rowTags: [
                  {
                    rowTag: 'tr',
                    rowTagAttributes: 'role="row"',
                    childTags: [
                      {
                        childTag: 'th',
                        childTagAttributes: 'scope="col"',
                        content: 'Product'
                      },
                      {
                        childTag: 'th',
                        childTagAttributes: 'scope="col"',
                        content: 'Note'
                      },
                      {
                        childTag: 'th',
                        childTagAttributes: 'scope="col"',
                        content: 'Added On'
                      },
                      {
                        childTag: 'th',
                        childTagAttributes: 'scope="col"',
                        content: 'Qty'
                      },
                      {
                        childTag: 'th',
                        childTagAttributes: 'scope="col"',
                        content: 'Qty Fullified'
                      },
                      {
                        childTag: 'th',
                        childTagAttributes: 'scope="col"',
                        content: 'Delete'
                      }
                    ]
                  }
                ]
              },
              {
                mainTag: 'tbody',
                rowTags: [
                  {
                    rowTag: 'tr',
                    childTags: [
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Product"',
                        content: '<div class="giftregistry__item"><div class="giftregistry__image margin-right-s"><img class="lazyload margin-right-m" src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAQAAABN/Pf1AAAAC0lEQVR42mNkwAIAACoAAgu1Hc4AAAAASUVORK5CYII=" data-src="/images/product/product-160_240.jpg" alt="Image of product Bluzka \'ONLSANSA SINGLET WVN\'"></div><div class="giftregisty__info"><span class="paypal-review__product-name">Bluzka \'ONLSANSA SINGLET WVN\'</span></div>'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Note"',
                        content: '<div class="field note"><div class="input"><textarea class="input__field--textarea" rows="3" cols="20"></textarea></div></div>'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Added On"',
                        content: 'Jan 15, 2021'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty"',
                        content: '<div class="input"><input type="number" class="input__field qty giftregistry__qty-field" value="1"/></div>'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Qty Fullified"',
                        content: '0'
                      },
                      {
                        childTag: 'td',
                        childTagAttributes: 'data-th="Deleted"',
                        content: '@@checkbox'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        }
      }
    }
  ]
}
