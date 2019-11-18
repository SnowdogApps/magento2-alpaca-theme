describe('Grouped product', function() {
  before(() => {
    cy.fixture('urls.json').then(({ groupedProduct }) => {
      cy.visit(groupedProduct)
      cy.waitForCustomerData()
    })
  })

  it('Choose product from table', () => {
    cy.get('#field-id-1')
      .click()
      .clear()
      .type('1')
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
