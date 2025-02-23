export class LoginPage {
  doVisitJubelio() {
    cy.visit("https://v2.jubelio.com/auth/login");
  }

  validateLoginPage() {
    cy.url().should("include", "/login");
    cy.contains("Isi form dibawah untuk masuk ke akun anda").should(
      "be.visible"
    );
  }

  doLogin(username, password) {
    cy.get("#textfield-email").type(username);
    cy.get("#textfield-password").type(password);
    cy.get("[type='submit']").contains("Login").click();
  }
}
