describe('Grouped product - add to cart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ groupedProduct }) => {
      cy.visit(groupedProduct)
      cy.waitForCustomerData()
    })
  })

  it('Choose one product from table', () => {
    cy.get('#field-id-1')
      .click()
      .clear()
      .type('1')
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
