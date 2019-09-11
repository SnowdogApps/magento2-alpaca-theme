describe('CATALOG - product limiter test', () => {
  it('checks that limiter is displayed', () => {
    cy.visit('/men/tops-men')
    cy.get('.toolbar__limiter').should('be.visible')
  })

  it('selects a number from limiter list', () => {
    cy.get('.choices')
      .last()
      .click()
    cy.get('#choices-limiter-item-choice-2').click()
  })

  it('checks that new limiter is active', () => {
    cy.url().should('include', '?limit=15')
    cy.get('.catalog-grid-item').should($el => {
      expect($el).to.have.length(15)
    })
  })
})
