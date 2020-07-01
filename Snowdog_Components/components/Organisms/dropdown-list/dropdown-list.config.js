module.exports = {
  context: {
    id: 'dropdown-default',
    dropdowns: [
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'Dropdown title',
        id: 'dropdown-1',
        collapse: {
          class: 'dropdown-list__icon',
          id: 'angle-down',
          title: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'image'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'Dome longer longer and longer dropdown title',
        id: 'dropdown-2',
        collapse: {
          class: 'dropdown-list__icon',
          id: 'angle-down',
          title: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'paragraph'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'Dropdown title',
        id: 'dropdown-3',
        collapse: {
          class: 'dropdown-list__icon',
          id: 'angle-down',
          title: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'image'
      },
      {
        itemTag: 'button',
        itemAttributes: 'aria-expanded="false"',
        title: 'Dropdown title',
        id: 'dropdown-4',
        collapse: {
          class: 'dropdown-list__icon',
          id: 'angle-down',
          title: 'Arrow down',
          attributes: 'aria-hidden="true"'
        },
        contentElement: 'paragraph'
      }
    ]
  },
  variants: [
    {
      name: 'secondary',
      context: {
        class: 'dropdown-list--secondary'
      }
    },
    {
      name: 'with-nested',
      context: {
        class: 'dropdown-list--with-nested',
        dropdowns: [
          {
            itemTag: 'button',
            title: 'dropdown title',
            id: 'dropdown-1',
            itemAttributes: 'aria-expanded="false"',
            collapse: {
              id: 'angle-down',
              title: 'Arrow Down',
              class: 'dropdown-list__icon',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'dropdown-list',
            contentContext: {
              class: 'dropdown-list--inner',
              dropdowns: [
                {
                  itemTag: 'a',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  title: 'Item name',
                  id: 'dropdown-1-1',
                  collapse: {
                    id: 'angle-down',
                    title: 'Arrow Down',
                    class: 'dropdown-list__icon',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#" aria-expanded="false"',
                        id: 'dropdown-1-2',
                        collapse: {
                          id: 'angle-down',
                          title: 'Arrow Down',
                          class: 'dropdown-list__icon',
                          attributes: 'aria-hidden="true"'
                        },
                        contentElement: 'dropdown-list',
                        contentContext: {
                          class: 'dropdown-list--inner',
                          dropdowns: [
                            {
                              itemTag: 'a',
                              title: 'sub sublist item name',
                              itemAttributes: 'href="#"'
                            },
                            {
                              itemTag: 'a',
                              title: 'sub sublist item name',
                              itemAttributes: 'href="#"'
                            }
                          ]
                        }
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-2-2',
                  collapse: {
                    id: 'angle-down',
                    title: 'Arrow Down',
                    class: 'dropdown-list__icon',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  },
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                }
              ]
            }
          },
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false"',
            title: 'dropdown title',
            id: 'dropdown-2',
            collapse: {
              id: 'angle-down',
              title: 'Arrow Down',
              class: 'dropdown-list__icon',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'dropdown-list',
            contentContext: {
              class: 'dropdown-list--inner',
              dropdowns: [
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                }
              ]
            }
          },
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false"',
            title: 'dropdown title',
            id: 'dropdown-3',
            collapse: {
              id: 'angle-down',
              title: 'Arrow Down',
              class: 'dropdown-list__icon',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'dropdown-list',
            contentContext: {
              class: 'dropdown-list--inner',
              dropdowns: [
                {
                  itemTag: 'a',
                  title: 'Item name',
                  id: 'dropdown-3-1',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  collapse: {
                    id: 'angle-down',
                    title: 'Arrow Down',
                    class: 'dropdown-list__icon',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#"',
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-3-2',
                  collapse: {
                    id: 'angle-down',
                    title: 'Arrow Down',
                    class: 'dropdown-list__icon',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      },
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'Item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-3-3',
                  collapse: {
                    id: 'angle-down',
                    title: 'Arrow Down',
                    class: 'dropdown-list__icon',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
                      }
                    ]
                  }
                },
                {
                  itemTag: 'a',
                  title: 'item name',
                  itemAttributes: 'href="#" aria-expanded="false"',
                  id: 'dropdown-3-4',
                  collapse: {
                    id: 'angle-down',
                    title: 'Arrow Down',
                    class: 'dropdown-list__icon',
                    attributes: 'aria-hidden="true"'
                  },
                  contentElement: 'dropdown-list',
                  contentContext: {
                    class: 'dropdown-list--inner',
                    dropdowns: [
                      {
                        itemTag: 'a',
                        title: 'sublist item name',
                        itemAttributes: 'href="#"'
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
      name: 'with-breakpoint',
      context: {
        class: 'dropdown-list--with-breakpoint',
      }
    },
    {
      name: 'inner',
      context: {
        class: 'dropdown-list--inner'
      }
    },
    {
      name: 'Detailed content',
      context: {
        class: 'dropdown-list--detailed-content',
        dropdowns: [
          {
            itemTag: 'a',
            itemAttributes: 'href="#" aria-expanded="false"',
            title: 'dropdown title',
            id: 'dropdown-detailed-content',
            collapse: {
              id: 'angle-down',
              title: 'Arrow Down',
              class: 'dropdown-list__icon',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'list'
          }
        ]
      }
    },
    {
      name: 'Buttons',
      context: {
        class: 'dropdown-list--buttons',
        dropdowns: [
          {
            itemTag: 'button',
            itemAttributes: 'type="button" aria-expanded="false"',
            title: 'dropdown title',
            textClass: 'dropdown-list__text margin-hz-s',
            id: 'dropdown-buttons-content',
            class: 'button button--icon',
            iconBefore: {
              id: 'heart',
              title: 'Heart',
              class: 'button__icon',
              attributes: 'aria-hidden="true"'
            },
            collapse: {
              id: 'angle-down',
              title: 'Arrow Down',
              class: 'dropdown-list__icon button__icon margin-0',
              attributes: 'aria-hidden="true"'
            },
            contentElement: 'list'
          }
        ]
      }
    },
  ]
};
