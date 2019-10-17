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
          name: 'Blog',
          href: '#',
          linkClass: 'breadcrumbs__link'
        }
      ]
    },
    mainHeading: {
      tag: 'h1',
      text: 'Blog',
      class: 'heading heading--page'
    },
    recommendedHeading: {
      tag: 'h2',
      text: 'Recommended',
      class: 'heading blog__heading'
    },
    categoryHeading: {
      tag: 'h2',
      text: 'Categories',
      class: 'heading blog__heading'
    },
    categories: {
      class: 'list--native list--fancy',
      elements: [
        {
          linkClass: 'blog__category-link',
          text: 'Lorem ipsum',
          link: '#'
        },
        {
          linkClass: 'blog__category-link',
          text: 'Lorem ipsum',
          link: '#'
        },
        {
          linkClass: 'blog__category-link',
          text: 'Lorem ipsum',
          link: '#'
        },
        {
          linkClass: 'blog__category-link',
          text: 'Lorem ipsum',
          link: '#'
        },
        {
          linkClass: 'blog__category-link',
          text: 'Lorem ipsum',
          link: '#'
        }
      ]
    }
  }
}
