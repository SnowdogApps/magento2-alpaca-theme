describe('Virtual product', function() {
  it('Visits product', () => {
    cy.visit('/virtual-product-test')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  // TODO: You don't need to check visibility of the page elements to test adding to cart
  it('Check visiblility of content', () => {
    cy.get('.product-view__main-details').should('be.visible')
    cy.get('[data-ui-id=page-title-wrapper]').should('be.visible')
    cy.get('.product-view__information').should('be.visible')
    cy.get('.product-view__sku').should('be.visible')
    cy.get('#product-price-2047').should('be.visible')
    cy.get('.quantity-update').should('be.visible')
    cy.get('#product-addtocart-button').should('be.visible')
    cy.get('.product-view__extra-actions').should('be.visible')
    cy.get('[data-testid=product-tab__title]')
      .contains('Reviews')
      .should('be.visible')
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button')
      .first() // TODO: Avoid using first, use more precise selector instead
      .click()
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('addToCart')
    // TODO: This is not a request that is adding the prodcut to cart, but to gets the currect state of user session that includes cart data to update the UI
    cy.wait('@addToCart')
  })

  it('Check if mini-cart is not empty', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
    cy.contains('You have no items in your shopping cart.').should(
      'not.be.visible'
    )
  })
})
