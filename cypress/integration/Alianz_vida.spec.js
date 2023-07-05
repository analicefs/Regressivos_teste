/// <reference types="Cypress" />

describe('Abrir página vida', function () {
  it('Fazer login', function () {
    cy.visit('https://cote-allianz-integrada.valide.vc/vida')
    cy.closecookies()

  })

  it('Finalizar cadastro, Preencher  todos os campos obrigatórios', function () {

    cy.fillform('teste Cat', '96966130320', 'teste@gmail.com','85994032815')
    cy.fillformadress('62755000')
    cy.wait(7000)
    cy.LifeContract()
    cy.get('.submit-btn').click({force:true})
    // cy.get('.form-content > div > p').contains('Um de nossos corretores entrará em contato com você!')

  })

})
