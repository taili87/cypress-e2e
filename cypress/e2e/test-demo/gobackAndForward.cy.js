///<reference types="Cypress"/>
describe('Back and Foward Page', ()=>{
    it('Navigation Test', ()=>{
        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq', 'Your Store');
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)").click();
        cy.get("div[id='content'] h2").should('have.text', 'Software');

        cy.go('back'); // home page
        cy.get("div[id='content'] h3").should('have.text', 'Featured');
        cy.go('forward'); // Software page

       cy.get("div[id='content'] h2").should('have.text', 'Software');

       //cy.go(-1); go back
       //cy.go(1); go forward

       cy.wait(5000);
       cy.reload();
       cy.go(-1);
    })
})