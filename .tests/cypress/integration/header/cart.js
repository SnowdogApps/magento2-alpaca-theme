describe('HEADER - Cart header link', () => {
  it('clicks on cart button.', () => {
    cy.visit('/')
    cy.get('[data-testid=minicart-link]').as('cartButton')
    cy.wait(2000)
    cy.get('@cartButton').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
  })
})
