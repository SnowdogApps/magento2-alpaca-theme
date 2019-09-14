module.exports = {
  context: {
    text: 'Skip to content',
    anchor: '#maincontent',
    script: true
  },
  variants: [
    {
      name: 'list',
      context: {
        anchor: [
          {
            value: '#header',
            text: 'Go to top'
          },
          {
            value: '#maincontent',
            text: 'Go to main content'
          }
        ]
      }
    }
  ]
}
