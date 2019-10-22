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
    articlesClass: 'col-md-8',
    navClass: 'col-md-4 col-lg-3',
    articlesList: {
      listTag: 'ul',
      elementTag: 'li',
      class: 'blog__articles-list',
      elements: [
        {
          text: false,
          class: 'blog__article-item',
          component: {
            content: 'article-item'
          }
        },
        {
          text: false,
          class: 'blog__article-item',
          component: {
            content: 'article-item'
          }
        },
        {
          text: false,
          class: 'blog__article-item',
          component: {
            content: 'article-item'
          }
        },
        {
          text: false,
          class: 'blog__article-item',
          component: {
            content: 'article-item'
          }
        }
      ]
    },
    recommendedHeading: {
      tag: 'h3',
      class: 'blog__nav-heading heading--font-secondary',
      text: 'Recent Posts'
    },
    recommendedList: {
      class: 'blog__nav-list'
    },
    categoryHeading: {
      tag: 'h3',
      class: 'blog__nav-heading heading--font-secondary',
      text: 'Categories'
    },
    categoriesList: {
      class: 'blog__nav-list'
    }
  }
}
