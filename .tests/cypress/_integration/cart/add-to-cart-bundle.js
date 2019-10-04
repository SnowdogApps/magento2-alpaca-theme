describe('Bundle product', function() {
  it('Visits product', () => {
    cy.visit('/sprite-yoga-companion-kit')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  // TODO: You don't need to check visibility of the page elements to test adding to cart
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
    cy.get('[data-testid=product-tab__title]')
      .contains('Details')
      .should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews')
      .should('be.visible')
  })

  it('Test product options', () => {
    cy.get('#product-options-wrapper').should('be.visible')

    // TODO: Use better selectors to not use "multiple"
    cy.get('.radio__fieldset .radio__label').click({ multiple: true })

    cy.get('#product-addtocart-button')
      .first() // TODO: Avoid using first, use more precise selector instead
      .click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')

    // TODO: Check the `.tests/cypress/integration/catalog/add-to-cart.js` file to get the proper way of checking if there is something in the cart
    cy.contains('You have no items in your shopping cart.').should(
      'not.be.visible'
    )
  })

  // TODO: This is test of adding to cart, not the cart itself, it shouldn't be the part of this test
  it('Check cart view', () => {
    cy.get('[data-testid=view-cart-link]')
      .click()
      .url('should.have', '/cart')
    cy.get('.cart-list-item').contains('Sprite Yoga Companion Kit')
    cy.get('.cart-list-item__data').should('be.visible')
  })

  // TODO: This is test of adding to cart, not the cart itself, it shouldn't be the part of this test
  it('Are totals displayed', () => {
    cy.server({
      whitelist: () => false
    })
    cy.route('/customer/section/load/?sections=cart*').as('getTotals')
    cy.route(
      '/static/*/frontend/Snowdog/alpaca/*/Magento_Checkout/template/cart/totals.html'
    ).as('getTotalsTemplate')
    cy.route(
      '/static/*/frontend/Snowdog/alpaca/*/Magento_Tax/template/checkout/cart/totals/grand-total.html'
    ).as('getGrandTotalTemplate')
    cy.wait('@getTotals')
    cy.wait('@getTotalsTemplate')
    cy.wait('@getGrandTotalTemplate')
    cy.get('#cart-totals .cart-totals__row-value--total')
  })
})
