/// <reference types="Cypress" />

describe('Abrir página vida', function () {
  it('Fazer login', function () {
    cy.visit('https://cote-allianz-integrada.valide.vc/residencia')
    cy.closecookies()

  })

  it('Preencher todos os campos obrigatórios de Allianz residência', function () {
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.get('#r-Casa').click({ force: true })
    cy.acceptCondition()
    cy.BottomContract()
  })

})