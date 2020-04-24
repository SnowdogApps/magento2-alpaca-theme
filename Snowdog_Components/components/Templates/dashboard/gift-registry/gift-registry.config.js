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
  ]
}
