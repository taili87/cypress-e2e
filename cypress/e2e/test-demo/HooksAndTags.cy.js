///<reference types="Cypress"/>

describe('Hooks and Tags', ()=>{
    /* 
      before - after
      beforeEach - afterEach
    */

      before(()=>{
        cy.log('Launching application URL');
      })

      after(()=>{
        cy.log('Close the application');
      })

      beforeEach(()=>{
        cy.log('Started before every IT blocks')
      })

      afterEach(()=>{
        cy.log('Execute multiple time after every IT blocks')
      })

    it('Search', ()=>{
      console.log('****  Searching ******');
    })

    it('Advance Search', ()=>{
        console.log('****  Advance Search ******');
    })

    it('Listing Products', ()=>{
        console.log('****  Listing Products ******');

    })
})