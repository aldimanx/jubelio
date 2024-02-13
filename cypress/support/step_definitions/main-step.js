import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { MainPage } from "../pages/main-page.js";
import { stateStore } from "../helper.js"


const mainPage = new MainPage()

Given('I visit traveloka main Page', () => {
    mainPage.visitTravelokaPage()
})

When('I click car rental submenu', () => {
    mainPage.doClickCarRental()
})

