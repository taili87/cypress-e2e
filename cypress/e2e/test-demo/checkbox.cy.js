///<reference types="Cypress"/>

describe('Check UI element', ()=>{

    beforeEach('Open URL before each test', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");
    });


    it('Checked single check box', ()=>{
       
       cy.url().should('eq', 'https://itera-qa.azurewebsites.net/home/automation');

       cy.get("#monday").should('be.visible');

       //check single check box and verify its checked or not 
       cy.get("#monday").check().should('be.checked');
       // unselect check box
       cy.get("#monday").uncheck().should('not.be.checked');

       // check and uncheck multiple check boxes


    });

    it('Checked Multiple check box', ()=>{
        
        cy.url().should('eq', 'https://itera-qa.azurewebsites.net/home/automation');
 
        // check and uncheck multiple check boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');

 
     });

     it('Unhecked Multiple check box', ()=>{
        
        cy.url().should('eq', 'https://itera-qa.azurewebsites.net/home/automation');
 
         //  uncheck and uncheck multiple check boxes
         cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked');
 
 
     });

     it('Select first check box in the list', ()=>{
       
        cy.url().should('eq', 'https://itera-qa.azurewebsites.net/home/automation');
 
         //  uncheck and uncheck multiple check boxes
         cy.get("input.form-check-input[type='checkbox']").first().check();
     });

     it('Select last check box in the list', ()=>{
       
        cy.url().should('eq', 'https://itera-qa.azurewebsites.net/home/automation');
 
         //  uncheck and uncheck multiple check boxes
         cy.get("input.form-check-input[type='checkbox']").last().check();
 
     });
});