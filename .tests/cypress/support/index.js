import './commands'

before(() => {
  // Hide premissions popup
  cy.setCookie('permission-cookies', 'true')
  cy.setCookie('permission-profiling', 'true')
  cy.setCookie('mage-cache-sessid', 'true')
  // Keep cookies beween tests
  Cypress.Cookies.defaults({
    whitelist: [
      'frontend',
      'X-Magento-Vary',
      'permission-cookies',
      'permission-profiling',
      'PHPSESSID',
      'form_key'
    ]
  })
})

after(() => {
  // Clear cookie after tests to enable running test several times
  cy.clearCookie('frontend')
  cy.clearCookie('permission-cookies')
  cy.clearCookie('permission-profiling')
  cy.clearCookie('form_key')
  cy.clearCookie('PHPSESSID')
  cy.clearCookie('mage-cache-sessid')
})
