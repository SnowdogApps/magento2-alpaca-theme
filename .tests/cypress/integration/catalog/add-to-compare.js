function pickRandomItem(item) {
  return item[Math.floor(Math.random() * item.length)]
}

describe('CATALOG - Compare metric test', () => {
  it('adds product to comparison list', () => {
    cy.fixture('urls.json').then(({ men }) => {
      cy.visit(men)
      cy.waitForCustomerData()
      cy.get('[data-testid=add-to-compare-button]').then(item => {
        pickRandomItem(item).click()
      })
      cy.get('[data-ui-id=message-success]').should('be.visible')
    })
  })

  it('confirms that compare product is displayed in catalog view', () => {
    cy.get('#compare-items').should('be.visible')
  })
})
