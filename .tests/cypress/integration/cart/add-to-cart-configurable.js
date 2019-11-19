function pickRandomitem(items) {
  return items[Math.floor(Math.random() * items.length)]
}

describe('Configurable product - add to cart', function() {
  before(() => {
    cy.fixture('urls.json').then(({ configurableProduct }) => {
      cy.visit(configurableProduct)
      cy.waitForCustomerData()
    })
  })

  it('Checks configurable options', () => {
    cy.get('.swatch-opt').should('be.visible')
    cy.get('.size .swatch__option').then(items => {
      pickRandomitem(items).click(items)
    })
    cy.get('.color .swatch__option').then(items => {
      pickRandomitem(items).click(items)
    })
  })

  it('Add configurable product to cart', () => {
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
