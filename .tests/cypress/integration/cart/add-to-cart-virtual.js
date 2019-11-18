describe('Virtual product', function() {
  it('Visits product', () => {
    cy.visit('/virtual-product-test')
    cy.get('.breadcrumbs__list').should('be.visible')
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
  })

  it('Check if product is in cart', () => {
    cy.fixture('urls.json').then(({ cartView }) => {
      cy.visit(cartView)
      cy.waitForCartData()
    })
    cy.get('.cart-list-item')
  })
})
