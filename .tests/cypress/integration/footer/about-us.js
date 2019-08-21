describe('FOOTER - About-us footer link test', () => {
  it('clicks on about-us footer link', () => {
    cy.visit('/')
    cy.get('.footer').should('be.visible')
    cy.get('.footer__link').last().click({ force: true })
  })

  it('redirects to about-us page', () => {
    cy.url().should('include', '/about-us')
    cy.get('.about-info').should('be.visible')
  })
})
