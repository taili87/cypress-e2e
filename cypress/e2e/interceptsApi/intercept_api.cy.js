
    describe('POST call', ()=>{
        it('stub should be limited to 10', ()=>{
        cy.visit('https://my-json-server.typicode.com/typicode/demo');
        cy.get("a[href='/typicode/demo/posts']").click();

        })
    

         it('mocking with intercept', ()=>{
            cy.visit('https://my-json-server.typicode.com/typicode/demo');
            
         })

    })
//   cy.intercept({
//             path: '/posts',
            
//            }).as('postsCall');
//         });
//         cy.get("a[href='/typicode/demo/posts']").click();
//        cy.contains('posts').click();
//         cy.wait('@postsCall').then((data)=>{
//             cy.log(JSON.stringify(data));
//             console.log(JSON.stringify(data));
//          })