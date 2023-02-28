///<reference types ="Cypress"/>

describe("Launch Orange HRM and login (sanity, regression) ", {tags:['@sanityTag','@regressionTag']}, () => {

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    it('Login by using Fixture with Direct data', ()=>{

        cy.fixture('singlelogin').then((data) =>{
            cy.get("[name='username']").type(data.username);
            cy.get("[name='password']").type(data.password);
            cy.get("button[type='submit']").click();
            cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
             .should('have.text', data.expected);
        })
     
  });

      //Access through the Hooks by separating them by using Hook: before
      let userLoginData;

      before(()=>{
          cy.fixture('singlelogin').then((data)=>{
              userLoginData = data;
          })
      })

  // Direct test data access
  it('Login by using Fixture with Access through the Hooks', ()=>{
    

    cy.fixture('singlelogin').then((data)=>{

        cy.get("[name='username']").type(data.username);
        cy.get("[name='password']").type(data.password);
        cy.get("button[type='submit']").click();
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
         .should('have.text', data.expected);
    })


});

  



});