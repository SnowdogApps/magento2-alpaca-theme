module.exports = {
  default: 'p-paragraph',
  collated: true,
  variants: [
    {
      name:'p-paragraph',
      context: {
        tag: 'p',
        class: '',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
      }
    },
    {
      name:'span-paragraph',
      context: {
        tag: 'span',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris'
      }
    },
    {
      name:'preformatted-paragraph',
      context: {
        contentElement: 'preformatted'
      }
    },
    {
      name:'blockquote-paragraph',
      context: {
        contentElement: 'blockquote'
      }
    },
    {
      name:'paragraph with link',
      context: {
        contentElement: 'link'
      }
    }
  ]
}
