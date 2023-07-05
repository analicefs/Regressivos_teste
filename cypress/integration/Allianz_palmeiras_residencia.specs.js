/// <reference types="Cypress" />

describe('Abrir página vida', function () {
  it('Fazer login', function () {
    cy.visit('https://cote-allianz-integrada.valide.vc/palmeiras/residencia')
    cy.closecookies()

  })

  it('Preencher campos obrigatórios de Palmeira de  residência', function () {
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.acceptCondition()
    cy.wait(3000)
    cy.get('.options-residence > :nth-child(2) > app-radio > .control-radio > .ng-dirty > span').click({ force: true })
    cy.BottomContract()

  })

})