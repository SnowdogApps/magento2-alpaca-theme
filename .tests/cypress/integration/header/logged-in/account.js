// TODO: There is no need to keep this as separate test, you can check both logged/not logged in in one file, saving the tests execution time
describe('HEADER - Account header link as Logged In user', () => {
  before(() => {
    cy.login()
  })

  it('clicks on account header link', () => {
    cy.get('[data-testid=customer-account-link]').click()
    cy.url().should('include', '/customer/account/')
  })

  // TODO: It's not header related
  it('checks user dashboard is visible', () => {
    cy.get('.row').should('be.visible')
    cy.get('.dashboard-nav').should('be.visible')
    cy.get('.dashboard-items').should('be.visible')
    // TODO: Too generic selector + checking the text
    cy.get('.current strong').should('have.text', 'My Account')
  })
})
