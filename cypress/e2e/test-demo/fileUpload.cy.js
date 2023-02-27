

///<reference types="Cypress"/>
import 'cypress-file-upload';

describe('File Upload', ()=>{
    it('Single File upload', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        // npm install --save-dev cypress-file-upload
            
              cy.get('#file-upload').attachFile('sample.pdf');
              cy.get('#file-submit').click();
              cy.wait(5000);
        
              cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
        
              
    })

    it('File upload rename', ()=>{

        cy.visit("https://the-internet.herokuapp.com/upload");
            
              cy.get('#file-upload').attachFile(
                {
                    filePath:'sample1.pdf', 
                    fileName:'families.pdf'
                }
                    );
              cy.wait(5000);
              cy.get('#file-submit').click();
              cy.wait(5000);
        
              cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');

    })

    it('File upload -Drag and Drop', ()=>{
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile("sample1.pdf", {subjectType:'drag-n-drop'});
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
        .contains('sample1.pdf');

    })

    it('Multiple file uplaod', ()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(['sample.pdf', 'sample1.pdf', 'sample2.pdf']);
        cy.wait(3000);
        cy.get('#fileList > :nth-child(1)').contains('sample.pdf');
        cy.get('#fileList > :nth-child(2)').contains('sample1.pdf');
        cy.get('#fileList > :nth-child(3)').contains('sample2.pdf');
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected:');
        
    })

    it.only('File upload - Shadow Dom', ()=>{
      cy.visit('https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm');
      //When the element is inside the shadow DOM - use of {includeShadowDom:true}
      cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile('sample.pdf');
      cy.wait(5000);
      cy.get('.smart-item-name', {includeShadowDom:true}).contains('sample.pdf');

    })



})