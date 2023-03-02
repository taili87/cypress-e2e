///<reference types ="Cypress"/>

describe("Launch Orange HRM and login ", () => {
    it('Login by using Fixture with Direct data', ()=>{

        cy.fixture('loginFixture').then((usersData) =>{

           
                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
                cy.get("input[name='username']").type(usersData.username);
                cy.get("input[name='password']").type(usersData.password);
                cy.get("button[type='submit']").click(); 
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

    cy.fixture('loginFixture').then((data)=>{

        cy.get("input[name='username']").type(data.Invalidusername);
        cy.get("input[name='password']").type(data.invalidpassword);
        cy.get("button[type='submit']").click();
        cy.get('.oxd-alert-content > .oxd-text')
         .should('have.text', data.invalidaexpected);
    })


});

  



});