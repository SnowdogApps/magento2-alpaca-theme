describe('HEADER - Contact header link as Guest user', () => {
  it('redirects guest user to contact page.', () => {
    cy.visit('/contact')
    cy.url().should('include', '/contact')
    cy.get('#contact-form').should('be.visible')
  })
})
