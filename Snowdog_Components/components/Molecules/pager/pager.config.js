module.exports = {
  collated: true,
  context: {
    attributes: 'role="navigation" aria-label="Pagination navigation"',
    arrowLeftActive: false,
    arrowRightActive: true,
    ariaLabelLeft: 'Link to previous page, disabled',
    ariaLabelRight: 'Link to next page',
    navItem : {
      class: 'button button--icon',
      iconPrev: {
        id: 'arrow-left',
        class: 'pager__link-prev',
        hidden: true
      },
      iconNext: {
        id: 'arrow-right',
        class: 'pager__link-next',
        hidden: true
      }
    },
    pages: [
      {
        pageNo: '1',
        active: true
      },
      {
        pageNo: 2,
        active: false,
        class: 'link',
        ariaLabel: 'Link to page 2'
      },
      {
        pageNo: 3,
        active: false,
        class: 'link',
        ariaLabel: 'Link to page 3'
      },
      {
        pageNo: 4,
        active: false,
        class: 'link',
        ariaLabel: 'Link to page 4'
      },
      {
        pageNo: 5,
        active: false,
        class: 'link',
        ariaLabel: 'Link to page 5'
      }
    ]
  },
  variants: [
    {
      name: 'both arrows',
      context: {
        arrowLeftActive: true,
        arrowRightActive: true,
        ariaLabelLeft: 'Link to previous page',
        ariaLabelRight: 'Link to next page',
        pages: [
          {
            pageNo: 1,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 1'
          },
          {
            pageNo: 2,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 2'
          },
          {
            pageNo: 3,
            active: true,
            ariaLabel: 'Link to page 3'
          },
          {
            pageNo: 4,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 4'
          },
          {
            pageNo: 5,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 5'
          }
        ]
      }
    },
    {
      name: 'arrow left',
      context: {
        arrowLeftActive: true,
        arrowRightActive: false,
        ariaLabelLeft: 'Link to previous page',
        ariaLabelRight: 'Link to next page, disabled',
        pages: [
          {
            pageNo: 1,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 1'
          },
          {
            pageNo: 2,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 2'
          },
          {
            pageNo: 3,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 3'
          },
          {
            pageNo: 4,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 4'
          },
          {
            pageNo: 5,
            active: true
          }
        ]
      }
    },
    {
      name: 'more sites',
      context: {
        arrowLeftActive: true,
        arrowRightActive: true,
        ariaLabelLeft: 'Link to previous page',
        ariaLabelRight: 'Link to next page',
        pages: [
          {
            pageNo: 6,
            active: true
          },
          {
            pageNo: 7,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 7'
          },
          {
            pageNo: '...',
            class: 'link',
            active: false
          },
          {
            pageNo: 17,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 17'
          },
          {
            pageNo: 18,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 18'
          }
        ]
      }
    },
    {
      name: 'arrow right',
      context: {
        arrowLeftActive: true,
        arrowRightActive: true,
        ariaLabelLeft: 'Link to previous page',
        ariaLabelRight: 'Link to next page',
        pages: [
          {
            pageNo: 13,
            active: true
          },
          {
            pageNo: 14,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 14'
          },
          {
            pageNo: 15,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 15'
          },
          {
            pageNo: 16,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 16'
          },
          {
            pageNo: 17,
            active: false,
            class: 'link',
            ariaLabel: 'Link to page 17'
          }
        ]
      }
    }
  ]
};
