export class LoginPage {
  doVisitSwagLabs() {
    cy.visit("https://www.saucedemo.com/");
  }

  validateLoginPage() {
    cy.url().should("include", "/sign-in");
  }

  doLogin(username, password) {
    cy.get('[id="basic_email"]').type(username);
    cy.get('[id="basic_password"]').type(password);
    cy.get("span").contains("Sign In").click();
  }

  validateWrongPassword() {
    cy.get("div").should("include.text", "Password WRONG");
  }

  validateSuccessLogin() {
    cy.get("div").should("include.text", "Sign in success");
  }
}
