import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginPage } from "../pages/login-page.js";

const loginPage = new LoginPage();

Given("I validate dealls login page", () => {
  loginPage.validateLoginPage();
});

When(
  "I login {string} as username and {string} as password",
  (username, password) => {
    loginPage.doLogin(username, password);
  }
);

Then("I validate password is wrong", () => {
  loginPage.validateWrongPassword();
});

Then("I validate login is success", () => {
  loginPage.validateSuccessLogin();
});
