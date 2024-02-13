import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { CarPage } from "../pages/car-page.js";
import { stateStore } from "../helper.js"
let today = new Date();

// sorry to put date func in here hehe


const carPage = new CarPage()

Then('I validate at car rental page', () => {
    carPage.validateCarPage()
})

When('I select {string} as rental', (driver) => {
    carPage.doSelectDriver(driver)
})

And('I choose {string} as rental location', (location) => {
    carPage.doChooseRentalLocation(location)
})

And('I choose rental start date', () => {
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    let year = tomorrow.getFullYear();
    let month = tomorrow.getMonth() + 1; // Months are zero-indexed
    let day = tomorrow.getDate();
    day = (day < 10) ? '0' + day : day;
    let tomorrowDateString = day + '-' + month + '-' + year;

    carPage.doChooseRentalStartDate(tomorrowDateString)
})

And('I choose {int} {int} as rental start time', (hour, minute) =>{
    carPage.doChooseRentalStartTime(hour, minute)
})

And('I choose rental end date', () =>{
    let tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 3);
    let year = tomorrow.getFullYear();
    let month = tomorrow.getMonth() + 1; // Months are zero-indexed
    let day = tomorrow.getDate();
    day = (day < 10) ? '0' + day : day;
    let tomorrowDateString = day + '-' + month + '-' + year;

    carPage.doChooseRentalEndDate(tomorrowDateString)
})

And('I click search button', () =>{
    carPage.doClickSearchButton()
})

And('I select number {string} from the car list', (list) =>{
    carPage.doSelectContinue(list)
})

And('I click continue button', () =>{
    let list = '1'
    carPage.doSelectContinue(list)
})

And('I select number {string} from the rental provider list', (list) =>{
    carPage.doSelectRentalProvider(list)
})

And('I select {string} as pickup location', (location) =>{
    carPage.doSelectPickup(location)
})


And('I select {string} as dropff location', (location) =>{
    carPage.doSelectDropOff(location)
})

And('I write {string} as name booking', (name) =>{
    carPage.doWriteName(name)
})

And('I write {string} as number booking', (number) =>{
    carPage.doWriteNumber(number)
})

And('I write {string} as email booking', (email) =>{
    carPage.doWriteEmail(email)
})

And('I select title booking', () =>{
    carPage.doSelectTitle()
})

And('I write {string} as number booking', (number) =>{
    carPage.doWriteName(number)
})

And('I write {string} as name driver', (name) =>{
    carPage.doWriteName1(name)
})

And('I write {string} as number driver', (number) =>{
    carPage.doWriteNumber1(number)
})

And('I write {string} as notes', (notes) =>{
    carPage.doWriteNotes(notes)
})

And('I select requirement booking', () =>{
    carPage.doSelectRequirement()
})

And('I click continue payment booking', () =>{
    carPage.DoClickContinuePayment()
})

And('I select payment method', () =>{
    carPage.doSelectPaymentMethod()
})

And('I validate transfer payment page', () =>{
    carPage.ValidateTransferPaymnet()
})