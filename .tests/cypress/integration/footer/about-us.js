describe('FOOTER - About-us footer link test', () => {
  it('clicks on about-us footer link', () => {
    cy.visit('/')
    cy.get('footer[class="footer"]').should('be.visible')
    cy.get('a[class="link footer__link"]').last().click({ force: true })
  })

  it('redirects to about-us page', () => {
    cy.url().should('include', '/about-us')
    cy.get('div[class="about-info cms-content"]').should('be.visible')
  })
})
