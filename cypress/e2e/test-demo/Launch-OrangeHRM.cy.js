///<reference types ="Cypress"/>

describe("Launch chrome ", () => {
  it('css Locators', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.xpath("//input[@placeholder='Username']").type('Admin');
    cy.xpath("//input[@placeholder='Password']").type('admin123');
    cy.xpath("//button[normalize-space()='Login']").click();
})
});
