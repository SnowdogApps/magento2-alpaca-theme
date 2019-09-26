describe('HEADER - Contact header link as Logged In user', () => {
  before(() => {
    cy.login()
  })

  it('redirects logged in user to contact page.', () => {
    cy.visit('/contact')
    cy.url().should('include', '/contact')
  })

  it('checks if contact form is visible', () => {
    cy.get('#contact-form').should('be.visible')
    cy.fixture('user.json').then(({ login }) => {
      cy.get('#email').should('have.value', login)
    })
  })
})
