export class MainPage {
    
    visitTravelokaPage(){
        cy.visit('https://www.traveloka.com/')
        cy.url().should('include', '/en')
    }

    doClickCarRental(){
        cy.xpath('//h4[text()="Car Rental"]').click()
    }
}