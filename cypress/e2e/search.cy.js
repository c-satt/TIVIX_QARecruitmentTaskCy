import {
  searchUserInput,
  searchTable,
  searchPageDefaultSettings,
  errorMessageVerbiage
} from '../e2e/Constants/search';

import { navMenu } from '../e2e/Constants/navigationMenu';

describe('Search page', () => {
  beforeEach(() => {
    cy.visit('http://qalab.pl.tivixlabs.com');
  });
  context('Filter Cars', () => {
    it('should filter avaliable cars by model when valid car model is entered in text field', () => {
      let carModel = 'Aygo';

      // perform a general car search
      cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17');
      
      // add a model and search
      cy.get(searchUserInput.model)
        .type(carModel);
      cy.get(searchUserInput.searchbtn)
        .contains('Search')
        .click();
      
      // get and check the first result to see if it contains the searched for model
      cy.get(searchTable.table)
        .children(searchTable.results)
        .children(searchTable.individualRow)
        .first()
        .contains(carModel);
    });
});

  context('Navigate to search page', () => {
    it('should navigate back to default search page when search navigation menu option is clicked', () => {
      // perform a gernal car search and go to first car result details page
      cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17');
      cy.navigateToFirstCarsDetailPage();
      
      // validate href
      cy.get(navMenu.search)
        .invoke('attr', 'href')
        .should('contain', '/');
      
      cy.get(navMenu.search)
        .click();

      // validate url
      cy.url()
        .should('equal', 'http://qalab.pl.tivixlabs.com/')

      // validate input fields are reset to default values
      cy.validateSearchPageDefaults();

      // validate reminder date message is present
      cy.get(searchUserInput.alertMessage)
        .contains(errorMessageVerbiage.validDates);
    });
  });
});