function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Catalog - Adding product to comparison list', () => {
  before(() => {
    cy.fixture('urls.json').then(({ categoryWithConfigurableProducts }) => {
      cy.visit(categoryWithConfigurableProducts)
      cy.waitForCustomerData()
    })
  })
  it('adds a product and displays success massage.', () => {
    cy.get('[data-testid=add-to-compare-button]').then(item => {
      pickRandomItem(item).click()
    })

    // Check if the success message is displayed
    cy.get('[data-ui-id=message-success]').should('be.visible')

    // checks that compare product is displayed in view
    cy.get('#compare-items').should('be.visible')
  })
})
