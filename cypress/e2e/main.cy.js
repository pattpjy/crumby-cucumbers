describe("Main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.intercept({
      method: 'GET',
      url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
    }, { fixture: 'movies' })
  });
  describe("When main page render correctly", () => {
    it("Should render correctly", () => {
      cy.get('.poster-display > :nth-child(1)')
    
      cy.get(".poster-display").find(".main-board").should("have.length", 3);
    });
    it("When user click movie card, it should have the correct URL", () => {
      cy.get("#root > div > div.poster-display > div > a")
        .should("have.attr", "href", `/details/${sampleData.movies[0].id}`);
    });
  });
  describe("When API return an error", () => {
    it("Should show error message", () => {
      const errorAPI = {
        error: "No movie found with id:99999",
      };

      cy.visit("http://localhost:3000")
        .intercept(
          "get",
          "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
          {
            statusCode: 404,
            body: errorAPI,
          }
        )
        .get("p")
        .should("contain", "Unable To Fetch Your Data. Try Later.");
    });
  });
});
