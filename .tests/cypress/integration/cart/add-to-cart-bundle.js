describe('Bundle product', function() {
  before(() => {
    cy.fixture('urls.json').then(({ bundleProduct }) => {
      cy.visit(bundleProduct)
      cy.waitForCustomerData()
    })
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
