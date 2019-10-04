import faker from 'faker'

// TODO: Test the whole newsetter in single test file, there in no point in spliting it
describe('Newsletter validation', () => {
  // TODO: Descritopn is missleading
  it('checks newsletter functionality in footer.', () => {
    cy.get('.footer').should('be.visible')
    cy.get('#newsletter-validate-detail').should('be.visible')
    cy.get('.newsletter__heading').should('be.visible')
    cy.get('#newsletter').should('have.attr', 'placeholder', 'Enter your email')
    cy.get('[data-testid=submit-newsletter-button]')
      .as('submitButton') // TODO: Pointless alias
      .should('be.visible')
    cy.get('.newsletter__agreements').should('be.visible')
  })

  it('Submit empty newsletter form', () => {
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('#newsletter-error').should('have.text', 'This is a required field.')
    // TODO: Don't check the text
    cy.get('#newsletterAgrrement-error').should(
      'have.text',
      'This is a required field.'
    )
  })

  it('Submit already subcribed user to newsletter', () => {
    // TODO: Use fixtures for storing data
    cy.fixture('user.json').then(({ login }) => {
      cy.get('#newsletter').type(login)
    })
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid=submit-newsletter-button]').click()
    cy.get('[data-ui-id="message-error"]').should('be.visible')
  })

  it('Submit newsletter form using invalid email', () => {
    cy.get('#newsletter').type('qwe@')
    cy.get('#newsletterAgrrement').click()
    cy.get('[data-testid=submit-newsletter-button]').click()
    // TODO: Don't check the text
    cy.get('#newsletter-error').should(
      'have.text',
      'Please enter a valid email address.'
    )
  })

  it('Submit newsletter form without selecting Terms and condition checkbox', () => {
    cy.get('#newsletter').type(faker.internet.email())
    cy.get('[data-testid=submit-newsletter-button]').click()
    // TODO: Don't check the text
    cy.get('#newsletterAgrrement-error').should(
      'have.text',
      'This is a required field.'
    )
  })

  // TODO: Lack of checking the success path
})
