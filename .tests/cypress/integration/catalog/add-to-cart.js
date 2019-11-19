function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Catalog - Add configurable product to cart', () => {
  before(() => {
    cy.fixture('urls.json').then(({ categoryWithConfigurableProducts }) => {
      cy.visit(categoryWithConfigurableProducts)
      cy.waitForCustomerData()
    })
  })

  it('Add configurable product from catalog', () => {
    cy.get('[data-testid=add-to-cart-button]').then(item => {
      pickRandomItem(item).click()
    })
    cy.waitForCustomerData()
    cy.get('.message.message--notice').should('be.visible')
  })
})

describe('Catalog - add Simple product from catalog', () => {
  before(() => {
    cy.fixture('urls.json').then(({ categoryWithSimpleProducts }) => {
      cy.visit(categoryWithSimpleProducts)
      cy.waitForCustomerData()
    })
  })

  it('Add configurable product from catalog', () => {
    cy.get('[data-testid=add-to-cart-button]').then(item => {
      pickRandomItem(item).click()
    })
    cy.waitForCartData()
    // Check if the success message is displayed
    cy.get('.message.message--success').should('be.visible')
    // Check if there are some items in the cart
    cy.get('.header-button__counter').should('be.visible')
  })
})
