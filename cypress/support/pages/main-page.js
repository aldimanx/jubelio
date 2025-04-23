export class MainPage {
  doVisitDealls() {
    cy.visit("https://dealls.com/");
    cy.get(`h1`).should("include.text", "Cari Lowongan Kerja Pakai Dealls ");
  }

  doVisitLoginUser() {
    const idLanguage = cy.get('[alt="IDN"]');
    const loginButton = cy.get('[id="dealls-navbar-login-btn"]');

    // Check if IDN is visible
    idLanguage.then(($idLang) => {
      if ($idLang.is(":visible")) {
        // If IDN is visible, click the "Masuk" button
        loginButton.should("have.text", "Masuk").click();
      } else {
        cy.get('[alt="ENG"]');
        loginButton.should("have.text", "Login").click();
      }
    });
  }
  doSearchJob(job) {
    cy.get('[id="searchJob"]').type(job + "{enter}");
  }

  doValidateSearchResult(job) {
    cy.get("h2").should("include.text", job).and("have.length.greaterThan", 1);
  }

  doValidateEmptySearchResult() {
    cy.get("h5").should(
      "include.text",
      "Pekerjaan terkait dengan filter yang dipilih belum ada di sini, tapi kami akan mencatatnya "
    );
  }
}
