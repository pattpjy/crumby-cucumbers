describe("Main page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("home page render correctly", () => {
    cy.contains("a");
    cy.get(".poster-display").find(".main-board").should("have.length", 40);
  });
  it("When user click movie card, it take user to another page", () => {
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
      .get(".main-board")
      .should("include", `/details/${sampleData.id}`);
  });
  it("When there's no movie detail, it should show error message", () => {
    cy.visit("https://example.cypress.io");
  });
});
