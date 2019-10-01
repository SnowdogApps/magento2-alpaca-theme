import './commands'
import './local-storage'

before(() => {
  // Hide premissions popup
  cy.setCookie('permission-cookies', 'true')
  cy.setCookie('permission-profiling', 'true')

  // Keep cookies beween tests
  Cypress.Cookies.defaults({
    whitelist: [
      'form_key',
      'permission-cookies',
      'permission-profiling',
      'PHPSESSID',
      'section_data_ids',
      'X-Magento-Vary'
    ]
  })
})

after(() => {
  // Clear cookie after tests to enable running test several times
  cy.clearCookie('form_key')
  cy.clearCookie('PHPSESSID')
  cy.clearCookie('section_data_ids')
})
