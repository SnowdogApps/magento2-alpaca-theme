describe('Valid credentials login test', () => {
  before(() => {
    cy.account()
  })

  it('redirects user to account page', () => {
    cy.get('#email')
      .type('qwe@qwe.com')
      .should('have.value', 'qwe@qwe.com')
    cy.get('#pass')
      .type('Qweqwe_1')
      .should('have.value', 'Qweqwe_1')
    cy.get('[data-testid=submit-login-button]').click()
    cy.url().should('include', '/customer/account/index')
  })

  it('checks user dashboard is visible', () => {
    cy.get('.row').should('be.visible')
    cy.get('.dashboard-nav').should('be.visible')
    cy.get('.dashboard-items').should('be.visible')
  })
})
