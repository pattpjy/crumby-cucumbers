describe('Details page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
        cy.intercept({
            method: 'GET',
            url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies'
        }, { fixture: 'movies' })
        cy.intercept({
            method: 'GET',
            url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270'
        }, { fixture: 'details' })
    })
    it('Should have begin on the main page', () => {
        cy.get('.poster-display > :nth-child(1)')
    })
    it('should be able to go to a details page', () => {
        cy.get('.poster-display > :nth-child(1)')
            .click()
        cy.get('.poster')
        cy.get('.data-list > :nth-child(1)')
            .contains('Rating: 4')
    })
    it('should be able to navigate home', () => {
        cy.get('.poster-display > :nth-child(1)')
            .click()
        cy.get('.poster')
        cy.get('.data-list > :nth-child(1)')
            .contains('Rating: 4')
        cy.get('.homeLink').click()
        cy.get('.poster-display > :nth-child(3)')
    })
})