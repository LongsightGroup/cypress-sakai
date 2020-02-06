// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add('sakaiLogin', (username) => {
    Cypress.log({
      name: 'sakaiLogin',
      message: `${username}`,
    })

    return cy.request({
      method: 'POST',
      url: '/portal/xlogin',
      form: true,
      body: {
        eid: username,
        pw: (username === 'admin' ? 'admin' : 'sakai'),
      },
    })
  })

  Cypress.Commands.add('sakaiUuid', () => {
    let uuid = Cypress.env('TRAVIS_BUILD_NUMBER')
    if (Cypress._.isEmpty(uuid)) {
        uuid = Cypress._.floor(Date.now() / 1000)
    }
    return Cypress._.toString(uuid);
  })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
