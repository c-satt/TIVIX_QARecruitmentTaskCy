import {
    searchUserInput,
    searchTable,
  } from '../e2e/Constants/search'

//const { api } = globals;

/**
 * @description Valid car search with given paramaters
 * @param {String} country the name of the country
 * @param {String} city the name of the city
 * @param {String} pickup the date of pick up (yyyy-mm-dd format)
 * @param {String} dropoff the date of drop off (yyyy-mm-dd format)
**/
Cypress.Commands.add('validNonFilteredSearch', (country, city, pickup, dropoff) => {
    cy.get(searchUserInput.country)
        .select(country)
        .should('contain', country);
    cy.get(searchUserInput.city)
        .select(city);
    cy.get(searchUserInput.pickup)
        .type(pickup);
    cy.get(searchUserInput.dropoff)
        .type('2022-09-17');
    cy.get(searchUserInput.searchbtn)
        .contains('Search')
        .click();
    cy.url()
        .should('contain', pickup)
        .should('contain', dropoff)
});