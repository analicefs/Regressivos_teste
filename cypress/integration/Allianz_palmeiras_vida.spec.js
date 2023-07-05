/// <reference types="Cypress" />

describe('Abrir página vida', function () {
  it('Fazer login', function () {
    cy.visit('https://cote-allianz-integrada.valide.vc/palmeiras/vida')
    cy.closecookies()

  })

  it('Preencher campos obrigatórios de formulario de palmeiras vida', function () {
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.acceptCondition()
    cy.wait(3000)
    cy.BottomContract()
    // cy.get('.form-content > div > p').contains('Um de nossos corretores entrará em contato com você!')
  })

})