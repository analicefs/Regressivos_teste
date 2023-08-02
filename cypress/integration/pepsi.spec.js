describe('Testes Pepsi  Produção', function () {

  it('Gerar cpf', function () {
    // cy.visit('promo.pepsi.com.br/home')
    cy.visit('https://www.4devs.com.br/gerador_de_cpf')
    // cy.contains('.easy_participate_desktop > .container > .bounceInDown', 'É SUUUPER FÁCIL PARTICIPAR')
  })
  
  it.only('Entrar na página', function () {
    cy.visit('promo.pepsi.com.br/home')
    // cy.visit('https://www-hml.pepsicoito.com.br/home')
    // cy.contains('.easy_participate_desktop > .container > .bounceInDown', 'É SUUUPER FÁCIL PARTICIPAR')
  })

  it('Cadastrar na promoção cpf e email repetido', function () {
    cy.visit('promo.pepsi.com.br/home')
    cy.get('.header__menu__wrapper > .header__buttons > .blue').click({force:true})
    cy.get('#i-document').type('83849412032', { force: true })  
    cy.get('#i-fullName').type('Thiago Alves')   
    cy.get('#i-email').type('analicef87+teste34@gmail.com') 
    cy.get('#i-birthday').type('01051982')  
    cy.get('#i-whatsappNumber').type('85954444444')  
    cy.get('#i-phoneNumber').type('85944444444')
    cy.get('#i-zipCode').type ('55555000')
    cy.get('#i-password').type('Thiago12', { force: true })
    cy.get('#i-confirmPassword').type('Thiago12', { force: true })
    cy.get('#isAcceptRegulation > .input-check > .ng-dirty > .checkmark').click({force:true})
    cy.get('#isAcceptTerms > .input-check > .ng-dirty > .checkmark').click({ force: true })
    // cy.get('form.ng-dirty > .btn').click({force:true}).click({force:true})
    cy.contains('submit', ' QUERO FINALIZAR ').click({ force: true })
    cy.contains('.modal-body > .description','Percebemos que você pode estar utilizando um endereço de E-mail, WhatsApp ou CPF já participante nesta promoção, confira estes dados e tente novamente.')
    cy.get('.close > figure > .ng-star-inserted').click()
  })
  it('Cadastrar na promoção cpf e email novo', function () {
    cy.get('.header__menu__wrapper > .header__buttons > .blue').click({ force: true })
    cy.get('#i-document').type('712.225.410 -09', { force: true })
    // 473.680.720 - 25
    cy.get('#i-fullName').type('Thiago Alves')
    cy.get('#i-email').type('teste2338@gmail.com')
    cy.get('#i-birthday').type('01051982')
    cy.get('#i-whatsappNumber').type('85958444444')
    cy.get('#i-phoneNumber').type('85958444444')
    cy.get('#i-zipCode').type('55555000')
    cy.get('#i-password').type('Thiago12', { force: true })
    cy.get('#i-confirmPassword').type('Thiago12', { force: true })
    cy.get('#isAcceptRegulation > .input-check > .ng-dirty > .checkmark').click({ force: true })
    cy.get('#isAcceptTerms > .input-check > .ng-dirty > .checkmark').click({ force: true })
    cy.get('form.ng-dirty > .btn').click({ force: true })
  })
  it('login', function () {
    cy.visit('promo.pepsi.com.br/home')
    cy.get('.header__menu__wrapper > .header__buttons > .transparent').click({force:true})
    cy.get('#i-document').type('01357641303', { force: true })
    cy.get('#i-password').type('Analice15', { force: true })  
    cy.get('figure.ng-tns-c82-0 > .ng-tns-c82-0').click()
    cy.get('form.ng-dirty > .red').click({force:true})
    // cy.get(':nth-child(5) > .ga-menu').click({ force: true })
    // cy.get('.nav > :nth-child(2) > .btn').click({ force: true })
    // cy.contains(':nth-child(1) > .name > span','Alex R.')
    // cy.get('.header__buttons > .salutation').click({ force: true })
    // cy.get('.menu-logged > ul.ng-tns-c80-0 > :nth-child(2) > .ga-menu').click({ force: true })
    // cy.get('.content-form > .logout').click({ force: true })
    // cy.contains('.participation_desktop > .text > p.wow','VOCÊ ”MIONÁRIO” E COM PRÊMIOS TODOS OS DIAS? TOMA ESSA!')

  })

  it.only('cadastrar um cupom', function () {
    cy.visit('promo.pepsi.com.br/home')
    cy.get('.header__menu__wrapper > .header__buttons > .btn').click({ force: true })
    cy.get('.step > :nth-child(3)').click({ force: true })
    cy.get('.label > img').click({ force: true })
    cy.get('input[type="file"]').selectFile('./cypress/fixtures/cupom.png', { force: true })
    .should(function($input){
      console.log($input)
    })
    cy.get('.step > .btn').click()
    
  })
  
  

  it('Logout', function () {
    cy.visit('promo.pepsi.com.br/home')
    cy.get('.header__buttons > .salutation').click()
    cy.get('.menu-logged > ul.ng-tns-c82-0 > :nth-child(2)').click()
    cy.get('.content-form > .logout').click()

  })
})