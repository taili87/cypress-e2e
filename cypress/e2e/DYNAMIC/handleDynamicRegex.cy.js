///<reference types="Cypress"/>

describe('Handliong Dynamic elements',()=>{
    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })
    it('Handling dynamic Text', ()=>{
        cy.get("[name='username']").type('Admin').then(()=>
        cy.log('User entered username '));

        cy.get("[name='password']").type('admin123').then(()=>{
            cy.log('User entered password');
        })

        cy.get("button[type='submit']").click().then(()=>{
            cy.log('User click on Login Button');
        })

        cy.get('.oxd-userdropdown-name').then(($usernameElements)=>{
            const userNameText = $usernameElements.text();
            cy.log(userNameText);
            const USERNAME = '/.+/';
            expect(userNameText).not.eq(USERNAME);
        })
    })

    it.only('Handling dynamic Text by passing a variables username', ()=>{
        cy.get("[name='username']").type('Admin').then(()=>cy.log('User entered username '));
        cy.get("[name='password']").type('admin123').then(()=>{cy.log('User entered password');})
        cy.get("button[type='submit']").click().then(()=>{cy.log('User click on Login Button');})

        cy.get('.oxd-userdropdown-name').then(($usernameElements)=>{
            const userName = $usernameElements.text();
            cy.log(userName);

            expect(userName).to.match(/.*/); 
            /*
            dot mean insert any character 
            and * character can come zero to N times - 
            and Plus(+) that mean 1 are more time
            
            */  
        })
    })

    it('Handling dynamic Text by using the contains methods - contains()', ()=>{
        cy.get("[name='username']").type('Admin').then(()=>cy.log('User entered username '));
        cy.get("[name='password']").type('admin123').then(()=>{cy.log('User entered password');})
        cy.get("button[type='submit']").click().then(()=>{cy.log('User click on Login Button');})


           // cy.get('.oxd-userdropdown-name').contains(/.+/).click();
            //cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
            //.then(()=>{cy.log('User Logout - Bye Bye !')})
            cy.contains(/.+/).click();
            cy.contains('Logout').click();
        
    })
})