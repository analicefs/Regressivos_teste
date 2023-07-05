Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function (first_name, last_name, email, numberphone, description) {
  cy.get('#firstName').type(first_name)
  cy.get('#lastName').type(last_name)
  cy.get('#email').type(email)
  cy.get('#phone').type(numberphone)
  cy.get('#open-text-area').type(description, { delay: 0 })
  cy.get('button[type = "submit"]').click()

})
