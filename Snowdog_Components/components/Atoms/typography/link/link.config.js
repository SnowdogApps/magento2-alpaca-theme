module.exports = {
  context: {
    href: '#',
    title: 'Title',
    text: 'Link'
  },
  variants: [
    {
      name: 'Invert',
      context: {
        class: 'link--invert'
      }
    },
    {
      name: 'Secondary',
      context: {
        class: 'link--secondary'
      }
    }
  ]
}
