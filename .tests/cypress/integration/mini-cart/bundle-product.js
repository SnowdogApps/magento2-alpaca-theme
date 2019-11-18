describe('Bundle product add to cart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ bundleProduct }) => {
      cy.visit(bundleProduct)
      cy.waitForCustomerData()
    })
  })

  it('Test product options', () => {
    cy.get('#product-addtocart-button')
      .first()
      .click()
    cy.server()
    cy.waitForCartData()
  })
})

describe('Bundle product change qty in cart', function() {
  it('Change product qty in cart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty')
      .clear()
      .type('2')
      .click()
    cy.get('.minicart-product__info')
      .contains('Update')
      .click()
    cy.waitForCartData()
  })
})

describe('Removing product from cart', () => {
  it('Delate item form cart', () => {
    cy.get('[data-testid=delete-item-link]').click()
    // TODO: Why is this chained that way? - Its the only way I found to click "ok" button in popup
    cy.get('.modal-inner-wrap .modal-footer').then(() => {
      cy.get('.modal-footer button')
        .eq(1)
        .click()
      cy.go('forward')
      cy.server()
      cy.waitForCartData()
    })
  })
})
