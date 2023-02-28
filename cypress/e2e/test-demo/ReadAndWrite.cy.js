describe("Read and Write from CSV", () => {
  it("Read", () => {
    cy.task("readFromCsv").then((res) => {
      console.log(res);

      res.unshift({Channel:'Channel', subbed:'Subbed', Like:'Liked'})
      res.push({Channel:'NewChannel', subbed:'yes', Like:'yes'})
      // Create a new csv file
      cy.task('writeFromCsv', {
        filename:'temps',
        rows:res
      })
    });
  });

});
