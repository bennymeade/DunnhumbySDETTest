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

    validateH2Title(titleText) {
        cy.get('h2', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }

    validateParagraph(text) {
        cy.get('p', { timeout: 30000 })
            .should('be.visible')
            .should('contain', text)
        return this;
    }

    // ensuring to complete task: "Verify the current relative URL contains right product name"
    validatePageUrl(url) {
        let hypenedUrl = url.toLowerCase().replace(' ', '-')
        cy.log('hypenedUrl', hypenedUrl)
        
        cy.url().should('include', hypenedUrl)
        return this;
    }

    myCartSectionsTitle(titleText) {
        cy.get('p.snip-step__label', { timeout: 30000 })
            .should('be.visible')
            .should('contain', titleText)
        return this;
    }

    myCartNextButton() {
        // cy.get('a.js-next').contains('Next step')
        cy.get('[id="snipcart-next"]').contains('Next step')
            .should('exist')
            .click()
        return this;
    }
}