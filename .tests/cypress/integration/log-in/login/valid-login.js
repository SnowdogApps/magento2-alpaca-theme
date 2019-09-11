describe('Valid credentials login test', () => {
  before(() => {
    cy.account()
  })

  it('logins user with valid credentials', () => {
    cy.login()
  })

  it('redirects user to account page', () => {
    cy.url().should('include', '/customer/account/index')
  })

  it('checks user dashboard is visible', () => {
    cy.get('.row').should('be.visible')
    cy.get('.dashboard-nav').should('be.visible')
    cy.get('.dashboard-items').should('be.visible')
  })
})
