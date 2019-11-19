describe('Simple product', function() {
  before(() => {
    cy.fixture('urls.json').then(({ simpleProduct }) => {
      cy.visit(simpleProduct)
      cy.waitForCustomerData()
    })
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
    // Check if the success message is displayed
    cy.get('.message.message--success').should('be.visible')
  })

  it('Check if product is in cart', () => {
    cy.fixture('urls.json').then(({ cartView }) => {
      cy.visit(cartView)
    })
    cy.get('.cart-list-item')
  })
})
