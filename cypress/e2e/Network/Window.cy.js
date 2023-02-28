
describe('Window Test Suite Commands', ()=>{

    before(()=>{
        cy.visit('https://react-redux.realworld.io/#/login?_k=bn6sw1');
       
    })
    it('Window Tests Command - URI Properties', ()=>{
        cy.window().should(win =>{
            const loc = win.location;
            expect(loc.hash).to.eql('#/login?_k=bn6sw1');
        })

    })
    it('Window Tests Command - Page Reload', ()=>{

    })
})