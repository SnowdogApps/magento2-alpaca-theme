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
    asideClass: 'col-md-3',
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
    }
  }
}
