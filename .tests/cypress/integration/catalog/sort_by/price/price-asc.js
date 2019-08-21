describe('CATALOG - Sort By Price ascending test', () => {
  it('selects sorting by price ascending', () => {
    cy.select_first_menu()
    cy.get('.choices').first().click()
    cy.get('#choices-sort-by-item-choice-3').click()
    cy.url().should('include', '?order=price')
  })

  it('checks active sort by price ascending in next page', () => {
    cy.next_page()
    cy.url().should('include', '?p=2&order=price')
  })

  it('checks active sort by price ascending in previous page', () => {
    cy.previous_page()
    cy.url().should('include', '?order=price')
  })
})
