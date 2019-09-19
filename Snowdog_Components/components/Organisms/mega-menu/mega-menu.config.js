module.exports = {
  title: 'Mega menu',
  context: {
    list: [
      {
        class: 'mega-menu__item mega-menu__item--parent',
        text: 'Furniture',
        link: '/furniture',
        nestedList: [
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level1 mega-menu__inner-item--parent',
            linkClass: 'mega-menu__inner-link',
            heading: 'Example',
            link: '/example',
            list: {
              class: 'mega-menu__inner-list mega-menu__inner-list--level2',
              elements: [
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category long name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                }
              ]
            }
          },
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level1 mega-menu__inner-item--parent',
            linkClass: 'mega-menu__inner-link',
            heading: 'Example2',
            link: '/example',
            list: {
              class: 'mega-menu__inner-list mega-menu__inner-list--level2',
              elements: [
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category long very name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category long very name',
                  linkClass: 'mega-menu__inner-link'
                }
              ]
            }
          },
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level1 mega-menu__inner-item--parent',
            linkClass: 'mega-menu__inner-link',
            heading: 'Example3',
            link: '/example',
            list: {
              class: 'mega-menu__inner-list mega-menu__inner-list--level2',
              elements: [
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category long very name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category long very name',
                  linkClass: 'mega-menu__inner-link'
                }
              ]
            }
          },
          {
            class: 'mega-menu__inner-item mega-menu__inner-item--level1 mega-menu__inner-item--parent',
            linkClass: 'mega-menu__inner-link',
            heading: 'Example long name',
            link: '/example',
            list: {
              class: 'mega-menu__inner-list mega-menu__inner-list--level2',
              elements: [
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  text: 'Category long very name',
                  linkClass: 'mega-menu__inner-link'
                },
                {
                  class: 'mega-menu__inner-item mega-menu__inner-item--level2',
                  linkClass: 'mega-menu__inner-link'
                }
              ]
            }
          },
          {
            image: true,
            class: 'mega-menu__inner-item mega-menu__inner-item--level1 mega-menu__inner-item--image',
            linkClass: 'mega-menu__inner-link',
            link: '#',
          }
        ]
      },
      {
        class: 'mega-menu__item',
        text: 'Accessories',
        link: '/accessories'
      },
      {
        class: 'mega-menu__item',
        text: 'World of',
        link: '/world-of'
      }
    ]
  }
}
