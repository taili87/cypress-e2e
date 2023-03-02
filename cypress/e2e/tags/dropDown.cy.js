 /* static , dynamic and auto suggestion dropdown*/
///<reference types="Cypress"/>

describe('Drop down Test (sanity)', {tags:'@sanityTag'}, () =>{

    it('Static drop down with select', ()=>{
          cy.visit("https://www.zoho.com/commerce/free-demo.html");
          cy.get("#zcf_address_country")
          .select('Antarctica')
          .should('have.value', 'Antarctica');
    })

    it('Bootstrap drop down without select tag', ()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        cy.get("#select2-billing_country-container").click();
        cy.get('.select2-search__field').type('Iran').type('{enter}');

        // validation 
        cy.get("#select2-billing_country-container").should('have.text', 'Iran');
  })

  it('Auto suggest dropDown', ()=>{
    cy.visit("https://www.wikipedia.org/");
    cy.get("#searchInput").type('Delhi');
    cy.get('.suggestion-title').contains('Delhi University').click();
    cy.get('.mw-page-title-main').should('be.visible');
 
})

it('Dynamic dropDown', ()=>{
    cy.visit("https://www.google.com/");
    cy.get("input[name='q']").type('cypress automation tutorial');
    cy.wait(3000);
    cy.get("div.wM6W7d>span").should('have.length', 12)
    cy.get("div.wM6W7d>span").each(($element, index, $list) =>{
        if($element.text() == 'cypress automation tutorial'){
            cy.wrap($element).click();
        }else{
            console.log('Element not found !')
        }
        //cy.get('#rso > :nth-child(2) > .MjjYud > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').should('be.visible');
    })
   
 
})



















});
