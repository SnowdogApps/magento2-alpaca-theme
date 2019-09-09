describe('CATALOG - Sort By Product name ascending test', () => {
  it('selects sorting by Product name ascending', () => {
    cy.randomCategory()
    cy.get('.toolbar__sorter').should('be.visible')
    cy.get('.choices').first().click()
    cy.get('#choices-sort-by-item-choice-5').click()
  })

  it('checks active sort by Product name ascending in next page', () => {
    cy.nextPage()
    cy.url().should('include', '?p=2')
    cy.get('#sort-by').should('be.visible')
  })

  it('checks active sort by Product name ascending in previous page', () => {
    cy.previousPage()
    cy.get('#sort-by').should('be.visible')
  })
})
