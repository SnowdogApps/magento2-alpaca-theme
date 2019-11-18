describe('Adding simple product to cart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ simpleProduct }) => {
      cy.visit(simpleProduct)
      cy.waitForCustomerData()
    })
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
  })
})

describe('Change Qty of simple product', function() {
  it('Change product qty in cart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty')
      .clear()
      .type('4')
    cy.get('.minicart-product__info')
      .contains('Update')
      .focus()
      .click()
  })
})

describe('Remove simple product from cart', function() {
  it('Delate item form cart', () => {
    cy.get('[data-testid=delete-item-link]').click()
    // TODO: Why is this chained that way?
    cy.get('.modal-inner-wrap .modal-footer').then(() => {
      cy.get('.modal-footer button')
        .eq(1)
        .click()
      cy.go('forward')
      cy.waitForCartData()
    })
  })
})
