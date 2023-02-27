///<reference types="Cypress"/>
describe('Take ScreenShot and Videos', ()=>{
    it('Navigation Test to capture screenshots', ()=>{
        cy.visit('https://demo.opencart.com/');
        cy.screenshot("homepage");
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot("logo");
    })

    it.only('Navigation Test to capture automatically  screenshots and video', ()=>{
        cy.visit('https://demo.opencart.com/');
       cy.get("li:nth-child(7) a:nth-child(1)").click();
       cy.get("div[id='content'] h2").should('have.text', 'Tablets');
    })
})