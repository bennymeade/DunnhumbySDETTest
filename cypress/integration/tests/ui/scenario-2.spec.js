// @ts-nocheck
import homePage from '../../pages/home-page.page'
import productPage from '../../pages/product.page'
import myCartPage from '../../pages/my-cart.page'
import billingAddress from '../../pages/billing-address.page'

const product = 'Fireworks';

describe('Scenario 1', () => {
    beforeEach(() => {
        homePage
            .openUrl('')
            .validateH1Title('React & Gatsby shop powered by Snipcart')
            .clickProductName(product)
    })

    it(`Place order for product - ` + product, () => {
        // Buy any product and go to My cart
        productPage
            .validateH1Title(product)
            .selectProductOption(product, 2)
            .clickBuyButton()
        myCartPage
            .validateH2Title('My cart')
            .validateH2Title('Fireworks')
            .validateParagraph('Fireworks are a noble, traditional way to emphasize the greatness of an event.')
        // validate the colour, and unit price are correctly displayed
            .validateQuantity(1)
            .validateTotalPrice('67.89')
        // Increase the quantity and assert the Total price
            .increaseQuantity()
            .validateQuantity(2)
            .validateTotalPrice('135.78')
        // validate the remove product (x) colour (red or not)
            .validateRemoveButtonColour('#ff1100')
        // Click on Next step button and verify the following
        // Sub total
        // Guest checkout, login, new account containers
        // Checkout button colour
        // And relative URL contains login
            .clickNextButton()
            .validateSubTotalAmount('135.78')
            .validateSignInSection()
            .validateCreateLoginSection()
            .validateCheckoutAsGuestSection()
            .validateCheckoutButtonColour('#efe778')
            .validatePageUrl('login')
        // Click on Checkout button and fill the form with random data
            .clickCheckoutButton()
        billingAddress
            .myCartSectionsTitle('Billing address')
            cy.generateEmailAddress().then(uniqueEmail => {
                cy.fixture('billing-address').then((billing) => { billingAddress.submitBillingAddressDetails(billing.name, billing.streetAddress, billing.city, billing.zipPostalCode, uniqueEmail) }); 
            })
        // Click on Next step button and verify the following
        // Shipping methods 
        // Shipping prices
        billingAddress.myCartNextButton()
        
    })
})