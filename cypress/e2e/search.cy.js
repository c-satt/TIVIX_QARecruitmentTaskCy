import {
  searchUserInput,
  searchTable,
} from '../e2e/Constants/search';

describe('Search page', () => {
  it('should filter avaliable cars by model when valid car model is entered in text field', () => {
    cy.visit('http://qalab.pl.tivixlabs.com');
    cy.get(searchUserInput.country)
      .select('Poland');
    cy.get(searchUserInput.city)
      .select('Wroclaw');
    cy.get(searchUserInput.pickup)
      .type('2022-09-15');
    cy.get(searchUserInput.dropoff)
      .type('2022-09-17');
    cy.get(searchUserInput.searchbtn)
      .contains('Search')
      .click();
    cy.get(searchUserInput.model)
      .type('Aygo');
    cy.get(searchUserInput.searchbtn)
      .contains('Search')
      .click();
    cy.get(searchTable.table)
      .children(searchTable.results)
      .children(searchTable.individualRow)
      .first()
      .contains('Aygo');
  })
})