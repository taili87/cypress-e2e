///<reference types="Cypress"/>

const { defineConfig } = require('cypress');
const csv = require('@fast-csv/parse');
const {writeToPath } = require('@fast-csv/format');


module.exports = defineConfig({
 // pageLoadTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {

   // baseUrl: 'http://localhost:1234',
    setupNodeEvents(on, config) {
      require('@cypress/grep/src/plugin')(config);
      return config;
  },
    
    setupNodeEvents(on, config) {
   
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', {
        // read from csv file
        readFromCsv(){
         return new Promise(resolve =>{
           let dataArray = [];
          csv.parseFile("cypress\\mycsv.csv", {Headers:true}) // READ THE CSV
          .on('data', (data)=>{
           dataArray.push(data); // Push the data 
          })
          .on('end', ()=>{
           resolve(dataArray) // Access the array
          })
         })
       }
          
       });

       // Write from csv file

       on('task', {
        // Create task to read from csv file
        writeFromCsv({filename, rows}){
          writeToPath(`cypress\\${filename}.csv`, rows)
          return null;
         
       }
          
       });



















    },
  

    }
});







