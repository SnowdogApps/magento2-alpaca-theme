module.exports = {
  context: {
    error: '404',
    heading: 'Whoops, our bad...',
    homeLink: {
      class: 'button--secondary not-found__link',
      attributes: 'href="#" title="Store Home"',
      text: 'Store Home'
    },
    accountLink: {
      class: 'not-found__link',
      attributes: 'href="#" title="My account"',
      text: 'My account'
    },
    text: '<p>The page you requested was not found, and we have a fine guess why.<br>If you typed the URL directly, please make sure the spelling is correct.<br>If you clicked on a link to get here, the link is outdated.</p><p>What can you do?<br>Have no fear, help is near! There are many ways you can get back on track with Magento Store.</p><p>Go back to the previous page.<br>Use the search bar at the top of the page to search for your products.<br>Follow these links to get you back on track!</p>'
  }
}
