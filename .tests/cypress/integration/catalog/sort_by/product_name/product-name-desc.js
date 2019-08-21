describe('CATALOG - Sort By Product name descending test', () => {
  it('selects sorting by Product name descending', () => {
    cy.select_first_menu()
    cy.get('.choices').first().click()
    cy.get('#choices-sort-by-item-choice-6').click()
    cy.url().should('include', '?dir=desc')
  })

  it('checks active sort by Product name descending in next page', () => {
    cy.next_page()
    cy.get('#sort-by').should('be.visible')
    cy.url().should('include', '?p=2&dir=desc')
  })

  it('checks active sort by Product name descending in previous page', () => {
    cy.previous_page()
    cy.get('#sort-by').should('be.visible')
    cy.url().should('include', '?dir=desc')
  })
})
