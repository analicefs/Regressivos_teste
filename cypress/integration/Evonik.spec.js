/// <reference types="Cypress" />


describe('Testes Admin Evonik', function () {
  it('Fazer login', function () {
    cy.visit('https://evonik-admin.valide.vc')
    // cy.url().should('include', '/login')  
    cy.get('#inputUser').type('super.admin@mailinator.com')
    cy.get('#inputPass').type('Cat@dev123')
    cy.get('.btn').click()
    cy.get('.swal2-confirm').click()
  })
})
