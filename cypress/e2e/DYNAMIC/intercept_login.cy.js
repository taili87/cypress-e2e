///<reference types="Cypress"/>

describe('Handliong Dynamic elements',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

    it('Handling dynamic Text by using the contains methods - contains()', ()=>{
        cy.get("[name='username']").type('Admin').then(()=>cy.log('User entered username '));
        cy.get("[name='password']").type('admin123').then(()=>{cy.log('User entered password');})
        cy.get("button[type='submit']").click().then(()=>{cy.log('User click on Login Button');})

        cy.intercept({
            method:'POST',
            body:{
                username: 'Admin',
                password: 'admin123'
            }
        }).then(()=>{
            expect(statusCode).to.be.eq(200);
        })
        
    })
})