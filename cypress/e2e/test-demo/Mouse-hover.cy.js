///<reference types="Cypress"/>
import 'cypress-iframe'
require('@4tw/cypress-drag-drop')

// mouse hover - right click - Double click - Drag and drop using plugin and scroll page.

describe('Mouse Hover Operations', ()=>{
    it('Mouse Hover', ()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
        .should('not.be.visible');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link')
        .should('be.visible');
        
    })

    it('Right click', ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
       //cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
       cy.get('.context-menu-one.btn.btn-neutral').rightclick();
       cy.get('.context-menu-icon-copy>span').should('be.visible');
        
    })

    it('Double click', ()=>{
       cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
       cy.frameLoaded('#iframeResult'); // load frame

       // APPROACH 1
       cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
       cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!'); // validation
        

       // APPROACH 2
      // cy.iframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick();
       //cy.iframe('#iframeResult').find("#field2").should('have.value', 'Hello World!'); // validation

    })

    it('Drag and Drop', ()=>{
        // inst => npm i --save-dev @4tw/cypress-drag-drop plugin
        // require('@4tw/cypress-drag-drop')
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');
        cy.wait(3000);
        cy.get('#box6').drag('#box106', {force:true});
        
     })

     it.only('Scroll Down or Up', ()=>{
        // inst => npm i --save-dev @4tw/cypress-drag-drop plugin
        // require('@4tw/cypress-drag-drop')
        cy.visit("https://www.countries-ofthe-world.com/all-countries.html");
        //scroll down and find the elemnts

        cy.get('ul:nth-child(2) li:nth-child(78)').scrollIntoView({duration:5000});
        cy.get('ul:nth-child(2) li:nth-child(78)').should('be.visible');

        cy.get('.container > :nth-child(2) > :nth-child(2) > :nth-child(2)').scrollIntoView({duration:5000});
        cy.get('.container > :nth-child(2) > :nth-child(2) > :nth-child(2)').should('be.visible');
        
        
        
     })





})