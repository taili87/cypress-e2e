/*
---ASSERTIONS---
   Implicit assertions or build assertions (should , and)
   Explicit assertions ( expect, assert) -- 

   eq
   conatain
   include
   exist
   have.length
   have.value

   expect - BDD
   assert - TDD
*/

///<reference types="Cypress"/>
describe('Assertions',()=>{

    beforeEach('Run before each test', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Assertions with Should', ()=>{
       
        cy.title().should('include', 'Orange').and('eq', 'OrangeHRM'); // Vlidate title of the Page
        cy.url().should('include', 'demo.orangehrmlive.com'); // should include the part of the url
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.url().should('contain', 'orangehrm');
    });

    it('Assertions with And', ()=>{
        
        cy.url().should('include', 'demo.orangehrmlive.com') // should include the part of the url
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'orangehrm')
        .and('not.contain', 'orangeHRM');
    })

    it('Assertions verify Image visible or not', ()=>{
        
      cy.xpath("//img[@alt='company-branding']").should('be.visible').and('exist');

      // check multiple elements- all links are presents in the web page
      cy.xpath("//a").should('have.length', '5'); 
    })

    it.skip('Explicit assertions', ()=>{
        
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();

       let expected_name = "Nagy KataKulkarni";
       cy.get(".oxd-userdropdown-name").then((loginUsername)=>{
        let actual_name = loginUsername.text();
        console.log("Actual name "+ actual_name);

        // BDD Style
        expect(actual_name).to.equal(expected_name);
        expect(actual_name).to.not.equal(expected_name);

        // TDD Style
        assert.equal(actual_name, expected_name);
        assert.notEqual(actual_name,expected_name);
        
       })
      })


});