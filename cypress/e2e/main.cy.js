describe("Main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  describe("When main page render correctly", () => {
    it("Should render correctly", () => {
      cy.url().should("include", "3000");
      cy.contains("a");
      cy.get(".poster-display").find(".main-board").should("have.length", 40);
    });

    it("When user click movie card, it should have the correct URL", () => {
      const sampleData = {
        movies: [
          {
            id: 436270,
            poster_path:
              "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
            backdrop_path:
              "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
            title: "Black Adam",
            average_rating: 4,
            release_date: "2022-10-19",
          },
        ],
      };
      cy.intercept(
        "get",
        "https://rancid-tomatillos.herokuapp.com/api/v2/movies",
        sampleData
      )
        .get("#root > div > div.poster-display > div > a")
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
