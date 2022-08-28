import {
    searchUserInput,
    searchTable,
  } from '../e2e/Constants/search'


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

/**
 * @description Navigate to the first car's detail page in the search list
 * @param {} none 
 * functions like this would not normally contain so many validations but since I do not
 * have dom element unit tests written for this test suite I have included them
**/
Cypress.Commands.add('navigateToFirstCarsDetailPage', () => {
    cy.contains('Rent')
        .should('be.visible')
        .should('not.be.disabled')
        .first()
        .click()
    cy.url()
        .should('contain', '/details')
});

/**
 * @description Navigate to a car's rental page from the car details page
 * @param {} none 
**/
Cypress.Commands.add('navigateToRentPage', () => {
    cy.get('.btn-primary')
        .should('contain', 'Rent!')
        .should('be.visible')
        .should('not.be.disabled')
        .click()
    cy.url()
        .should('contain', '/rent')
});
