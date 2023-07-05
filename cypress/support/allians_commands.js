Cypress.Commands.add('closecookies', function () {
  cy.get('#onetrust-reject-all-handler').click({force:true})
  // cy.get('#firstName').type(first_name)
  // cy.get('#lastName').type(last_name)
  // cy.get('#email').type(email)
  // cy.get('#phone').type(numberphone)
  // cy.get('#open-text-area').type(description, { delay: 0 })
  // cy.get('button[type = "submit"]').click()
})

Cypress.Commands.add('fillform', function (first_name, register, email, numberphone) {
  cy.get('#i-name').type(first_name, {force:true})
  cy.get('#i-registrationNumber').type(register, { force: true })
  cy.get('#i-email').type(email, { force: true })
  cy.get('#i-confirm_email').type(email, { force: true })
  cy.get('#i-phone').type(numberphone,{ force: true })
  // cy.get('#r-email-contact').click({ force: true })
  cy.get('.show > .action-button > .next-btn').click({force:true})

})


Cypress.Commands.add('fillformadress', function (cep) {
    
    
  cy.get('#i-zipCode').type(cep, { force: true })
  // cy.wait(3000, { force: true })

  // cy.get('.show > .action-button > .back-step').click({ force: true })

})


Cypress.Commands.add('fillformauto', function () {
  cy.wait(3000)
  cy.get('#interest1Title').select('Moto', { force: true })
  cy.wait(3000)
  cy.get('#nationality').select('Nacional', { force: true })
  cy.get('#interest6Title').select('0km', { force: true })
  cy.get('#i-interest3Title').type('a',{force:true})
  cy.wait(7000)
  cy.get('[class="drop-item"][id="i-DAFRA MaxSym"]').contains('DAFRA MaxSym - 400i Gas. Aut.', { force: true }).click({ force: true })
  cy.get('#i-interest5Title').type('123a', {force:true})
  // cy.get('#i-interest3Title').type('a', {force:true})
  .wait(7000)
  // cy.get('[class="drop-item"][id = "DAFRA MaxSym - 400i Gas.Aut."]', { force: true }).cy.contains('DAFRA MaxSym - 400i Gas. Aut.', { force: true }).click({ force: true })
  // .select('CAOA CHERY ARRIZO 5 - RX 1.5 16V CVT Flex Aut. 4p', { force: true })
  // .select(0, {force:true})
  // .select(0, {force:true})
  // .should('have.value', 'CAOA CHERY ARRIZO 5 - RX 1.5 16V CVT Flex Aut. 4p', {force:true})

  // cy.get('#interest6Title').type('a', {force:true}).
  // wait(3000)
  // .contains('CAOA CHERY ARRIZO 5 - RX 1.5 1')
  // cy.get('.show > .action-button > .back-step').click({ force: true })
  // cy.get('.show > .action-button > .next-btn').click({ force: true })
  // cy.get('.show > .action-button > .next-btn').click({ force: true })
})

Cypress.Commands.add('acceptCondition', function(){
  cy.get('#r-safeNew').check({force:true})
  cy.get('#c-consent').check({ force: true })
  cy.get('strong > :nth-child(1)').contains('Declaro ciência sobre o tratamento dos dados inseridos por mim no formulário, na forma estabelecida pela')
  // cy.get('.submit-btn').click({force:true})
})

Cypress.Commands.add('BottomContract', function(){
  cy.get('.submit-btn').click({ force: true }) || cy.get('.action-button > .mb-3').click({ force: true })

})

Cypress.Commands.add('Endweek', function(){
  cy.get(':nth-child(4) > .title > p > span').contains('Em até 1 dia útil você receberá o contato do nosso corretor parceiro, que vai solicitar mais alguns dados para concluir a cotação e enviar a oferta ideal pra você! 🙂')

})

Cypress.Commands.add('LifeContract', function(){

  cy.get('#safeRenew > .control-radio > .ng-invalid').click({force:true})
  cy.get('#c-consent').click({ force: true })
})