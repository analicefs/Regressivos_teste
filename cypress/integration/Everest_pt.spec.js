/// <reference types="Cypress" />

describe('Abrir home Everest ', function () {
  it('Validar se a home está em português carrossel e produtos', function () {
    cy.visit('https://everest.ind.br/pt/home')
    cy.contains(':nth-child(1) > .card > .card__body','Água cristalina e livre de impurezas, como toda água deve ser.')
    cy.contains(':nth-child(2) > .card > .card__body', 'Hidratação, refrescância e bem-estar a um giro de você.')
    cy.contains(':nth-child(3) > .card > .card__body', 'Estilo e versatilidade que combinam em todos os espaços.')
    cy.contains(':nth-child(4) > .card > .card__body', 'Alta eficiência e baixo consumo de energia.')
    // cy.contains('p[_ngcontent-serverapp-c45=""] > p', 'Água cristalina e gelada para até 15 pessoas por hora.')
    // cy.contains('p[_ngcontent-serverapp-c45=""] > p', 'Temperatura do jeito que você preferir: natural, geladinha ou misturada.')
    cy.contains('.slick-current > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora')
    cy.contains('[data-slick-index="1"] > app-card > .product-item > p','Água pura e geladinha para até 15 pessoas por hora')
    cy.contains('[data-slick-index="2"] > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora')
    cy.contains('[data-slick-index="3"] > app-card > .product-item > p', 'Água pura e geladinha para até 30 pessoas por hora')
    cy.contains('[data-slick-index="4"] > app-card > .product-item > p', 'Água pura e cristalina em temperatura ambiente')
    cy.contains('.item1 > .post > .container > .post-blog > .card-position > .card > .card-body > .body1 > p', 'Há mais de 50 anos, a Everest leva bem-estar e qualidade de')
    cy.contains('.item2 > .post > .container > .post-blog > .card-position > .card > .card-body > .body1 > p', 'A Everest acredita que sua longevidade e garantia de qualidade lá no alto só são possíveis graças às boas práticas')

    // cy.closecookies()

  })


  it('Cadastro de revendedor', function () {
    cy.visit('https://everest.ind.br/pt/seja-revendedor')
    cy.get('#i-revenda-city').click({ force: true })
    cy.get('#i-revenda-full_name').type('Maria Teste', { force: true } )
    cy.get('#i-revenda-cpf').type('01357641303', { force: true })
    cy.get('#i-revenda-phone').type('859918619407')
    cy.get('#i-revenda-email').type('analicef87@gmail.com', {force:true})
    cy.get('#i-revenda-state').type('Ceará', { force: true })
    cy.get('#i-revenda-city').type('Ocara', { force: true } )
    cy.get('.active > [type="button"] > app-mybutton > a > .button').click({ force: true })
    
    cy.get('#i-revenda-business_type').type('Tester', { force: true })
    cy.get('.ng-touched > #revenda-has_company').select('Sim', { force: true })
    cy.get('#i-revenda-social_reason').type('TESTER MARIA', { force: true })
    cy.get('#i-revenda-fantasy_name').type('Tester', { force: true })
    cy.get('#i-revenda-cnpj_state_registration').type('49792664000120', { force: true })
    cy.get('#i-revenda-business_address').type('Rua dos Poetas', { force: true })
    cy.get('.active > [type="button"] > app-mybutton > a > .button').click({ force: true })

    cy.get('#i-revenda-business_experience').type('sim, quatro anos', { force: true })
    cy.get('.ng-touched > #revenda-is_water_tracking').select('Não', { force: true })
    cy.get('#i-revenda-brands').type('Everest Plus', { force: true })
    cy.get('.active > [type="button"] > app-mybutton > a > .button').click({ force: true })

    cy.get('#i-revenda-sellers_amount').type('8', { force: true })
    cy.get('#i-revenda-installer_technicians_amount').type('8', { force: true })
    cy.get('#i-revenda-refrigeration_technicians_amount').type('3', { force: true })
    cy.get('#i-revenda-cars_amount').type('3', { force: true })
    cy.get('.active > [type="button"] > app-mybutton > a > .button').click({ force: true })


    cy.get('#i-revenda-other_products').type('Não', { force: true })
    cy.get('.ng-dirty > #revenda-investment_availability').select(1, { force: true })
    // cy.get('#i-revenda-investment_availability').type('85555555555555', { force: true })
    cy.get('#i-revenda-meet_us').type('sim', { force: true })
    cy.get('[type="submit"] > app-mybutton > a > .button').click({ force: true })

    
  cy.contains('.desc > .ng-star-inserted','Sua solicitação está em análise e, em breve, um de nossos especialistas entrará em contato.', {force:true})
  cy.get('.ng-star-inserted > .button').click
})



it('Cadastro de Exportação  ', function () {
  cy.visit('https://everest.ind.br/pt/exportacao')
  cy.get('#i-contact-fullName').type('Maria Teste', { force: true })
  cy.get('#i-contact-email').type('teste@test.gd', { force: true })
  cy.get('#i-contact-phone').type('85999999695', { force: true })
  cy.get('#i-contact-cell_phone').type('85999999965', { force: true })
  cy.get('#i-contact-company').type('teste', { force: true })
  cy.get('#i-contact-country').type('Brasil', { force: true })
  cy.get('#i-contact-city').type('Fortaleza', { force: true })
  cy.get('.ng-dirty > #contact-product').select('Everest Plus', { force: true })
  cy.get('#i-contact-message').type('Teste testando', { force: true })
  cy.get('form.ng-dirty > button').click({force:true})
  cy.contains('.title > .ng-star-inserted', 'Olá', { force: true })
  cy.contains('.desc > .ng-star-inserted', 'Recebemos sua mensagem e logo entraremos em contato. Obrigado!')
  cy.get('.modal-body > div.button > app-mybutton > .ng-star-inserted > .button').click({ force: true })
})

  it('Cadastro de Newletter ', function () {
    cy.visit('https://everest.ind.br/pt/home')
    cy.get('#i-footer-email').type('anateste@gmail.com', { force: true })
    cy.get('.button-blue').click({ force: true })
    cy.wait(7000)
    cy.contains('.title > .ng-star-inserted','Olá',{ force: true })
    cy.contains('.desc > .ng-star-inserted','Recebemos sua mensagem e logo entraremos em contato. Obrigado!')
    cy.get('.modal-body > div.button > app-mybutton > .ng-star-inserted > .button').click({force:true})
  })

  it('Abrir  nossa história', function () {
    cy.visit('https://everest.ind.br/pt/historia')
    cy.contains('.content > p', 'Levar bem-estar e qualidade de vida às pessoas, com o mínimo de impacto ambiental e muita saúde, é o que nos movimenta a estarmos presentes nas casas e empresas de todo o Brasil. Para conquistar esse espaço, foram décadas de pesquisa e dedicação, sempre em busca de oferecer o melhor em nossos produtos.', {force:true} )
    cy.contains(':nth-child(7) > :nth-child(1) > .content-right-container > .content-right > p','Modernização da marca e dos nossos produtos, sempre com a qualidade lá no alto!')
  })
  it('Abrir  nossa missão', function () {
    cy.visit('https://everest.ind.br/pt/missao')
    cy.contains('.title > p', 'Missão, visão e valores')
  })
  it('Abrir página Produtos e verificar texto e título', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.contains(':nth-child(2) > :nth-child(1) > app-card > .product-item > .title-section','Everest Star' )
    cy.contains(':nth-child(2) > :nth-child(1) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora. Armazenamento: 2L.')
  })

  it('Comparar 4 produtos', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.get(':nth-child(2) > :nth-child(2) > app-card > .product-item > .compare > app-compare-button > button.ga-to-compare').click()
    cy.get(':nth-child(3) > :nth-child(2) > app-card > .product-item > .compare > app-compare-button > button.ga-to-compare').click()
    cy.get(':nth-child(4) > :nth-child(4) > app-card > .product-item > .compare > app-compare-button > button.ga-to-compare').click()
    cy.get(':nth-child(6) > :nth-child(2) > app-card > .product-item > .compare > app-compare-button > button.ga-to-compare').click()
    cy.get('.compare__header__arrow > img').click()
    cy.get('.compareButton').click()
    cy.contains('.text > h2','Comparação de produtos:')
    cy.contains(':nth-child(8) > .propertyTitle', 'Informações Adicionais')
  })


  it('Abrir diferenciais everest ', function () {
    cy.visit('https://everest.ind.br/pt/diferencial')
    cy.contains('.title > p', 'Diferenciais Purificadores Everest')

    
  })

  it('Abrir tabela de economia , verificar um cálculo e clicar no botão conheça nossa linha', function () {
    cy.visit('https://everest.ind.br/pt/economia')
    cy.wait(7000)
    cy.get('.dropdown-card-gota > .ng-pristine').type('2')
    cy.get('.custo').type('2')
    cy.contains('.media', '208')
    cy.get('.button > span').click({force:true})
    cy.wait(3000)
    cy.contains('h1','Purificadores')

  })

  it('Abrir certificação e fazer download', function () {
    cy.visit('https://everest.ind.br/pt/certificacoes')
    cy.wait(4000)
    cy.get(':nth-child(1) > .icon').click()
    cy.get('.button').click()
    cy.get(':nth-child(2) > .body1').click()
    cy.get('.button').click()
    cy.get(':nth-child(3) > .body1').click()
    cy.get('.button').click()
    cy.get(':nth-child(4) > .body1').click()
    cy.get('.button').click()
  })

  it('Abrir  Manuais e  fazer download', function () {
    cy.visit('https://everest.ind.br/pt/manuais')
    cy.contains('.align-middle > .body1', 'Aqui você encontra os manuais e as certificações de nossos')
    cy.contains('.bigMarginBottom > .card > .card-title > .body1','Manual Purificador Everest Baby')
    cy.contains(':nth-child(1) > app-card-download > .card > .card-title > .body1', 'Manual Purificadores Everest Refrigerados')
    cy.get(':nth-child(1) > app-card-download > .card > .card-body > .card-text > [target="_blank"] > app-mybutton > a > .button > span').click()
    cy.get('.bigMarginBottom > .card > .card-body > .card-text > [target="_blank"] > app-mybutton > a > .button > span').click()
  })
  it('Abrir  elemento filtrantes e validar texto', function () {
    cy.visit('https://everest.ind.br/pt/elemento-filtrante')
    cy.contains('b','Água de verdade: pura, cristalina e com qualidade lá no alto. É Everest!')
    cy.contains(':nth-child(1) > .content-post-card > .body1','por questão de segurança, solicite a substituição do Refil Original Everest, ainda que não perceba nenhuma alteração na água. A razão disto é que o biofilme formado internamente pelas impurezas orgânicas e inorgânicas retidas, assim como a redução da eficiência bacteriostática, comprometerá a qualidade da água servida')
    cy.contains('.post2 > .content-post-card > .body1','O Refil Original Everest conta com tecnologia especial em 2 etapas: pré-filtragem, que retém impurezas; e filtragem, com carvão ativado, que garante a redução de concentração de cloro, além de reduzir odores e sabores indesejados.')
    cy.get('.body > :nth-child(6) > a').click()
    cy.contains('.card-body > .title','Pode confiar!')


  
  })
  it('Abrir  Selo Abrafipa, verificar título', function () {
    cy.visit('https://everest.ind.br/pt/selo-ABRAFIPA')
    cy.contains('.title > p','Garantia de qualidade do Refil Original Everest: do começo ao fim')

  })
  it('Abrir  Selo certificacoes e validar informações', function () {
    cy.visit('https://everest.ind.br/pt/certificacoes')
    cy.contains('.card-body > .title','Pode confiar!')
    cy.get('ul > :nth-child(1) > .body1').click()
    cy.get('.button > span').click()

  })
  it('Abrir revendedor autorizado e fazer pesquisa', function () {
    cy.visit('https://everest.ind.br/pt/revenda')
    cy.get('form.ng-untouched > .ng-untouched').type('55555555')
    cy.contains('.adresses','Y.A CARDOSO FILTROS EIRELI')
    // cy.get('btns', 'Realizar rota').click()
    // // cy.get('.ng-touched').type('Fortaleza')
    // // cy.get('.frm > button').click()  
  })
  it('Abrir assistente , fazer pesquisa, ver localizar endereço, realizar rota', function () {
    cy.visit('https://everest.ind.br/pt/onde-encontrar')
    cy.wait(7000)
    cy.get('form.ng-pristine > .ng-pristine').type('55555555')
    cy.get('button > app-image > figure > .ng-lazyloaded').click()
    cy.contains('.adresses > :nth-child(1) > .upper','EVEREST PARAIBA SERVICOS E COMERCIO EIRELI - ME')
    cy.get(':nth-child(1) > .btns > :nth-child(1)').click()    
    cy.get(':nth-child(1) > .btns > :nth-child(2)').click()
    cy.get('.frm > :nth-child(2)').type('Fortaleza')
    cy.get('.frm > button').click({force:true})
  })

  it('Abrir sustentabilidade ', function () {
    cy.visit('https://everest.ind.br/pt/sustentabilidade')
    cy.contains('.desc-title', 'Descarte consciente')
    cy.contains('b', 'Logística e manufatura reversas')
    cy.get('.button  span').invoke('removeAttr','target').click()
    })

  it('Abrir dúvidas', function () {
    cy.visit('https://everest.ind.br/pt/perguntas-frequentes')
    cy.contains('.title', 'Dúvidas frequentes')
    cy.contains('.active > button', 'Purificadores')

  })


  it('Verificar se a tradução está em português everest star', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.contains(':nth-child(2) > :nth-child(1) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora. Armazenamento: 2L.')
    cy.contains(':nth-child(2) > :nth-child(2) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora. Armazenamento: 2L.')
    cy.contains(':nth-child(2) > :nth-child(3) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora. Armazenamento: 2L.')
    cy.contains(':nth-child(2) > :nth-child(4) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora. Armazenamento: 2L.')

  })
  it('Verificar se a tradução está em português everest slim', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.contains(':nth-child(3) > :nth-child(1) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')
    cy.contains(':nth-child(3) > :nth-child(2) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')
    cy.contains(':nth-child(3) > :nth-child(3) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')
    cy.contains(':nth-child(3) > :nth-child(4) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')

  })

  it('Verificar se a tradução está em português everest fit', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.scrollTo(0, 2000)
    cy.contains(':nth-child(4) > :nth-child(1) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')
    cy.contains(':nth-child(4) > :nth-child(2) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')
    cy.contains(':nth-child(4) > :nth-child(3) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')
    cy.contains(':nth-child(4) > :nth-child(4) > app-card > .product-item > p', 'Água pura e geladinha para até 15 pessoas por hora.')

  })

  it('Verificar se a tradução está em português everest baby', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.scrollTo(0, 3000)
    cy.contains(':nth-child(5) > :nth-child(1) > app-card > .product-item > p', 'Água pura e cristalina em temperatura ambiente.')
    cy.contains(':nth-child(5) > :nth-child(2) > app-card > .product-item > p', 'Água pura e cristalina em temperatura ambiente.')
    cy.contains(':nth-child(5) > :nth-child(3) > app-card > .product-item > p', 'Água pura e cristalina em temperatura ambiente.')
})
  it('Verificar se a tradução está em português everest plus', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.contains(':nth-child(6) > :nth-child(1) > app-card > .product-item > p', 'Água pura e geladinha para até 30 pessoas por hora.')
    cy.contains(':nth-child(6) > :nth-child(2) > app-card > .product-item > p', 'Água pura e geladinha para até 30 pessoas por hora.')
    cy.contains(':nth-child(6) > :nth-child(3) > app-card > .product-item > p', 'Água pura e geladinha para até 30 pessoas por hora.')
    cy.contains(':nth-child(6) > :nth-child(4) > app-card > .product-item > p', 'Água pura e geladinha para até 30 pessoas por hora.')

  })
  it('mudar do português para o espanhol, do espanhol para o português', function () {
    cy.visit('https://everest.ind.br/pt/purificadores')
    cy.get('ul.ng-tns-c115-0 > :nth-child(2) > a.ng-tns-c115-0 > figure.ng-tns-c115-0 > .ng-tns-c115-0').click()
    cy.contains('.title > span','19 opciones')
    cy.get('.languages > ul.ng-tns-c115-0 > :nth-child(1) > a.ng-tns-c115-0').click()
    cy.contains('.title > span', '19 opções')

    })

  it('Verificar maquina de gelo , se está em português e se está com as familias corretas', function () {
    cy.visit('https://everest.ind.br/pt/produto/maquinas-de-gelo')
    cy.contains('h1 > p','Máquinas de Gelo')
    cy.contains('h2 > p','A melhor solução em')
    cy.contains('.card-header > p', 'Produza seu próprio gelo filtrado em cubos com praticidade, economia e qualidade lá no alto.')
    cy.contains(':nth-child(2) > .pane > .products > :nth-child(1) > .card__title > p','EGC 50')
    cy.get('.nav > :nth-child(2) > button').click()
    cy.contains('.nav > :nth-child(2) > button','Família Modular EGC 75 M')
    cy.contains(':nth-child(3) > .pane > .products > :nth-child(2) > .card__title > p','EGC 75M/30')
    cy.get(':nth-child(3) > button').click()
    cy.contains(':nth-child(3) > button','Família Modular EGC 150 M')
    cy.contains(':nth-child(4) > .pane > .products > :nth-child(4) > .card__title > p','EGC 300M/250')
  })

})