// TODO: These tests are not chcking the home page, but generic elements, that exist on every page
describe('Homepage test', () => {
  it('checks homepage is visible.', () => {
    cy.visit('/')
    cy.get('.home').should('be.visible')
  })

  it('checks header is visble in homepage.', () => {
    cy.get('.header').should('be.visible')
  })

  it('checks menu is visble in homepage.', () => {
    cy.get('#mega-menu').should('be.visible')
  })

  it('checks banner is visble in homepage.', () => {
    cy.get('.banner ').should('be.visible')
  })

  it('checks containers is visble in homepage.', () => {
    cy.get('.container').should('be.visible')
  })

  it('checks footer is visble in homepage.', () => {
    cy.get('.footer').should('be.visible')
  })
})
