///<reference types ="Cypress"/>

describe("Login Test ", () => {
  it('Login Test using cssSelectors Locators', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("[name='username']").type('Admin');
    cy.get("[name='password']").type('admin123');
    cy.get("button[type='submit']").click();
})

it('Login Test using Xpath Locators', ()=>{
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.xpath("//input[@placeholder='Username']").type('Admin');
  cy.xpath("//input[@placeholder='Password']").type('admin123');
  cy.xpath("//button[normalize-space()='Login']").click();
})
});
