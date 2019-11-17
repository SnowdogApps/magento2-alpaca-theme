module.exports = {
  preview: '@docs-only-styles',
  collated: true,
  context: {
    tag: 'button',
    class: '',
    attributes: 'type="button" aria-label="button"',
    text: 'I am a button'
  },
  variants: [
    {
      name: 'secondary',
      context: {
        class: 'button--secondary',
        text: 'I am button secondary'
      }
    },
    {
      name: 'secondary-light',
      context: {
        class: 'button--secondary-light',
        text: 'I am button secondary light'
      }
    },
    {
      name: 'icon',
      context: {
        text: '',
        icon: {
          id: 'arrow-left',
          title: 'Arrow left',
          class: 'button__icon',
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
    {
      name: 'rotate-icon',
      view: 'button--icon.hbs',
      context: {
        text: '',
        class: 'button--rotate-icon',
        icon: {
          id: 'close',
          title: 'Close',
          class: 'button__icon'
        },
        attributes: 'type="button" aria-label="Close"'
      }
    },
    {
      name: 'icon-light',
      view: 'button--icon.hbs',
      context: {
        text: '',
        class: 'button--icon-light',
      }
    },
    {
      name: 'icon-before',
      view: 'button--icon.hbs',
      context: {
        text: 'Button Icon before',
        iconBefore: {
          id: 'arrow-left',
          title: 'Arrow left',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
    {
      name: 'icon-after',
      view: 'button--icon.hbs',
      context: {
        text: 'Button Icon after',
        iconAfter: {
          id: 'arrow-right',
          title: 'Arrow Right',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
    {
      name: 'icon-before-light',
      view: 'button--icon.hbs',
      context: {
        class: 'button--icon-light',
        text: 'Button Icon before',
        iconBefore: {
          id: 'arrow-left',
          title: 'Arrow left',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
    {
      name: 'icon-after-light',
      view: 'button--icon.hbs',
      context: {
        class: 'button--icon-light',
        text: 'Button Icon after',
        iconAfter: {
          id: 'arrow-right',
          title: 'Arrow Right',
          class: 'button__icon',
          hidden: true
        },
        attributes: 'type="button" aria-label="click to do something"'
      }
    },
    {
      name: 'add-to',
      view: 'button--add-to.hbs',
      context: {
        class: '',
        text: 'Add to cart',
        icon: {
          id: 'shopping-cart',
          title: 'Add to Cart',
          class: 'button__icon',
        },
        attributes: 'type="button" aria-label="Add to cart"'
      }
    },
    {
      name: 'link',
      context: {
        tag: 'a',
        class: 'button--link',
        attributes: 'href="#" title="I am a link button"',
        text: 'I am a link button'
      }
    },
    {
      name: 'fluid',
      context: {
        class: 'button--fluid',
        text: 'I am a fluid button'
      }
    },
    {
      name: 'disabled',
      context: {
        attributes: 'disabled',
        text: 'I am a disabled button'
      }
    }
  ]
};
