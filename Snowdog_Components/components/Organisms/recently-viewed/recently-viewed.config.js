module.exports = {
  context: {
    class: 'recently-viewed--grid',
    blockClass: 'recently-viewed__block',
    headingClass: 'recently-viewed__heading section__heading',
    heading: {
      tag: 'h2',
      class: 'recently-viewed__title heading--first-level margin-0',
      text: 'Recently Viewed'
    },
    content: 'slider--products'
  },
  variants: [
    {
      name: 'sidebar',
      context: {
        class: 'recently-viewed--sidebar',
        blockClass: 'sidebar-block',
        headingClass: 'sidebar-block__heading',
        heading: {
          tag: 'h2',
          class: 'sidebar-block__title',
          text: 'Recently Viewed'
        },
        content: 'product-grid-item'
      }
    }
  ]
}
