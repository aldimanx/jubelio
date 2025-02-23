const validUsername = "emilys";
const invalidUsername = "kminchelle";

describe("Account", () => {
  it("As user hit API with valid credential", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("apiTest") + "auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: validUsername,
        password: "emilyspass",
      },
      failOnStatusCode: false,
    })
      .then(async (response) => {
        cy.log(JSON.stringify(response.body));
        return response;
      })
      .then((response) => {
        expect(response.status).to.be.equal(200);
        expect(response.body.username).to.be.equal(validUsername);
        expect(response.body.email).to.be.not.null;
      });
  });

  it("As user hit API with invalid credential", () => {
    cy.request({
      method: "POST",
      url: Cypress.env("apiTest") + "auth/login",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        username: invalidUsername,
        password: "0lelplR",
      },
      failOnStatusCode: false,
    })
      .then(async (response) => {
        cy.log(JSON.stringify(response.body));
        return response;
      })
      .then((response) => {
        expect(response.status).to.be.equal(400);
        expect(response.body.message).to.be.equal("Invalid credentials");
      });
  });
});
