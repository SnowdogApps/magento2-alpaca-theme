describe('HEADER - Wishlist header link as Logged In user', () => {
    before(() => {
      cy.login()
    })

    it('clicks on account header link', () => {
      cy.get('[data-testid="customer-account-link"]').click()
      cy.url().should('include', '/customer/account/')
    })

    it('checks user dashboard is visible', () => {
        cy.get('div[class="row"]').should('be.visible')
        cy.get('div[class="dashboard-nav"]').should('be.visible')
        cy.get('div[class="dashboard-items"]').should('be.visible')
        cy.get('li[class="nav item current"]').children('strong')
        .should('have.text', 'My Account')
    })

  })
  