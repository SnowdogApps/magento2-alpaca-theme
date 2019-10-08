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
          name: 'Email to friend',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      text: 'Email to friend',
      class: 'margin-top-sm text-center'
    },
    sender: {
      label: 'Sender',
      name: {
        label: {
          text: 'Name',
        },
        field: {
          type: 'text',
          id: 'sender[name]',
          name: 'sender[name]',
        }
      },
      email: {
        label: {
          text: 'Email',
        },
        field: {
          type: 'text',
          id: 'sender[email]',
          name: 'sender[email]',
        },
      },
      message: {
        label: {
          text: 'Message',
        },
        field: {
          class: 'email-to-friend__message',
          id: 'sender[message]',
          name: 'sender[message]',
        }
      }
    },
    invitee: {
      label: 'Invitee',
      fieldsets: [
        {
          class: 'fields',
          name: {
            label: {
              text: 'Name',
            },
            field: {
              type: 'text',
              id: 'invitee[name]',
              name: 'invitee[name]',
            }
          },
          email: {
            label: {
              text: 'Email',
            },
            field: {
              type: 'text',
              id: 'invitee[email]2',
              name: 'invitee[email]',
            },
          },
          remove: {
            tag: 'button',
            attributes: 'type="button"',
            text: 'Remove',
            class: 'button button--secondary email-to-friend__remove'
          }
        },
        {
          class: 'fields additional',
          name: {
            label: {
              text: 'Name',
            },
            field: {
              type: 'text',
              id: 'invitee[name]',
              name: 'invitee[name]',
            }
          },
          email: {
            label: {
              text: 'Email',
            },
            field: {
              type: 'text',
              id: 'invitee[email]2',
              name: 'invitee[email]',
            },
          },
          remove: {
            tag: 'button',
            attributes: 'type="button"',
            text: 'Remove',
            class: 'button button--secondary email-to-friend__remove'
          }
        }
      ],
      add: {
        tag: 'button',
        attributes: 'type="button"',
        text: 'Add Invitee',
        class: 'button button--secondary'
      }
    },
    send: {
      tag: 'button email-to-friend__submit',
      attributes: 'type="submit"',
      text: 'Send Email',
      class: 'button'
    },
    back: 'Back'
  }
}
