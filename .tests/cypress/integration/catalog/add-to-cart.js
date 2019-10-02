describe('Catalog - Adding to cart', () => {
  it('Configurable product', () => {
    // TODO: Store categories URLs in fixtures
    cy.visit('/women')
    cy.get('[data-testid=add-to-cart-button]')
      .first() // TODO: Avoid using 'first`, write more precise selector instead
      .trigger('mouseover')
      .click()
    cy.get('.product-view').should('be.visible')
  })

  it('Simple product', () => {
    cy.server()
    cy.route('POST', '/checkout/cart/add/product/*').as('addToCart')
    cy.route('/customer/section/load/?sections=cart*').as('getMinicart')

    // TODO: Store categories URLs in fixtures
    cy.visit('/gear')
    cy.get('[data-testid=add-to-cart-button]')
      .first() // TODO: Avoid using 'first`, write more precise selector instead
      .trigger('mouseover')
      .click()

    cy.wait('@addToCart')
    cy.wait('@getMinicart')

    // Check if the success message is displayed
    cy.get('.message.message--success').should('be.visible')

    // Check if there are some items in the cart
    cy.get('.header-button__counter').should('be.visible')
  })
})
