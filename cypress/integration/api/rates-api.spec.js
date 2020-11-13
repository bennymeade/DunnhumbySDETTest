let currencies = [
    "GBP",
    "HKD",
    "IDR",
    "ILS",
    "DKK",
    "INR",
    "CHF",
    "MXN",
    "CZK",
    "SGD",
    "THB",
    "HRK",
    "EUR",
    "MYR",
    "NOK",
    "CNY",
    "BGN",
    "PHP",
    "PLN",
    "ZAR",
    "CAD",
    "ISK",
    "BRL",
    "RON",
    "NZD",
    "TRY",
    "JPY",
    "RUB",
    "KRW",
    "USD",
    "AUD",
    "HUF",
    "SEK"]

describe('Latest Foreign Exchange rates', () => {

    it('with symbols', () => {
        cy.generateYesterdayDate().then(ratesDate => {
            cy.log('Updated exchange rates date', ratesDate)

            cy.request('/latest?symbols=HUF,GBP,NZD').then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.base).to.eq('EUR')
                expect(response.body.rates.HUF).to.not.be.null
                expect(response.body.rates.GBP).to.not.be.null
                expect(response.body.rates.NZD).to.not.be.null
                expect(response.body.date).to.eq(ratesDate)
            })
        })
    })

    it('with symbols - error', () => {
        cy.request({
            method: 'GET',
            url: '/latest?symbols=fake',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    currencies.forEach(currency => {
    it(`with base - ${currency}`, () => {
        cy.generateYesterdayDate().then(ratesDate => {
            cy.request(`/latest?base=${currency}`).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.rates.GBP).to.not.be.null
                expect(response.body.date).to.eq(ratesDate)
                })
            })
        })
    })

    it(`with base - error`, () => {
        cy.request({
            method: 'GET',
            url: '/latest?base=fake',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })

    it('with symbols and base', () => {
        cy.generateYesterdayDate().then(ratesDate => {
            cy.request({
                method: 'GET',
                url: '/latest?base=USD&symbols=HUF',
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.base).to.eq('USD')
                expect(response.body.rates.HUF).to.not.be.null
                expect(response.body.date).to.eq(ratesDate)
            })
        })
    })

    it(`with symbols and base - error`, () => {
        cy.request({
            method: 'GET',
            url: '/latest?base=fake&symbols=fake',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})

describe('Specific date Foreign Exchange rates', () => {

    let dayDate = 24
    let dateRangeSpecific = `2015-01-`

    it('with symbols', () => {
        cy.request('/' + dateRangeSpecific + `${dayDate}` + '?symbols=USD,JPY,MYR').then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.base).to.eq('EUR')
            expect(response.body.rates.USD).to.not.be.null
            expect(response.body.rates.JPY).to.not.be.null
            expect(response.body.rates.MYR).to.not.be.null
            expect(response.body.date).to.eq(dateRangeSpecific + `${dayDate - 1}`)
        })
    })

    it('with symbols - error', () => {
        cy.request({
            method: 'GET',
            url: '/' + dateRangeSpecific + `${dayDate}` + '?symbols=fake',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400)
        })
    })
})