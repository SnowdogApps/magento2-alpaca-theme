// TODO: It should be part of the login page tests, there is no point to execute this tests separetly, other than wasting time
describe('Valid credentials login test', () => {
  before(() => {
    cy.visit('/customer/account/')
  })

  it('redirects user to account page', () => {
    cy.fixture('user.json').then(({ login, password }) => {
      cy.get('#email')
        .type(login)
        .should('have.value', login)
      cy.get('#pass')
        .type(password)
        .should('have.value', password)
    })

    cy.get('[data-testid=submit-login-button]').click()
    cy.url().should('include', '/customer/account/index')
  })

  it('checks user dashboard is visible', () => {
    cy.get('.row').should('be.visible')
    cy.get('.dashboard-nav').should('be.visible')
    cy.get('.dashboard-items').should('be.visible')
  })
})
