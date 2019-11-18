describe('Grouped product add to cart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ groupedProduct }) => {
      cy.visit(groupedProduct)
      cy.waitForCustomerData()
    })
  })

  it('Choose product from table', () => {
    cy.get('.input__field.input-text.qty').each(el =>
      cy
        .get(el)
        .clear()
        .type('1')
    )
  })

  it('Add product to cart', () => {
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
  })
})

describe('Grouped product change qty', function() {
  it('Change product qty in cart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty').each(el =>
      cy
        .get(el)
        .clear()
        .type('2')
    )
    cy.get('.minicart-product__info')
      .contains('Update')
      .click()
  })
})

describe('Grouped product change qty', function() {
  it('Delate item form cart', () => {
    cy.get('[data-testid=delete-item-link]')
      .first()
      .click()
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
