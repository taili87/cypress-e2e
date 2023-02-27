///<reference types="Cypress"/>

describe('DataDriven', ()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
     // Repeat test with differents set of data - Data Driven testing
   it('DataDriven Tests', ()=>{

    cy.fixture('orangehrmlogin').then((data)=>{
       // we need to iterate the loop
      data.forEach((userData)=>{
       
        cy.get("input[placeholder='Username']").type(userData.username);
        cy.get("input[placeholder='Password']").type(userData.password);
        cy.get("button[type='submit']").click();
       
         if(userData.username == 'Admin' && userData.password == 'admin123'){
            cy.get(':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text')
            .should('have.text', userData.expected);
            cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
            cy.get(':nth-child(4) .oxd-userdropdown-link').click();
         }else{
            cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('have.text', userData.expected);
         }

      })
    })
  })
})