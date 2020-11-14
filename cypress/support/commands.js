// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************


Cypress.Commands.add('generateYesterdayDate', () => {
    // The reference rates are usually updated around 16:00 CET
    // source: https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html

    var d = new Date();
    var currentHour = (d.getHours()+1) // +1 for CET when running in GMT zone
    cy.log('Current CET hour', currentHour)

    if (16 <= currentHour) {
            var datestring = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate(); // generates todays date
        } else if (16 > currentHour) {
            var datestring = d.getFullYear() + "-" + (d.getMonth()+1) + "-" + (d.getDate()-1); // generates yesterdays date
        } else {
            cy.log('*** Incorrect time format passed')
        }

    return cy.wrap(datestring);
})