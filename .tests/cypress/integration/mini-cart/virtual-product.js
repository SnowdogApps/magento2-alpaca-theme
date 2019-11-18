describe('Virtual product', function() {
  before(() => {
    cy.fixture('urls.json').then(({ virtualProduct }) => {
      cy.visit(virtualProduct)
      cy.waitForCustomerData()
    })
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
  })
})

describe('Change qty of virtual product', function() {
  it('Change product qty in cart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty')
      .clear()
      .type('2')
    cy.get('.minicart-product__info')
      .contains('Update')
      .click()
  })
})

describe('Remove virtual product ', function() {
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
