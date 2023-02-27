///<reference types="Cypress"/>

describe('Custom Commands', ()=>{
    beforeEach(()=>{
        cy.visit('https://demo.nopcommerce.com/');
    })
    it('Handling Link', ()=>{
        // Direct approach
       // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();
        

        // using custom command
        cy.clickAppleLink('Apple MacBook Pro 13-inch')
        // validation
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');


    })

    it('Overwriting existing command', ()=>{
        
        // using custom command
        cy.clickLink('APPLE MACBOOK PRO 13-INCH')
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })


    it.only('Login command', ()=>{
        cy.clickLink('Log in'); // Customer command click Link
        cy.Login('test@hotmail.com', 'test123');
        cy.get("div[class='topic-block-title'] h2").should('have.text', 'Welcome to our store');
        //cy.get('.ico-logout').click();
    })
})