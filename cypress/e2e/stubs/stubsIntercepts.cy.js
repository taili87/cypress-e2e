/*Click on the button and number of user are generating
 Create stub1 for post and stub2 for user -basically fake response and whenever the api is availble
 you can replace the endpoint and dynamically start testing your application*/

 //generate my own response by create stub

 describe('Stub Intercepts API',()=>{
    it('test api with simple intercepts', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept({ method:'GET',path: '/posts'}).as('posts');
        cy.get("table:nth-of-type(1) a[href='/posts']").click();
        cy.wait('@posts').then(res=>{
            cy.log(JSON.stringify(res));
            console.log(JSON.stringify(res));

            expect(res.response.body).to.have.length(100);
        })
    })


    it('Mocking with intercepts test with static response', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept('GET', '/posts', {totalposts:5});//.as('posts');
        
        cy.get("table:nth-of-type(1) a[href='/posts']").click();
       // cy.wait('@posts');

    })

    it.only('Mocking with intercepts test with static response', ()=>{
        cy.visit('https://jsonplaceholder.typicode.com/');
        cy.intercept('GET', '/posts', {fixture:'getuser.json'}).as('posts');
        cy.get("table:nth-of-type(1) a[href='/posts']").click();
        cy.wait('@posts');

    })
 })