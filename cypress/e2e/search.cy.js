import {
  searchUserInput,
  searchTable,
  searchPageDefaultSettings,
  errorMessageVerbiage
} from '../e2e/Constants/search';

import { navMenu } from '../e2e/Constants/navigationMenu';

describe('Search page', () => {
  it('should filter avaliable cars by model when valid car model is entered in text field', () => {
    let carModel = 'Aygo';
    cy.visit('http://qalab.pl.tivixlabs.com');
    cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17');
    cy.get(searchUserInput.model)
      .type(carModel);
    cy.get(searchUserInput.searchbtn)
      .contains('Search')
      .click();
    cy.get(searchTable.table)
      .children(searchTable.results)
      .children(searchTable.individualRow)
      .first()
      .contains(carModel);
  });

  it('should navigate back to default search page when search navigation menu option is clicked', () => {
    cy.visit('http://qalab.pl.tivixlabs.com');
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
})