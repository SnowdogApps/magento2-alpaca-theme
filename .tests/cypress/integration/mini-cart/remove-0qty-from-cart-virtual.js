describe('Virtual product', function () {
  before(() => {
    // Hide premissions popup
    cy.setCookie('permission-cookies', 'true')
    cy.setCookie('permission-profiling', 'true')
    cy.setCookie('mage-cache-sessid', 'true')
    // Keep cookies beween tests
    Cypress.Cookies.defaults({
      whitelist: [
        'frontend',
        'X-Magento-Vary',
        'permission-profiling',
        'PHPSESSID',
        'form_key'
      ]
    })
  })

  it('Visits product', () => {
    cy.visit('https://alpaca-ce-solr-demo.snowdog.pro/virtual-product-test')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('#product-price-2047').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Reviews').should('be.visible')
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').first().click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait(4000)
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
  })

  it('Change product qty in cart', () => {
    cy.get('.cart-item-qty').clear().type('2')
    cy.get('.minicart-product__info').contains('Update').click()
  })

  it('Qty check', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty').should('have.value', '2')
  })

  after(() => {
    // Clear cookie after tests to enable running test several times
    cy.clearCookie('frontend')
    cy.clearCookie('permission-cookies')
    cy.clearCookie('permission-profiling')
    cy.clearCookie('form_key')
    cy.clearCookie('PHPSESSID')
    cy.clearCookie('mage-cache-sessid')
  })
})
