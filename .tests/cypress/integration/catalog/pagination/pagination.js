describe('CATALOG - Pagination test', () => {
  it('checks that pagination is visible', () => {
    cy.visit('/gear')
    cy.get('.pager').should('be.visible')
  })

  it('checks active pagination in next page', () => {
    cy.nextPage()
    cy.get('.pager').should('be.visible')
    cy.url().should('include', '?p=2')
  })

  it('checks active pagination in previous page', () => {
    cy.previousPage()
    cy.url().should('not.include', '?p=2')
  })
})
