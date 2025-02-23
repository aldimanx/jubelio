import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { stateStore } from "../helper.js";
import { LoginPage } from "../pages/login-page.js";
let today = new Date();

// sorry to put date func in here hehe

const loginPage = new LoginPage();

Given("I open Jubelio login page", () => {
  loginPage.doVisitJubelio();
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
