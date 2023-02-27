///<reference types="Cypress"/>
describe('CSS LOCATOR',()=>{
    it('css Locators', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.xpath("//input[@placeholder='Username']").type('Admin');
        cy.xpath("//input[@placeholder='Password']").type('admin123');
        cy.xpath("//button[normalize-space()='Login']").click();
    })

    /*

    CSS SELECTOR:
    tag ID
    tag class
    
     tag #id
     tag.class
     tag[attribute='value']
     tag.class[attribute='value']

     XPATH:

     Install xpath: npm install -D cypress-xpath
     /// < refence types = "cypress-xpath"/> in the command.js file
     require('cypress-xpath') in the e2e.js file

    */
})