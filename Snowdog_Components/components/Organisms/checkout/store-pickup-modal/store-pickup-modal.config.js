module.exports = {
  meta: {
    checkout: true
  },
  context: {
    search: {
      input: {
        attributes: '',
        class: 'store-pickup-modal__search-field',
        label: {
          attributes: '',
          text: 'Search',
          hidden: false
        },
        field: {
          attributes: '',
          class: '',
          id: 'search',
          name: 'search',
          placeholder: 'Search with postcode or city name...',
          type: 'text'
        }
      },
      button: {
        tag: 'button',
        class: 'store-pickup-modal__search-button',
        attributes: 'type="submit"',
        text: 'Search'
      }
    },
    description: {
      tag: 'p',
      class: 'store-pickup-modal__paragraph',
      text: 'Please provide postcode or city name to find nearest pickup locations.'
    },
    storesTable: {
      captionText: 'This is a table. Binded text in caption should explain what kind of data this table presents. Can be also a longer text with inline HTML elements inside',
      class: 'store-pickup-modal__table margin-0',
      mainTags: [
        {
          mainTag: 'thead',
          rowTags: [
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Location Details'
                },
                {
                  childTag: 'th',
                  childTagAttributes: 'scope="col" role="columnheader"',
                  content: 'Action'
                }
              ]
            },
          ]
        },
        {
          mainTag: 'tbody',
          rowTags: [
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Location Details" role="gridcell"',
                  contentComponent: 'paragraph',
                  contentContext: {
                    tag: 'p',
                    class: '',
                    text: 'Good Wood Store<br>119 Timberbrook Lane<br>Denver, Colorado 80216<br>United States<br><a href="tel:970-355-8188">970-355-8188</a>'
                  }
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action" role="gridcell"',
                  content: '<button type="button" class="button">Ship Here</button>'
                }
              ]
            },
            {
              rowTag: 'tr',
              rowTagAttributes: 'role="row"',
              childTags: [
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Location Details" role="gridcell"',
                  contentComponent: 'paragraph',
                  contentContext: {
                    tag: 'p',
                    class: '',
                    text: 'Good Wood Store 2<br>120 Timberbrook Lane<br>Denver, Colorado 80216<br>United States<br><a href="tel:970-355-8188">970-355-8188</a>'
                  }
                },
                {
                  childTag: 'td',
                  childTagAttributes: 'data-th="Action" role="gridcell"',
                  content: '<button type="button" class="button">Ship Here</button>'
                }
              ]
            }
          ]
        }
      ]
    }
  }
};
