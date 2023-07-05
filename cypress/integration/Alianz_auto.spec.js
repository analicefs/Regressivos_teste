/// <reference types="Cypress" />

describe('Abrir página', function () {
  it('Fazer login', function () {

    cy.visit('https://cote-allianz-integrada.valide.vc/auto')
    // cy.url().should('include', '/auto') 
    cy.closecookies()

  })

  it('Finalizar cadastro, preenchendo os campos obrigatórios alianz-auto ', function () {
   
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.get('.show > .action-button > .next-btn').click({ force: true })
    cy.fillformauto()
    cy.get('.show > .action-button > .next-btn').click({ force: true })
    cy.acceptCondition()
    cy.BottomContract()
  })

})
