// TODO: This tests proves that if you click a link it will load the url from the link + it's heavily dependent on the content, which can be easily changed via admin - this should be just removed
describe('FOOTER - About-us footer link test', () => {
  it('clicks on about-us footer link', () => {
    cy.visit('/')
    cy.get('.footer').should('be.visible')
    cy.get('.footer__link')
      .last()
      .click({ force: true })
  })

  it('redirects to about-us page', () => {
    cy.url().should('include', '/about-us')
    cy.get('.about-info').should('be.visible')
  })
})
