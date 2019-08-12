describe('Bundle product delete', function (){
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
    cy.visit('https://alpaca-ce-solr-demo.snowdog.pro/sprite-yoga-companion-kit')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('.price-box').should('be.visible')
    cy.get('#product-options-wrapper').should('be.visible')
    cy.get('.bundle-option').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Details').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Reviews').should('be.visible')
  })

  it('Test product options', () => {
    cy.get('#product-options-wrapper').should('be.visible')
      .then((elements) => {
        cy.log(elements.length)
      })
    cy.get('.radio__fieldset').find('.radio__label')
      .click({
        multiple: true
      })
      .then((elements) => {
        cy.log(elements.length)
      })
    cy.get('#product-addtocart-button').first().click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
  })

  it('Delate item form cart', () => {
    cy.get('[data-testid=delete-item-link]').click()
    cy.get('.modal-inner-wrap').find('.modal-footer')
      .then(() => {
        cy.get('.modal-footer').find('button').eq(1).click()
        cy.go('forward')
        cy.server()
        cy.request('/checkout/cart/').as('cartStatus')
        cy.request('/customer/section/load/?sections=cart*').as('cartSection')
        cy.route('/checkout/sidebar/removeItem/').as('removeItem')
        cy.wait('@removeItem')
      })
  })

  it('Is cart empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper')
    cy.contains('You have no items in your shopping cart.').should('be.visible')
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
