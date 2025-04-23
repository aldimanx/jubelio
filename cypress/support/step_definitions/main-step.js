import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { MainPage } from "../pages/main-page.js";

const mainPage = new MainPage();

Given("I Visit dealls page", () => {
  mainPage.doVisitDealls();
});

When("I want to login dealls user", () => {
  mainPage.doVisitLoginUser();
});

And("I search {string} as specific job in main page", (job) => {
  mainPage.doSearchJob(job);
});

And("I validate {string} as searched job visible", (job) => {
  mainPage.doValidateSearchResult(job);
});

And("I validate no specific job found yet", () => {
  mainPage.doValidateEmptySearchResult();
});
