Cypress.Commands.add('login', () => {
  cy.fixture('user.json').then(({ login, password }) => {
    cy.visit('/customer/account/login/')
    cy.get('input[name="form_key"]')
      .invoke('val')
      .then(formKey => {
        cy.request({
          method: 'POST',
          url: '/customer/account/loginPost',
          form: true,
          body: {
            form_key: formKey,
            'login[username]': login,
            'login[password]': password
          }
        })
      })
  })
})

Cypress.Commands.add('goToProductPage', () => {
  cy.get('[data-testid=catalog-grid-item__link]').then(elements => {
    elements[Math.floor(Math.random() * elements.length)].click(elements)
  })
})

Cypress.Commands.add('addProductToCart', () => {
  cy.randomCategory()
  cy.goToProductPage()
  cy.get('.breadcrumbs__item')

  cy.get('.size .swatch__option')
    .as('Size')
    .then(elements => {
      elements[Math.floor(Math.random() * elements.length)].click(elements)
    })

  cy.get('.color .swatch__option').then(elements => {
    elements[Math.floor(Math.random() * elements.length)].click(elements)
  })

  cy.get('#product-addtocart-button')
    .first()
    .click()

  cy.get('[data-ui-id=message-success]')
    .should('be.visible')
    .log('product added to cart')
})

Cypress.Commands.add('nextPage', () => {
  cy.get('[data-testid=pager-next-link]').click()
})

Cypress.Commands.add('previousPage', () => {
  cy.get('[data-testid=pager-prev-link]').click()
})

Cypress.Commands.add('waitForCustomerData', () => {
  cy.server()
  cy.route('/customer/section/load/?sections=*').as('getCustomerData')
  cy.wait('@getCustomerData')
})
