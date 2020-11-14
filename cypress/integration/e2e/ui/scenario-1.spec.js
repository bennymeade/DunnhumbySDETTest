import homepage from '../../pages/homepage.page'

const products = ['Bow Ties', 'Dry Martini', 'Fireworks'];

describe.only('Scenario 1', () => {

    beforeEach(() => {
        homepage
            .openUrl('')
            .validateH1Title('React & Gatsby shop powered by Snipcart')
    })

    products.forEach(product => {
        it(`Select ` + `${product}` + ` and verify options available`, () => {
            
            homepage.clickProductName(`${product}`)
        })
    })
})