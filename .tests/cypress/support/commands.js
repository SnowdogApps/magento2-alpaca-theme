Cypress.Commands.add('account', () => {
  cy.visit('/customer/account/')
  cy.get('.login__form').should('be.visible')
})

Cypress.Commands.add('login', () => {
  cy.account()
  cy.get('#email')
    .type('qwe@qwe.com')
    .should('have.value', 'qwe@qwe.com')
  cy.get('#pass')
    .type('Qweqwe_1')
    .should('have.value', 'Qweqwe_1')
  cy.get('[data-testid=submit-login-button]').click()
})

Cypress.Commands.add('randomCategory', () => {
  cy.visit('/')
  cy.get('.mega-menu__link').then(elements => {
    elements[Math.floor(Math.random() * elements.length)].click(elements)
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

  cy.get('.size')
    .find('.swatch__option')
    .as('Size')
    .then(elements => {
      elements[Math.floor(Math.random() * elements.length)].click(elements)
    })

  cy.get('.color')
    .find('.swatch__option')
    .then(elements => {
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
