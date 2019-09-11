describe('CATALOG - Sort By Best sellers ascending test', () => {
  it('selects sorting by Best sellers ascending', () => {
    cy.randomCategory()
    cy.get('.choices')
      .first()
      .click()
    cy.get('#choices-sort-by-item-choice-1').click()
    cy.url().should('include', '?order=category.category')
  })

  it('checks active sort by Best sellers ascending in next page', () => {
    cy.nextPage()
    cy.url().should('include', '?p=2&order=category.category')
  })

  it('checks active sort by Best sellers ascending in previous page', () => {
    cy.previousPage()
    cy.url().should('include', '?order=category.category')
  })
})
