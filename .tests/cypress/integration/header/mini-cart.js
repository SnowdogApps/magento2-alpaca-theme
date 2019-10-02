// TODO: It's not a link, but a button that opens the minicart dropdown
// TODO: These tests are way too simple
describe('HEADER - Cart header link', () => {
  it('clicks on cart button.', () => {
    cy.visit('/')
    cy.server()
    cy.route('/customer/section/load/?sections=cart*').as('getCart')
    cy.wait('@getCart')
    cy.get('[data-testid=minicart-link]').click()
    cy.get('#minicart-content-wrapper').should('be.visible')
  })
})
