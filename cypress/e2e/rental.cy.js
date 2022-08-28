import { 
    rentInput,
    inputErrorMessage, 
    errorMessageVerbiage,
    placeholderVerbiage
} from '../e2e/Constants/rent';

describe('Rent page', () => {
    beforeEach(() => {
        cy.visit('http://qalab.pl.tivixlabs.com');
    });
    context('User input fields', () => {
        beforeEach(() => {
            cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17');
            cy.navigateToFirstCarsDetailPage();
            cy.navigateToRentPage();
        });

        it('should validate text field input lengths for inputs that are too long', () => {
            let fiftyOneChar = 'ThisIsExactlyFiftyOneCharacterLongWithoutAnyNumbers';
            let twentySixNum = '12345678901234567890123456';    //card number text field accepts type text
            let fiftyOneCharEmail = 'ThisIsAValidEmail@ThatIsWayTooLongForTheTextVal.com';
            //cy.visit('http://qalab.pl.tivixlabs.com');
            //cy.validNonFilteredSearch('Poland', 'Wroclaw', '2022-09-15', '2022-09-17');
            //cy.navigateToFirstCarsDetailPage();
            //cy.navigateToRentPage();
            
            // type out long inputs
            cy.get(rentInput.name)
                .type(fiftyOneChar);
            cy.get(rentInput.lastName)
                .type(fiftyOneChar);
            cy.get(rentInput.cardNum)
                .type(twentySixNum);
            cy.get(rentInput.email)
                .type(fiftyOneCharEmail);
            
            // extra validation on rent button due to no dom element unit tests in this test suite
            cy.get(rentInput.rentBtn)
                .should('contain', 'Rent')
                .should('be.visible')
                .should('not.be.disabled')
                .click();
            
            // validate alert error messages
            cy.get(inputErrorMessage.redAlert)
                .should('contain', errorMessageVerbiage.nameTooLong)
                .should('contain', errorMessageVerbiage.lastNameTooLong)
                .should('contain', errorMessageVerbiage.emailTooLong)
                .should('contain', errorMessageVerbiage.cardNumTooLong);
            
            // validate placeholder text returns to default
            cy.get(rentInput.name)
                .invoke('attr', 'placeholder')
                .should('contain', placeholderVerbiage.name);
            cy.get(rentInput.lastName)
                .invoke('attr', 'placeholder')
                .should('contain', placeholderVerbiage.lastName);
            cy.get(rentInput.cardNum)
                .invoke('attr', 'placeholder')
                .should('contain', placeholderVerbiage.cardNum);
            cy.get(rentInput.email)
                .invoke('attr', 'placeholder')
                .should('contain', placeholderVerbiage.email);
        });
    });
});