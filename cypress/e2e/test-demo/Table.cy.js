///<reference types="Cypress"/>


describe('Handle Tables', ()=>{
    beforeEach('Login', ()=>{
        // This script will execute before every it blocks.
       cy.visit('https://demo.opencart.com/admin/');
       cy.get("#input-username").type('demo');
       cy.get("#input-password").type('demo');
       cy.get("button[type='submit']").click();
       cy.get('.btn-close').click();
       cy.get('#menu-customer>a').click();
       cy.get('#menu-customer>ul>li:first-child').click();


    })

    it('Check Number of Rows and Column', ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
        .should('have.length',10); // validate row
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td")
        .should('have.length', 7); // validate column
    })

    it('Check cell data from specific row and column', ()=>{
        const email = 'princytrainings4@gmail.com';
        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains(email);
    })

    it('Read all Rows and Columns from a Table',()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{
            // $rows: all the row , index: represent all index, $row hold particular row
            cy.wrap($row).within(()=>{
                // Withing this row we re getting all rows
                cy.get('td').each(($column, index, $columns)=>{
                    // extract the data
                    cy.log($column.text());
                })
            })
        })
    })

    it('Pagination Table method one', ()=>{
        // get total number of pages

        let totalPages; 
        cy.get('.col-sm-6.text-end').then((ele) =>{
            const myTextElements = ele.text(); // showing 1 to 10 of 5581 ( 559 pages)
            totalPages = myTextElements.substring(myTextElements.indexOf("(")+1, myTextElements.indexOf("Pages")-1);
            cy.log(`Total numbers of Pages ${totalPages}`);

        })
    })

    it('Pagination Table method two', ()=>{
        // get total number of pages

        const totalPages = Math.floor(Math.random() * 10) + 1 //the + 1 makes it so its not 0.
        // Click pagination one by one
        for(let page=1; page<=totalPages; page++){
            if(totalPages > 1 ){
                cy.log("Active page is "+ page);
                cy.get("ul[class='pagination']>li:nth-child("+page+")").click();
                cy.wait(3000);
                // write a logic to read the data from this particular page

                cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{

                        //get table data
                        cy.get('td:nth-child(3)').then((ele)=>{
                            cy.log(ele.text()); // Email
                        })
                    })
                })


            }

        }


      
    })

});