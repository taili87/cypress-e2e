//Page Object class 
class Login {
    setUserName(username){
        cy.get("input[placeholder='Username']").type(username);
    }
    setPassword(password){
        cy.get("input[placeholder='Password']").type(password);
    }

    clickSubmit(){
        cy.get("button[type='submit']").click();
    }

    ValidationLogin(){
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)")
        .should('have.text', 'Time at Work');
    }
}

export default Login;