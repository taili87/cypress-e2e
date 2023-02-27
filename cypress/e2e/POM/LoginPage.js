//Page Object class 
class Login {

    userNameElement = "input[placeholder='Username']";
    passwordElement = "input[placeholder='Password']";
    submitButtonElement = "button[type='submit']";
    textVerificationElement = "body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)";
    
    setUserName(username){
        cy.get(this.userNameElement).type(username);
    }
    setPassword(password){
        cy.get(this.passwordElement).type(password);
    }

    clickSubmit(){
        cy.get(this.submitButtonElement).click();
    }

    ValidationLogin(){
        cy.get(this.textVerificationElement).should('have.text', 'Time at Work');
    }
}

export default Login;