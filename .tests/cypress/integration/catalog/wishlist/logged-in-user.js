function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Add to Wishlist by Logged in user', () => {
  before(() => {
    cy.setCookie('permission-cookies', 'true')
    cy.setCookie('permission-profiling', 'true')
    cy.setCookie('mage-cache-sessid', 'true')


    Cypress.Cookies.defaults({
      whitelist: [
        'frontend',
        'PHPSESSID',
        'form_key',
        'mage-cache-sessid',
        'permission-cookies',
        'permission-profiling',
        'X-Magento-Vary'
      ]
    })

    cy.login()
  })

  it('clicks on wishlist button', () => {
    cy.select_first_menu()
    cy.get('[data-testid="add-to-wishlist-button"]')
      .then(item => {
        pickRandomItem(item)
          .click()
      })
    cy.url().should('include', '/wishlist/')
    cy.get('[data-ui-id="message-success"]').should('be.visible')
  })

  it('checks if product visibility in wishlist page', () => {
    cy.get('div[data-row="product-item"]').should('be.visible')
    cy.get('div[class="action wishlist__action"]').should('be.visible')
    cy.get('button[class="button button--icon wishlist__remove"]').dblclick()
  })

  it('remove product from wishlist', () => {
    cy.get('button[class="button button--icon wishlist__remove"]').dblclick()
  })

  after(() => {
    cy.clearCookie('PHPSESSID')
    cy.clearCookie('form_key')
    cy.clearCookie('mage-cache-sessid')
    cy.clearCookie('X-Magento-Vary')
    cy.clearCookie('frontend')
  })

})
