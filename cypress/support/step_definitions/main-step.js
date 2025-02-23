import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { MainPage } from "../pages/main-page.js";
import { stateStore } from "../helper.js";

const mainPage = new MainPage();

Given("Success login into dashboard page", () => {
  mainPage.validateMainPage();
});

When("I choose {string} from top menu", (menu) => {
  mainPage.doSelectTopMenu(menu);
});

And("I choose {string} from sub menu", (submenu) => {
  mainPage.doSelectSubMenu(submenu);
});
