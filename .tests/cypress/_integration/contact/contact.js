// TODO: It's not header related
// TODO: It only proves that if loading the contact page, load the contact page - should be removed
describe('HEADER - Contact header link as Guest user', () => {
  it('redirects guest user to contact page.', () => {
    cy.visit('/contact')
    cy.url().should('include', '/contact')
    cy.get('#contact-form').should('be.visible')
  })
})
