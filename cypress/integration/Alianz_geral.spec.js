/// <reference types="Cypress" />

describe('Teste de cadastro Allianz auto', function () {
 
  it('Finalizar cadastro, preenchendo os campos obrigatórios alianz-auto ', function () {

    cy.visit('https://cote.allianz.com.br/auto')
    // cy.url().should('include', '/auto') 
    cy.closecookies()
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.get('.show > .action-button > .next-btn').click({ force: true })
    cy.fillformauto()
    cy.get('.show > .action-button > .next-btn').click({ force: true })
    cy.acceptCondition()
    cy.BottomContract()
  })


  it('Finalizar cadastro, Preencher  todos os campos obrigatórios de vida', function () {
    cy.visit('https://cote.allianz.com.br/vida')
    cy.closecookies()
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.wait(7000)
    cy.LifeContract()
    cy.get('.submit-btn').click({ force: true })
    cy.get('.form-content > div > p').contains('Um de nossos corretores entrará em contato com você!')

  })

  it('Preencher campos obrigatórios de Palmeira de  residência', function () {
    cy.visit('https://cote.allianz.com.br/palmeiras/residencia')
    cy.closecookies()
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.acceptCondition()
    cy.wait(3000)
    cy.get('.options-residence > :nth-child(2) > app-radio > .control-radio > .ng-dirty > span').click({ force: true })
    cy.BottomContract()

  })


  it('Preencher campos obrigatórios de formulario de palmeiras vida', function () {
    cy.visit('https://cote.allianz.com.br/palmeiras/vida')
    cy.closecookies()
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.acceptCondition()
    cy.wait(3000)
    cy.BottomContract()
    cy.get('.form-content > div > p').contains('Um de nossos corretores entrará em contato com você!')
  })

  it('Preencher todos os campos obrigatórios de Allianz residência', function () {
    cy.visit('https://cote.allianz.com.br/residencia')
    cy.closecookies()
    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com', '85994032815')
    cy.fillformadress('62755000')
    cy.get('#r-Casa').click({ force: true })
    cy.acceptCondition()
    cy.BottomContract()
  })
})
