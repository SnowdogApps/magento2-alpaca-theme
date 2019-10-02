// TODO: IMO it's soooo minor to check if that input is filled up when user is logged in, that we shouldn't test it
describe('HEADER - Contact header link as Logged In user', () => {
  before(() => {
    cy.login()
  })

  // TODO: This test is pointless, it's obvious that loading the `/contact` will load the `/contact`
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
