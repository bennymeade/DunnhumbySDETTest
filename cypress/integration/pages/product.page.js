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
                    cy.log('option passed not known')
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
        return this;
    }

    clickBuyButton() {
        // cy.pause()
        this.validateBuyButton()
        
        // cy.get(buyButton).debug().click()

        // cy.reload()
        // cy.get('#buyButton').focus().trigger('keydown', { key: "enter", code: "enter"})

        for (let i = 0; i < 2; i++) {
            cy.get(buyButton).type('{enter}', { force: true});
       }

        // cy.get(buyButton).trigger('keydown', { keyCode: 13, which: 13 })

        // cy.get(buyButton).focus().trigger('mousedown').trigger('mouseup')
        // cy.get(buyButton).focus().trigger('mouseup')

        // cy.get(buyButton).focus()

        // for (var i = 0; i < 100; i++) {
            // cy.get(buyButton).trigger('keydown')
            // cy.get(buyButton).trigger('keypress')
            // cy.get(buyButton).trigger('keyup')
        //     cy.wait(50)
        //   }
          

        // cy.get(buyButton).click({ force: true })
        // cy.get(buyButton).click({ force: true })

        this.openUrl('/bow-ties/#!/cart') // work around for issue with Buy button not launching cart
        return this;
    }
}

export default new Product;