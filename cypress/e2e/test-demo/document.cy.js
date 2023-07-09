///<reference types="Cypress"/>

describe('Documents', ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    it('Page Title', ()=>{
        const actualTitle = 'OrangeHRM';
        cy.document().should(doc=>{
            const expectedTile = doc.title;
            expect(expectedTile).to.be.eq(actualTitle);
        })
    })
    it.only('Get Width and Height', ()=>{
        cy.document().then(elements =>{
         const elementObj = Cypress.$(elements);
         const elementHeight = elementObj.height();
         const elementWidth = elementObj.width();
         cy.log(`The height is ${elementHeight}`);
         cy.log(`The width is ${elementWidth}`);
         expect(elementHeight).to.be.eq(660);
         expect(elementWidth).to.be.eq(1000);
        })

       


    })
    it('Cookies', ()=>{
        
    })
    it('Title', ()=>{
        
    })
    it('Viewport', ()=>{
        
    })
})