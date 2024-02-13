export class CarPage {
    
    //sorry need to put this in here instead hehe

    validateCarPage(){
        cy.url().should('include', '/car-rental')
    }

    doSelectDriver(driver){
        if(driver == 'Without Driver'){
            driver = 'Without Driver'
        } else if(driver == 'With Driver'){
            driver = 'With Driver'
        }
        cy.xpath(`//div[text()="${driver}"]`).click()
    }

    doChooseRentalLocation(location){
        cy.get('[data-testid="rental-search-form-location-input"]').click().type(location)
        cy.get('[data-testid="rental-search-form-location-item-title"]').contains(location).click()
    }

    doChooseRentalStartDate(tomorrowDateString){
        cy.get('[data-testid="rental-search-form-date-input-start"]').click()
        cy.get(`[data-testid="date-cell-${tomorrowDateString}"]`).first().should('be.visible').click()
    }

    doChooseRentalStartTime(hour, minute){
        cy.get('[data-testid="rental-search-form-time-input-start"]').click()
        cy.xpath(`//div[text()="Hour"]//following-sibling::*//div[text()="${hour}"]`).click()
        cy.xpath(`//div[text()="Minute"]//following-sibling::*//div[text()="${minute}"]`).click()
        cy.xpath('//div[text()="Done"]').click()
    }

    doChooseRentalEndDate(date){
        cy.get('[data-testid="rental-search-form-date-input-end"]').click()
        cy.get(`[data-testid="date-cell-${date}"]`).last().should('be.visible').click()
    }

    doChooseRentalEndTime(hour, minute){
        cy.get('[data-testid="rental-search-form-time-input-end"]').click()
        cy.xpath(`//div[text()="Hour"]//following-sibling::*//div[text()="${hour}"]`).click()
        cy.xpath(`//div[text()="Minute"]//following-sibling::*//div[text()="${minute}"]`).click()
        cy.xpath('//div[text()="Done"]').click()
    }

    doClickSearchButton(){
        cy.get('[data-testid="rental-search-form-cta"]').click()
    }

    doSelectContinue(list){
        cy.xpath(`(//div[text()="Continue"]/following-sibling::*//div[text()="Continue"])[${list}]`).first().click()
    }

    doSelectRentalProvider(list){
        cy.xpath(`(//div[text()="Continue"]/following-sibling::*//div[text()="Continue"])[${list}]`).click()
    }

    doSelectPickup(location){
        cy.xpath(`(//div[text()="${location}"])[1]`).click({force:true})
        cy.xpath(`(//div[text()="${location}"])[2]`).click({force:true})
        cy.xpath('(//div[@class="css-1dbjc4n r-1udh08x"])[2]').click()
    }

    doSelectDropOff(location){
        cy.xpath(`(//div[text()="${location}"])[2]`).click({force:true})
        cy.xpath(`(//div[text()="${location}"])[3]`).click({force:true})
        cy.xpath('(//div[@class="css-1dbjc4n r-1udh08x"])[4]').click()
    }

    doWriteName(name){
        cy.get('[aria-labelledby="name.full"]').first().type(name)
    }

    doWriteNumber(Number){
        cy.get('[aria-label="Phone Number"]').first().type(Number)
    }

    doWriteEmail(email){
        cy.get('aria-labelledby="emailAddress"]').type(email)
    }

    doSelectTitle(){
        cy.get('aria-labelledby="emailAddress"]').click()
        cy.get('select').select('Mr.').should('have.value', 'MR')
    }

    doWriteName1(name){
        cy.get('[aria-labelledby="name.full"]').last().type(name)
    }

    doWriteNumber1(Number){
        cy.get('[aria-label="Phone Number"]').last().type(Number)
    }

    doWriteNotes(notes){
        cy.get('[placeholder="Odd or even license plates, car charger, baby car seat, etc."]').type(notes)
    }

    doSelectRequirement(){
        cy.get('[data-id="IcSystemChevronRight"]').click()
        cy,xpath(`//div[text()='Tap to check the requirements.']/following-sibling::*//div[text()="Check All"]`).click()
        cy.xpath('//div[text()="Save"]').last().click()
    }

    DoClickContinuePayment(){
        cy.contains('Continue to Payment').click()
        cy.xpath('//div[text()="Continue"]').last().click()
        cy.wait(5000)
    }

    doSelectPaymentMethod(){
        cy.contains('Bank Transfer').click()
        cy.contains('Pay with Bank Transfer').click()
        cy.wait(5000)
    }

    ValidateTransferPaymnet(){
        cy.url().should('include', '/payment/confirmation')
    }
}

