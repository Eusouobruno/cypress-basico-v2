
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('bruno')
    cy.get('#lastName').type('domingues')
    cy.get('#email').type('bruno@teste.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()


})
    