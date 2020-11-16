// @ts-nocheck
import homePage from '../../pages/home-page.page'
import productPage from '../../pages/product.page'

const products = ['Bow Ties', 'Dry Martini', 'Fireworks'];

describe('Scenario 1', () => {
    
    products.forEach(product => {
        it(`Select ` + `${product}` + ` and verify buying options`, () => {
            homePage
                .openUrl('')
                .validateH1Title('React & Gatsby shop powered by Snipcart')
                .clickProductName(`${product}`)
            productPage
                .validateH1Title(`${product}`)
                .validatePageUrl(`${product}`)
                .validateProductOptions(`${product}`)
                .selectProductOption(`${product}`, 1)
                .validateBuyButton()
        })
    })
})