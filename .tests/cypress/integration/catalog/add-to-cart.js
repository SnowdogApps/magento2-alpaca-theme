describe('Catalog - Adding to cart', () => {
  it('Configurable product', () => {
    cy.visit('/women')
    cy.get('[data-testid=add-to-cart-button]')
      .first()
      .trigger('mouseover')
      .click()
    cy.get('.product-view').should('be.visible')
  })

  it('Simple product', () => {
    cy.server()
    cy.route('POST', '/checkout/cart/add/product/*').as('addToCart')
    cy.route('/customer/section/load/?sections=cart*').as('getMinicart')

    cy.visit('/gear')
    cy.get('[data-testid=add-to-cart-button]')
      .first()
      .trigger('mouseover')
      .click()

    cy.wait('@addToCart')
    cy.wait('@getMinicart')

    cy.get('.message.message--success').should('be.visible')
    cy.get('.header-button__counter').should('be.visible')
  })
})
