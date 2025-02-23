export class MainPage {
  validateMainPage() {
    cy.url().should("include", "/integration");
  }

  doSelectTopMenu(menu) {
    cy.get('[class="mr-2"]').contains(menu).click();
    cy.get("h2").contains(menu).should("be.visible");
  }

  doSelectSubMenu(submenu) {
    cy.get("a").find("div div div div").contains(submenu).click();
    cy.get("h4").contains(submenu).should("be.visible");
  }
}
