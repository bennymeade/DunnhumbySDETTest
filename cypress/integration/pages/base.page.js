// common methods are placed in base page class

export default class Base {

    openUrl(pathUrl) {
        cy.visit(Cypress.config().baseUrl + pathUrl)
        return this;
    }

    validateH1Title(titleText) {
        cy.get('h1 > a', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }
}