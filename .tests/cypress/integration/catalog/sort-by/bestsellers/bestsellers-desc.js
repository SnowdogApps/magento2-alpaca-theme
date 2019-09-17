describe('CATALOG - Sort By Best sellers descending test', () => {
  it('selects sorting by Best sellers descending', () => {
    cy.visit('/men/tops-men')
    cy.get('.choices')
      .first()
      .click()
    cy.get('#choices-sort-by-item-choice-2').click()
    cy.url().should('include', '?order=category.category&dir=desc')
  })

  it('checks active sort by Best sellers descending in next page', () => {
    cy.nextPage()
    cy.url().should('include', '?p=2&order=category.category&dir=desc')
  })

  it('checks active sort by Best sellers descending in previous page', () => {
    cy.previousPage()
    cy.url().should('include', '?order=category.category&dir=desc')
  })
})
