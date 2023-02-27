//import Login from "./LoginPages";
import Login from "./LoginPage";
///<reference types ="Cypress"/>

describe("Login using Page Object Model ", () => {

  beforeEach('Login before each tests', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  })
    it('Direct Login', ()=>{
     
      cy.get("input[placeholder='Username']").type('Admin');
      cy.get("input[placeholder='Password']").type('admin123');
      cy.get("button[type='submit']").click();
      cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)")
      .should('have.text', 'Time at Work');
  })

  it('Login using Page Object Model', ()=>{
    cy.fixture('singlelogin').then((data)=>{
      
      const LOGIN = new Login();
      LOGIN.setUserName(data.username);
      LOGIN.setPassword(data.password);
      LOGIN.clickSubmit();
      LOGIN.ValidationLogin();
    })
    


})


  });

 //  import Login from "../POM/LoginPages.js";