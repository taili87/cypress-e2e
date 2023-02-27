///<reference types ="Cypress"/>

describe("Launch Orange HRM and login ", () => {
    it('Login by using Fixture with Direct data', ()=>{

        cy.fixture('orangehrmlogin').then((data) =>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
            cy.xpath("//input[@placeholder='Username']").type(data.username);
            cy.xpath("//input[@placeholder='Password']").type(data.password);
            cy.xpath("//button[normalize-space()='Login']").click();
            cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
             .should('have.text', data.expected);
        })
     
  });

      //Access through the Hooks by separating them by using Hook: before
      let userLoginData;

      before(()=>{
          cy.fixture('orangehrmlogin').then((data)=>{
              userLoginData = data;
          })
      })

  // Direct test data access
  it('Login by using Fixture with Access through the Hooks', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    cy.fixture('orangehrmlogin').then((data)=>{

        cy.xpath("//input[@placeholder='Username']").type(userLoginData.username);
        cy.xpath("//input[@placeholder='Password']").type(userLoginData.password);
        cy.xpath("//button[normalize-space()='Login']").click();
        cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
         .should('have.text', userLoginData.expected);
    })


});

  



});