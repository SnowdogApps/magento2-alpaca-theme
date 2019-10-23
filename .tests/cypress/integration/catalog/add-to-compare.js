function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('Catalog - Adding product to comparison list', () => {
  it('adds a product', () => {
    cy.fixture('urls.json').then(({ men }) => {
      cy.visit(men)
      cy.waitForCustomerData()
      cy.get('[data-testid=add-to-compare-button]').then(item => {
        pickRandomItem(item).click()
      })
      cy.get('[data-ui-id=message-success]').should('be.visible')
      //  confirms that compare product is displayed in view
      cy.get('#compare-items').should('be.visible')
    })
  })
})
