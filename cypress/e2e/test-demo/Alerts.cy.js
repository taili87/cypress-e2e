///<reference types="Cypress"/>

/*
 1- Javascript alert: it will have some text and and 'OK' button
 2- Javascript confirm alert: It will have some text with 'OK' and 'cancel' button
 3- JavaScript Prompt alert: It will have some text with a text box for user input with 'OK' button
 4- Authenticated Alert
 
 */

describe("Javacript Alert", () => {
  it("Javacript Normal Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();

    //Trigger cypress events - window:alert - validate text existe
    cy.on('window:alert', (alertWindow)=>{
         expect(alertWindow).to.contain('I am a JS Alert');
    })

    cy.get('#result').should('have.text', 'You successfully clicked an alert');

  });

  it("Javacript Confirmation with OK  button Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    //Trigger cypress events - window:alert - validate text existe
    cy.on('window:alert', (alertWindow)=>{
         expect(alertWindow).to.contain('I am a JS Alert');
    })

    // Cypress automatically closed alert windown by clicking 'OK' button by defaults
    cy.get('#result').should('have.text', 'You clicked: Ok');

  });

  it("Javacript Confirmation with CANCEL button Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    //Trigger cypress events - window:alert - validate text existe
    cy.on('window:alert', (alertWindow)=>{
         expect(alertWindow).to.contain('I am a JS Alert');
    })

    // Click on Cancel button

    cy.on('window:confirm', () => false); // cypress close alert window cancel button 
    // Cypress automatically closed alert windown by clicking 'OK' button by defaults
    cy.get('#result').should('have.text', 'You clicked: Cancel');

  });


  it("JavaScript Prompt with input text", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();

    cy.window().then((win) =>{
        cy.stub(win, 'prompt').returns('senegal'); // pass senegal in the events box
    })
    cy.get("button[onclick='jsPrompt()']").click();
    //cy.on('window:prompt',()=>false); 
    cy.get('#result').should('have.text', 'You entered: senegal');
    cy.get('#result').should('have.text', 'You entered: senegal')

  });

  it("JavaScript Prompt authenticate pass username and password as Object with username and password", () => {
    cy.visit("https://the-internet.herokuapp.com/basic_auth", 
    {auth:
        {username:"admin", 
        password:"admin"
    }
});

cy.get('p').should('have.contain', 'Congratulations');

    // pass username and password along with url or username and password as parameter
  });

  it("JavaScript Prompt authenticate pass username and password along with url", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");
    cy.get('p').should('have.contain', 'Congratulations');

    // pass username and password along with url or username and password as parameter
  });


});
