module.exports = {
  preview: '@docs-only-styles',
  context: {
    heading: {
      content: 'heading',
      contentContext: {
        tag: 'h2',
        class: 'heading--first-level',
        text: 'Section title'
      }
    },
    contentClass: '',
    components: [
      {
        content: {
          content: 'paragraph',
          contentContext: ''
        }
      }
    ]
  }
};
