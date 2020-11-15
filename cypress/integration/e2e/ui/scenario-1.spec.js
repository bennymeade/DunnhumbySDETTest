// @ts-nocheck
import homePage from '../../pages/home-page.page'
import productPage from '../../pages/product.page'

const products = ['Bow Ties', 'Dry Martini', 'Fireworks'];

describe.only('Scenario 1', () => {
    beforeEach(() => {
        homePage
            .openUrl('')
            .validateH1Title('React & Gatsby shop powered by Snipcart')
    })

    products.forEach(product => {
        it(`Select ` + `${product}` + ` and verify buying options`, () => {

            homePage.clickProductName(`${product}`)
            productPage
                .validateH1Title(`${product}`)
                .validatePageUrl(`${product}`)
                .validateProductOptions(`${product}`)
                .selectProductOption(`${product}`, 1)
                .validateBuyButton()
        })
    })
})