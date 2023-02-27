///<reference types="Cypress"/>

describe('Next Window', ()=>{
    it('first approach by removing the target attribute in the DOM', ()=>{
       cy.visit('https://the-internet.herokuapp.com/windows');
       cy.get('.example >a').invoke('removeAttr', 'target').click();
       cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');

       // move back to Initial / parents tab

       cy.go('back');
       cy.url().should('include', 'https://the-internet.herokuapp.com/windows');
    })

    it('Second approach by getting the href url', ()=>{
        cy.visit('https://the-internet.herokuapp.com/windows');
        cy.get('.example >a').then((elements) =>{
            // capture the href attributes in the parents Page
            let url = elements.prop('href');
            cy.visit(url);
        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new');
        cy.wait(5000);
        cy.go('back');
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows');
    })
})