import 'cypress-iframe'
///<reference types="Cypress"/>

describe('IFRAME Tests', ()=>{
    it.skip('Test iFrames - approach #1', ()=>{

        /*cy.frameLoaded('.aut-iframe')
        cy.iframe('.aut-iframe')
        .find('.pending-medication-check-box')
        .should('be.visible')
        .click()*/
        cy.visit("https://the-internet.herokuapp.com/iframe");
        //getting the iframe 
        const IFRAMES = cy.get("#mce_0_ifr").its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        IFRAMES.clear();
        cy.wait(2000);
        IFRAMES.type('I am learning cypress testing!{ctrl+A}'); 

        cy.get("[aria-label='Bold']").click(); 


    })

    it('Test iFrames - approach #2 - using custom command', ()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe('#mce_0_ifr').clear();
        cy.getIframe('#mce_0_ifr').type("I am learning CYPRESS {ctrl+a}");
        cy.get("[aria-label='Bold']").click()
       
    })

    it('Test iFrames - approach #3- Using Cypress iframe plugins', ()=>{
           // npm i -D cypress-iframe
           // import module import 'cypress-iframe'
        cy.visit("https://the-internet.herokuapp.com/iframe");
         cy.frameLoaded('#mce_0_ifr'); // Load the frame or switch to the framme
         cy.iframe('#mce_0_ifr').clear();
         cy.wait(3000);
         cy.iframe('#mce_0_ifr').type("I am Learning Cypress and Selenium with JavaSscript! {ctrl+a}");
         cy.get("[aria-label='Bold']").click();

        
       
    })
})