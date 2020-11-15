// @ts-nocheck
// common methods are placed in base page class

export default class Base {

    openUrl(pathUrl) {
        cy.visit(Cypress.config().baseUrl + pathUrl)
        return this;
    }

    validateH1Title(titleText) {
        cy.get('h1', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }

    // ensuring to complete task: "Verify the current relative URL contains right product name"
    validatePageUrl(url) {
        let hypenedUrl = url.toLowerCase().replace(' ', '-')
        cy.log('hypenedUrl', hypenedUrl)
        
        cy.url().should('include', hypenedUrl)
        return this;
    }
}