describe('Simple product', function () {
  it('Visits product', () => {
    cy.visit('/joust-duffle-bag')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('#product-price-1').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Details').should('be.visible')
    cy.get('[data-testid=product-tab__title]').contains('Reviews').should('be.visible')
  })

  it('Add product to cart', () => {
    cy.get('[data-testid=product-gallery-placeholder]').should('be.visible')
    cy.server({ whitelist: () => false })
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.get('#product-addtocart-button').first().click()
    cy.wait('@getTotals')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    cy.contains('You have no items in your shopping cart.').should('not.be.visible')
  })

  it('Check cart view', () => {
    cy.get('[data-testid=view-cart-link]').click().url('should.have', '/cart')
    cy.get('.cart-list-item').contains('Configurable Product')
    cy.get('.cart-list-item__data').should('be.visible')
  })

  it('Are totals displayed', () => {
    cy.server({ whitelist: () => false })
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.route('/static/*/frontend/Snowdog/alpaca/*/Magento_Checkout/template/cart/totals.html').as('getTotalsTemplate')
    cy.route('/static/*/frontend/Snowdog/alpaca/*/Magento_Tax/template/checkout/cart/totals/grand-total.html').as('getGrandTotalTemplate')
    cy.wait('@getTotals')
    cy.wait('@getTotalsTemplate')
    cy.wait('@getGrandTotalTemplate')
    cy.get('#cart-totals').find('.cart-totals__row-value--total')
  })
})
