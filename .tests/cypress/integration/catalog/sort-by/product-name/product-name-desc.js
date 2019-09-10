describe('CATALOG - Sort By Product name descending test', () => {
  it('selects sorting by Product name descending', () => {
    cy.randomCategory()
    cy.get('.choices')
      .first()
      .click()
    cy.get('#choices-sort-by-item-choice-6').click()
    cy.url().should('include', '?dir=desc')
  })

  it('checks active sort by Product name descending in next page', () => {
    cy.nextPage()
    cy.get('#sort-by').should('be.visible')
    cy.url().should('include', '?p=2&dir=desc')
  })

  it('checks active sort by Product name descending in previous page', () => {
    cy.previousPage()
    cy.get('#sort-by').should('be.visible')
    cy.url().should('include', '?dir=desc')
  })
})
