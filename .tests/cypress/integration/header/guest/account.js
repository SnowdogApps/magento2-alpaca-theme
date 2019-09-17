describe('HEADER - Account header link as Guest user', () => {
  it('redirects guest user to customer login page.', () => {
    cy.visit('/customer/account/')
    cy.get('.login__form').should('be.visible')
  })
})
