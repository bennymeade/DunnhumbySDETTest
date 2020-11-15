// @ts-nocheck
import Base from './base.page';

const bowTiesOptions = '[id="Color"]'
const dryMartiniOptions = '[id="Size"]'
const fireworksOptions = '[id="Sounds"]'
const buyButton = '[id="buyButton"]'

class Product extends Base {

    validateProductOptions(product) {
        
            switch(product) {
                case 'Bow Ties':
                    cy.get(bowTiesOptions).children('option').then(options => {
                        const actual = [...options].map(o => o.value)
                        expect(actual).to.deep.eq(['Blue Red', 'White Blue', 'White Gray'])
                        })
                    break;
                case 'Dry Martini':
                    cy.get(dryMartiniOptions).children('option').then(options => {
                        const actual = [...options].map(o => o.value)
                        expect(actual).to.deep.eq(['Classic', 'Large', 'Gatsby-esque'])
                        })
                    break;
                case 'Fireworks':
                    cy.get(fireworksOptions).children('option').then(options => {
                        const actual = [...options].map(o => o.value)
                        expect(actual).to.deep.eq(['Huge BOOM', 'Sparks', 'That long strident sound'])
                        })
                    break;
                default:
                    cy.log('not known')
            }
        return this;
    }

    // 'choice' indicates the index position on the dropdown list
    selectProductOption(product, choice) {

        switch(product) {
            case 'Bow Ties':
                cy.get(bowTiesOptions)
                    .find('option')
                    .then($els => $els.get(choice).setAttribute('selected', "selected"))
                    .parent()
                    .trigger('change')
                break;
            case 'Dry Martini':
                cy.get(dryMartiniOptions)
                    .find('option')
                    .then($els => $els.get(choice).setAttribute('selected', "selected"))
                    .parent()
                    .trigger('change')
                break;
            case 'Fireworks':
                cy.get(fireworksOptions)
                    .find('option')
                    .then($els => $els.get(choice).setAttribute('selected', "selected"))
                    .parent()
                    .trigger('change')
                break;
            default:
                cy.log('not known')
        }
        return this;
    }

    validateBuyButton() {
        cy.get(buyButton)
            .should('be.visible')
            .should('exist')
            .contains('Buy for')
    }

    clickBuyButton() {
        this.validateBuyButton()
        cy.get(buyButton)
            .focus().click({ force: true })
        return this;
    }
}

export default new Product;