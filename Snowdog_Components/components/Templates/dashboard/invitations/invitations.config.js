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
          name: 'My Invitations',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    heading: {
      tag: 'h1',
      class: 'heading dashboard__content-heading',
      text: 'My Invitations'
    },
    actions: {
      sides: [
        {
          action: [
            {
              button: {
                text: 'Send Invitations',
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
        captionText: 'Table with invitations',
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
                    content: 'Email'
                  },
                  {
                    childTag: 'th',
                    childTagAttributes: 'scope="col" role="columnheader"',
                    content: 'Status'
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
                    childTagAttributes: 'data-th="Email:" role="gridcell"',
                    content: 'example@email.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:" role="gridcell"',
                    content: 'Sent'
                  }
                ]
              },
              {
                rowTag: 'tr',
                rowTagAttributes: 'role="row"',
                childTags: [
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Email:" role="gridcell"',
                    content: 'example@email.com'
                  },
                  {
                    childTag: 'td',
                    childTagAttributes: 'data-th="Status:" role="gridcell"',
                    content: 'Sent'
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
      name: 'send',
      title: 'Send',
      context: {
        heading: {
          tag: 'h1',
          class: 'heading dashboard__content-heading',
          text: 'Send Invitations'
        },
        headingForm: {
          class: 'dashboard-form__title',
          tag: 'h2',
          text: 'Invite your friends by entering their email addresses'
        },
        legend: {
          class: 'fieldset__legend--hidden',
          text: 'Invite your friends by entering their email addresses'
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
          text: 'Add Email'
        },
        actions: {
          sides: [
            {
              action: [
                {
                  button: {
                    text: 'Send Invitations',
                    class: 'actions-group__button'
                  }
                }
              ]
            },
            {
              action: [
                {
                  link: {
                    text: 'Back to Invitations',
                    title: 'Back to Invitations',
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
