import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/login-page.js";
import { SalesPage } from "../pages/sales-page.js";
let today = new Date();

// sorry to put date func in here hehe

const loginPage = new LoginPage();
const salesPage = new SalesPage();

Given("I open Jubelio login page", () => {
  loginPage.doVisitJubelio();
});

Given("I validate {string} as incorrect credential message", (message) => {
  salesPage.validateMessageAlert(message);
});

When("I validate at login page", () => {
  loginPage.validateLoginPage();
});

When(
  "I do login with account {string} as username and {string} as password",
  (username, password) => {
    loginPage.doLogin(username, password);
  }
);
