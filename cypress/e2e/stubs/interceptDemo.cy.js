describe('Work with Intercepts', ()=>{
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/todo');
    })
   

  it('can add new - Feed the cat', () => {
   
    const newItem = 'Feed the cat'
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can add new - Iphone is a nice Phone', () => {
    const newItem = 'Iphone is a nice Phone'
   // cy.intercept('POST', '/todo').as('new-todo')
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
   // cy.wait('@new-todo').its('response.statusCode').should('eq',201);

    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

})