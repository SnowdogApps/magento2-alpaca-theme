module.exports = {
  meta: {
    docsOnlyStyles: true
  },
  context: {
    heading: {
      content: 'heading',
      contentContext: {
        tag: 'h2',
        class: 'heading--first-level margin-0',
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
