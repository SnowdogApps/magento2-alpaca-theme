module.exports = {
  context: {
    mainHeading: {
      text: 'Displaying search results for: Lorem Ipsum',
      class: 'margin-vc-xl text-center'
    },
    icon: {
      class: 'search-no-results__icon',
      id: 'no-results',
      iconTitle: 'No results icon'
    },
    cmsContent: {
      class: 'search-no-results__description',
      text: '<strong>We can\'t find products matching the selection.</strong><br><br> Try again selecting other criteria<br><br>or'
    },
    homeLink: {
      tag: 'a',
      class: 'search-no-results__link',
      attributes: 'href="/" title="Link to home page"',
      text: 'Store Home'
    }
  }
}
