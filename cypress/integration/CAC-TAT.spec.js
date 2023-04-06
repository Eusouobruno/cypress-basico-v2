// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


/// <reference types="Cypress" />

//const { last } = require("cypress/types/lodash")
//const { last } = require("cypress/types/lodash")

describe('Central de Atendimento ao Cliente TAT', function() {
  beforeEach(function() {
    //beforeEach significa antes de  cada teste ele executa o comando que está dentro da função
    cy.visit('./src/index.html')
    //cy.visit visita o link desejado
  })

    it('verifica o título da aplicação', function() {
    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    //    //title verifica o titulo da pagina, o should é a verificação
  
    })

    it('preenche os campos obrigatórios e envia o formulário', function() {
      //.only executa apenas o teste que estamos trabalhando
      const longText = ('teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste,teste')
       cy.get('#firstName').type('bruno')
       //.type signifca digitar em ingles, entao vc diz oq deseja digitar no campo escolhido
       cy.get('#lastName').type('domingues')
       cy.get('#email').type('bruno@teste.com')
       cy.get('#open-text-area').type(longText,{ delay:0 })
       cy.contains('button','Enviar').click()
       //.click clicar no elemento desejado

       cy.get('.success').should('be.visible')
       //verifica se o elemento está visivel, esse.sucess é uma classe
    })
    
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
      cy.get('#firstName').type('bruno')
      cy.get('#lastName').type('domingues')
      cy.get('#email').type('bruno,.com')
      cy.get('#open-text-area').type('teste')
      cy.contains('button','Enviar').click()  
      cy.get('.error').should('be.visible')
    })

    it('se um valor não-numérico for digitado, seu valor continuará vazio.', function (){
     cy.get('#phone').type('aububfudbfud').should('have.value', '')    
    })


    it('mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário',function(){
      cy.get('#firstName').type('bruno')
      cy.get('#lastName').type('domingues')
      cy.get('#email').type('bruno@teste.com')
      cy.get('#phone-checkbox').click()
      cy.get('#open-text-area').type('teste')
      cy.contains('button','Enviar').click()
      //cy.contains é outra forma de procurar o botão, igual ao get
      cy.get('.error').should('be.visible')
    })

    it('chamado preenche e limpa os campos nome, sobrenome, email e telefone',function(){
      cy.get('#firstName')
      .type('bruno')
      .should('have.value','bruno')
      //have value verifica um valor digitado no campo
      .clear()//clear limpa o campo
      .should('have.value','')

      cy.get('#lastName').type('domingues')
      .should('have.value','domingues')
      .clear()
      .should('have.value','')
      
      cy.get('#email').type('bru@teste.com')
      .should('have.value','bru@teste.com')
      .clear()
      .should('have.value','')

      cy.get('#phone').type('12345')
      .should('have.value','12345')
      .clear()
      .should('have.value','')
      })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios',function(){
      cy.contains('button', 'Enviar').click()
      cy.get('.error').should('be.visible')
    })

    it('envia o formulário com sucesso usando um comando customizado',function(){
      cy.fillMandatoryFieldsAndSubmit()
      
      cy.get('.success').should('be.visible')
    })

    it('seleciona um produto (YouTube) por seu texto', function(){
      cy.get('#product').select('youtube').should('have.value','youtube')
      //está função esta selecionando num select  a opção youtube
    })

    it('seleciona um produto (Mentoria) por seu valor (value)', function(){
      cy.get('#product').select('mentoria')
      .should('have.value','mentoria')
    })

    it('seleciona um produto (Blog) por seu índice', function(){
      cy.get('#product').select(1)
      .should('have.value','blog')
    })

    it('marca o tipo de atendimento "Feedback"', function(){
      //esta suite marca uma opção do tipo radio
      cy.get('input[value="feedback"]').check()
      .should('have.value','feedback')
    })

    it('marca o tipo de atendimento', function(){
      //esta suite marca uma opção do tipo radio
      cy.get('input[type="radio"]').check()
      .should('have.length',3)
      //lenght verifica quantas opção há
      .each(function($radio){
        cy.wrap($radio).check
      })
    })
      
    
      
      
    })
    
     
  