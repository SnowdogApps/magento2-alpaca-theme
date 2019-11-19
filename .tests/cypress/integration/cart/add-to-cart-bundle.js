describe('Bundle product - add to cart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ bundleProduct }) => {
      cy.visit(bundleProduct)
      cy.waitForCustomerData()
    })
  })

  it('Add bundle product to cart', () => {
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
    // Check if the success message is displayed
    cy.get('.message.message--success').should('be.visible')
  })

  it('Check if bundle product is in cart', () => {
    cy.fixture('urls.json').then(({ cartView }) => {
      cy.visit(cartView)
    })
    cy.get('.cart-list-item')
  })
})
