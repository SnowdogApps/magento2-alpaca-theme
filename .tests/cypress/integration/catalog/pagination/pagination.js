describe('CATALOG - Pagination test', () => {
  it('checks that pagination is visible', () => {
    cy.select_first_menu()
    cy.get('.pager').should('be.visible')
  })

  it('checks active pagination in next page', () => {
    cy.next_page()
    cy.get('.pager').should('be.visible')
    cy.url().should('include', '?p=2')
  })

  it('checks active pagination in previous page', () => {
    cy.previous_page()
    cy.url().should('not.include', '?p=2')
  })
})
