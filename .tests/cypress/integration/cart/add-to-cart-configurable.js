function pickRandomitem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

describe('Configurable product', function() {
  before(() => {
    cy.fixture('urls.json').then(({ configurableProduct }) => {
      cy.visit(configurableProduct)
      cy.waitForCustomerData()
    })
  })

  it('Checks configurable options and adding to cart', () => {
    cy.get('.swatch-opt').should('be.visible')
    cy.get('.size .swatch__option').then(items => {
      pickRandomitem(items).click(items)
    })
    cy.get('.color .swatch__option').then(items => {
      pickRandomitem(items).click(items)
    })
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
