module.exports = {
  name: 'tooltip',
  meta: {
    docsOnlyStyles: true
  },
  context: {
    class: '',
    title: 'Example title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis nisl quis imperdiet tincidunt. Nulla massa diam, aliquet vitae laoreet a, fermentum eu velit. Quisque ornare erat in orci hendrerit feugiat at sit amet neque. Fusce elementum semper feugiat. Curabitur egestas neque in leo finibus ultricies.',
    triggerButton: {
      tag: 'button',
      class: 'tooltip__trigger-button',
      attributes: 'type="button" aria-label="See more information"',
      text: null,
      icon: {
        title: 'Show tooltip',
        id: 'info'
      }
    },
    closeButton: {
      tag: 'button',
      class: 'button--rotate-icon tooltip__close-button',
      attributes: 'type="button" aria-label="Close tooltip"',
      text: null,
      icon: {
        title: 'Close tooltip',
        id: 'close',
        hidden: true
      }
    }
  },
  variants: [
    {
      name: 'text',
      context: {
        class: 'tooltip--text',
        triggerButton: {
          tag: 'button',
          class: 'button--fluid tooltip__trigger-button',
          attributes: 'type="button"',
          text: 'Why we recommend'
        }
      }
    }
  ]
}
