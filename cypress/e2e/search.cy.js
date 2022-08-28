describe('Search page', () => {
  it('should filter avaliable cars by model when valid car model is entered in text field', () => {
    cy.visit('http://qalab.pl.tivixlabs.com');
    cy.get('#country').select('Poland');
    cy.get('#city').select('Wroclaw');
    cy.get('#pickup').type('2022-09-15');
    cy.get('#dropoff').type('2022-09-17');
    cy.get('.btn-primary').contains('Search').click();
    cy.get('#model').type('Aygo');
    cy.get('.btn-primary').contains('Search').click();
    let count = 0
    cy.get('#search-results').children('tbody').children('tr').first().contains('Aygo');
  })
})