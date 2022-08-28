import {
  searchUserInput,
  searchTable,
} from '../e2e/Constants/search';

describe('Search page', () => {
  it('should filter avaliable cars by model when valid car model is entered in text field', () => {
    cy.visit('http://qalab.pl.tivixlabs.com');
    cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17')
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