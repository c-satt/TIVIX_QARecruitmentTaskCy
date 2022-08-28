import {
    searchUserInput,
    searchTable,
} from '../e2e/Constants/search';

describe('Search page', () => {
    it('should validate text field input lengths', () => {
        cy.visit('http://qalab.pl.tivixlabs.com');
        cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17');
        cy.url()
            .should('contain', '2022-09-15')
            .should('contain', '2022-09-17')
        
    })
})