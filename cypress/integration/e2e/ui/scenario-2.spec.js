// @ts-nocheck
import homePage from '../../pages/home-page.page'
import productPage from '../../pages/product.page'

const product = 'Bow Ties';

describe('Scenario 1', () => {
    beforeEach(() => {
        homePage
            .openUrl('')
            .validateH1Title('React & Gatsby shop powered by Snipcart')
            .clickProductName(product)
    })

    it(`Place order for product - ` + product, () => {
        productPage
            .validateH1Title(product)
            .selectProductOption(product, 2)
            .clickBuyButton()
        
    })
})