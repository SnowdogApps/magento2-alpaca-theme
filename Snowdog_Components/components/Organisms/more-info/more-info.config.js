module.exports = {
  context: {
    trigger: {
      tag: 'button',
      class: 'button--fluid more-info__trigger',
      attributes: 'type="button" aria-expanded="false"',
      text: 'More information',
      iconAfter: {
        title: 'Show tooltip',
        id: 'info',
        class: 'button__icon',
        hidden: true
      }
    },
    heading: {
      tag: 'h3',
      text: 'Example title',
      class: 'more-info__heading'
    },
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam venenatis nisl quis imperdiet tincidunt. Nulla massa diam, aliquet vitae laoreet a, fermentum eu velit. Quisque ornare erat in orci hendrerit feugiat at sit amet neque. Fusce elementum semper feugiat. Curabitur egestas neque in leo finibus ultricies.',
    closeButton: {
      tag: 'button',
      class: 'button--rotate-icon more-info__close',
      attributes: 'type="button" aria-label="Close more info"',
      text: null,
      icon: {
        title: 'Close more information',
        id: 'close',
        hidden: true
      }
    }
  }
}
