function pickRandomitem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Configurable product add to minicart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ configurableProduct }) => {
      cy.visit(configurableProduct)
      cy.waitForCustomerData()
    })
  })

  it('Checks configurable options', () => {
    cy.get('.swatch-opt').should('be.visible')
    cy.get('.size .swatch__option').then(elements => {
      pickRandomitem(elements).click()
    })
    cy.get('.color .swatch__option').then(elements => {
      pickRandomitem(elements).click()
    })
    cy.get('#product-addtocart-button').click()
    cy.waitForCartData()
  })
})

describe('Configurable product change qty in minicart', function() {
  it('Change product qty in cart', () => {
    cy.get('[data-testid=minicart-link]').click()
    cy.get('.cart-item-qty')
      .click()
      .clear()
      .type('2')
      .click()
    cy.get('.minicart-product__info')
      .contains('Update')
      .click()
  })
})

describe('Configurable product remove in minicart', function() {
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
