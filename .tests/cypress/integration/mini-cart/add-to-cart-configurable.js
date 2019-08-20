describe('Configurable product', function () {
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
    cy.visit('/configurable-product')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('#product-price-2048').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Details').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Reviews').should('be.visible')
  })

  it('Test reviews tab', () => {
    cy.get('[data-testid=product-tab__title]').contains('Reviews').click()
    cy.get('.product-review__title').contains('Customers reviews')
    cy.get('#review-form').should('be.visible')
    cy.get('#reviewAddButton')
  })
  it('Checks configurable options', () => {
    cy.get('.swatch-opt').should('be.visible').find('.size')
    cy.get('.size').find('.swatch__option')
      .then((elements) => {
        cy.log(elements)
        elements[Math.floor(Math.random() * elements.length)]
          .click(elements)
      })
    cy.get('.color').find('.swatch__option')
      .then((elements) => {
        cy.log(elements)
        elements[Math.floor(Math.random() * elements.length)]
          .click(elements)
      })
    cy.get('#product-addtocart-button').first()
      .click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
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
