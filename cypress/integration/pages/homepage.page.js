// @ts-nocheck
import Base from './base.page';

const productName = 'h3 > a'

class HomePage extends Base {

    clickProductName(text) {
        cy.get(productName).contains(text)
            .should('be.visible')
            .click()
        return this;
    }

}

export default new HomePage;