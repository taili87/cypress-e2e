///<reference types="Cypress"/>

describe('Check UI element', ()=>{
    it('Checking Radio button', ()=>{
       cy.visit("https://itera-qa.azurewebsites.net/home/automation");
       cy.url().should('eq', 'https://itera-qa.azurewebsites.net/home/automation');

       // check the radio button is visible ( disable or enable)
       cy.get("#male").should('be.visible');
       cy.get("#female").should('be.visible');

       // selecting radio button
       cy.get("#male").check().should('be.checked');
       cy.get("#female").should('not.be.checked');


    });
});