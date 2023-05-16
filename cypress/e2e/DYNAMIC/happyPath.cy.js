///<reference types="Cypress"/>

describe('test happy path', ()=>{
    it('happy ',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
});