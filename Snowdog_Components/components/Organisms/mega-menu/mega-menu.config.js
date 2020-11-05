module.exports = {
  title: 'Mega menu',
  context: {
    script: true,
    class: '',
    attributes: '',
    listClass: '',
    menulist: [
      {
        class: 'mega-menu__item--parent mega-menu__item--secondary',
        text: 'New In',
        link: '/new-in',
        list: {
          class: 'mega-menu__inner-list mega-menu__inner-list--level1',
          elements: [
            {
              class: 'mega-menu__inner-item',
              text: 'View all',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Clothing',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Shoes',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Accessories',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Face + Body',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Living + Gifts',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Back in stock',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Trending now',
              linkClass: 'mega-menu__inner-link'
            }
          ]
        }
      },
      {
        class: 'mega-menu__item--parent mega-menu__item--rows',
        text: 'Clothing',
        link: '/clothing',
        list: {
          class: 'mega-menu__inner-list mega-menu__inner-list--level1',
          elements: [
            {
              class: 'mega-menu__inner-item mega-menu__inner-item--inline mega-menu__column-hidden',
              text: 'Row one',
              linkClass: 'mega-menu__inner-link',
              isNested: true,
              content: 'list--link',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                class: 'mega-menu__inner-list',
                elements: [
                  {
                    class: 'mega-menu__inner-item',
                    text: 'columns one item',
                    linkClass: 'mega-menu__inner-link'
                  },
                  {
                    class: 'mega-menu__inner-item',
                    text: 'columns one item 2',
                    linkClass: 'mega-menu__inner-link'
                  }
                ]
              }
            },
            {
              class: 'mega-menu__inner-item mega-menu__column-hidden mega-menu__inner-item--images',
              text: 'Row two',
              linkClass: 'mega-menu__inner-link',
              isNested: true,
              content: 'list--link-content',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                class: 'mega-menu__inner-list',
                elements: [
                  {
                    class: 'mega-menu__inner-item',
                    text: 'Summer',
                    linkClass: 'mega-menu__inner-link',
                    content: 'image',
                    contentContext: {
                      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                      dataSrc: '/images/product/cart-product-160_160.jpg',
                      alt: 'brand name alt text'
                    }
                  },
                  {
                    class: 'mega-menu__inner-item',
                    text: 'Spring',
                    linkClass: 'mega-menu__inner-link',
                    content: 'image',
                    contentContext: {
                      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                      dataSrc: '/images/product/cart-product-160_160.jpg',
                      alt: 'brand name alt text'
                    }
                  },
                  {
                    class: 'mega-menu__inner-item',
                    text: 'Autumn',
                    linkClass: 'mega-menu__inner-link',
                    content: 'image',
                    contentContext: {
                      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                      dataSrc: '/images/product/cart-product-160_160.jpg',
                      alt: 'brand name alt text'
                    }
                  },
                  {
                    class: 'mega-menu__inner-item',
                    text: 'Winter',
                    linkClass: 'mega-menu__inner-link',
                    content: 'image',
                    contentContext: {
                      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                      dataSrc: '/images/product/cart-product-160_160.jpg',
                      alt: 'brand name alt text'
                    }
                  },
                  {
                    class: 'mega-menu__inner-item',
                    text: 'View all',
                    linkClass: 'mega-menu__inner-link',
                    content: 'image',
                    contentContext: {
                      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                      dataSrc: '/images/product/cart-product-160_160.jpg',
                      alt: 'brand name alt text'
                    }
                  },
                  {
                    class: 'mega-menu__inner-item',
                    text: 'lorem ipsum',
                    linkClass: 'mega-menu__inner-link',
                    content: 'image',
                    contentContext: {
                      src: 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
                      dataSrc: '/images/product/cart-product-160_160.jpg',
                      alt: 'brand name alt text'
                    }
                  }
                ]
              }
            },
            {
              class: 'mega-menu__inner-item mega-menu__column-hidden mega-menu__inner-item--columns',
              text: 'Row three',
              linkClass: 'mega-menu__inner-link',
              isNested: true,
              content: 'list--link',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                class: 'mega-menu__inner-list',
                elements: [
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 c 1',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item mega-menu__inner-item--children',
                          text: 'Men',
                          linkClass: 'mega-menu__inner-link',
                          isNested: true,
                          content: 'list--link',
                          contentContext: {
                            listTag: 'ul',
                            elementTag: 'li',
                            class: 'mega-menu__inner-list',
                            elements: [
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Elegant',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Casual',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Active',
                                linkClass: 'mega-menu__inner-link'
                              }
                            ]
                          }
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Wallets',
                          linkClass: 'mega-menu__inner-link'
                        }
                      ]
                    }
                  },
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 column 2',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item mega-menu__inner-item--children',
                          text: 'Women',
                          linkClass: 'mega-menu__inner-link',
                          isNested: true,
                          content: 'list--link',
                          contentContext: {
                            listTag: 'ul',
                            elementTag: 'li',
                            class: 'mega-menu__inner-list',
                            elements: [
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Elegant',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Casual',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Active',
                                linkClass: 'mega-menu__inner-link'
                              }
                            ]
                          }
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Bags',
                          linkClass: 'mega-menu__inner-link'
                        }
                      ]
                    }
                  },
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 column 3',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item mega-menu__inner-item--children',
                          text: 'Kids',
                          linkClass: 'mega-menu__inner-link',
                          isNested: true,
                          content: 'list--link',
                          contentContext: {
                            listTag: 'ul',
                            elementTag: 'li',
                            class: 'mega-menu__inner-list',
                            elements: [
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Pijamas',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'School Days',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item mega-menu__inner-item--children',
                                text: 'Kids Fance Dress',
                                linkClass: 'mega-menu__inner-link',
                                isNested: true,
                                content: 'list--link',
                                contentContext: {
                                  listTag: 'ul',
                                  elementTag: 'li',
                                  class: 'mega-menu__inner-list',
                                  elements: [
                                    {
                                      class: 'mega-menu__inner-item',
                                      text: 'Hats',
                                      linkClass: 'mega-menu__inner-link'
                                    },
                                    {
                                      class: 'mega-menu__inner-item',
                                      text: 'Special Ocassions',
                                      linkClass: 'mega-menu__inner-link'
                                    }
                                  ]
                                }
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 column 4',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Jackets',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Shirts',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Dresses',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Trousers',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Hats',
                          linkClass: 'mega-menu__inner-link'
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        class: '',
        text: 'Shoes',
        link: '/shoes'
      },
      {
        class: '',
        text: 'Furniture',
        link: '/furniture',
      },
      {
        class: '',
        text: 'Accessories',
        link: '/accessories'
      },
      {
        class: 'mega-menu__item--parent mega-menu__item--rows',
        text: 'Activewear',
        link: '/activewear',
        list: {
          class: 'mega-menu__inner-list mega-menu__inner-list--level1',
          elements: [
            {
              class: 'mega-menu__inner-item mega-menu__inner-item--columns mega-menu__column-hidden',
              text: 'Row one',
              linkClass: 'mega-menu__inner-link',
              isNested: true,
              content: 'list--link',
              contentContext: {
                listTag: 'ul',
                elementTag: 'li',
                class: 'mega-menu__inner-list',
                elements: [
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 c 1',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item mega-menu__inner-item--children',
                          text: 'Men',
                          linkClass: 'mega-menu__inner-link',
                          isNested: true,
                          content: 'list--link',
                          contentContext: {
                            listTag: 'ul',
                            elementTag: 'li',
                            class: 'mega-menu__inner-list',
                            elements: [
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Elegant',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Casual',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Active',
                                linkClass: 'mega-menu__inner-link'
                              }
                            ]
                          }
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Wallets',
                          linkClass: 'mega-menu__inner-link'
                        }
                      ]
                    }
                  },
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 column 2',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item mega-menu__inner-item--children',
                          text: 'Women',
                          linkClass: 'mega-menu__inner-link',
                          isNested: true,
                          content: 'list--link',
                          contentContext: {
                            listTag: 'ul',
                            elementTag: 'li',
                            class: 'mega-menu__inner-list',
                            elements: [
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Elegant',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Casual',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Active',
                                linkClass: 'mega-menu__inner-link'
                              }
                            ]
                          }
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Bags',
                          linkClass: 'mega-menu__inner-link'
                        }
                      ]
                    }
                  },
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 column 3',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item mega-menu__inner-item--children',
                          text: 'Kids',
                          linkClass: 'mega-menu__inner-link',
                          isNested: true,
                          content: 'list--link',
                          contentContext: {
                            listTag: 'ul',
                            elementTag: 'li',
                            class: 'mega-menu__inner-list',
                            elements: [
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Pijamas',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'School Days',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Fance Dress',
                                linkClass: 'mega-menu__inner-link'
                              },
                              {
                                class: 'mega-menu__inner-item',
                                text: 'Special Occasion',
                                linkClass: 'mega-menu__inner-link'
                              }
                            ]
                          }
                        }
                      ]
                    }
                  },
                  {
                    class: 'mega-menu__inner-item mega-menu__column-hidden',
                    text: 'row 3 column 4',
                    linkClass: 'mega-menu__inner-link',
                    isNested: true,
                    content: 'list--link',
                    contentContext: {
                      listTag: 'ul',
                      elementTag: 'li',
                      class: 'mega-menu__inner-list',
                      elements: [
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Jackets',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Shirts',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Dresses',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Trousers',
                          linkClass: 'mega-menu__inner-link'
                        },
                        {
                          class: 'mega-menu__inner-item',
                          text: 'Hats',
                          linkClass: 'mega-menu__inner-link'
                        }
                      ]
                    }
                  }
                ]
              }
            },
            {
              text: false,
            }
          ]
        }
      },
      {
        class: 'mega-menu__item--parent mega-menu__item--secondary',
        text: 'Brands Brands',
        link: '/brands',
        list: {
          class: 'mega-menu__inner-list mega-menu__inner-list--level1',
          elements: [
            {
              class: 'mega-menu__inner-item',
              text: 'View all',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Clothing',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Shoes',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Accessories',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Face + Body',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Living + Gifts',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Back in stock',
              linkClass: 'mega-menu__inner-link'
            },
            {
              class: 'mega-menu__inner-item',
              text: 'Trending now',
              linkClass: 'mega-menu__inner-link'
            }
          ]
        }
      }
    ]
  }
}
