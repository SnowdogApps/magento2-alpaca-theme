describe('Homepage test', () => {
  it('checks homepage is visible.', () => {
    cy.visit('/')
    cy.get('div[class="home"]').should('be.visible')
  })

  it('checks header is visble in homepage.', () => {
    cy.get('.header').should('be.visible')
  })

  it('checks menu is visble in homepage.', () => {
    cy.get('#mega-menu').should('be.visible')
  })

  it('checks banner is visble in homepage.', () => {
    cy.get('a[class="banner "]').should('be.visible')
  })
  it('checks containers is visble in homepage.', () => {
    cy.get('.container').should('be.visible')
  })
  it('checks footer is visble in homepage.', () => {
    cy.get('.footer').should('be.visible')
  })
})
