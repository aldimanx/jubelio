export class SalesPage {
  validateSalesPage() {
    cy.url().should("include", "/orders");
  }

  doAddSales() {
    cy.contains("Tambah Baru").click({ force: true });
  }

  validateFormPage() {
    cy.url().should("include", "/orders/editor");
  }
  doInputOrderNo(orderNo) {
    cy.get('[name="salesorder_no"]').clear().type(orderNo);
  }

  doSelectCustomer(customer) {
    cy.get('[placeholder="Pilih pelanggan"]').focus().type(customer);
    cy.get(".MuiOutlinedInput-input").eq(1).should("be.visible").click();
    cy.get("li.MuiAutocomplete-option").contains(customer).click();
  }

  doSelectLocation(location) {
    cy.get('[placeholder="Pilih lokasi"]').focus().type(location);
    cy.get(".MuiOutlinedInput-input").eq(7).should("be.visible").click();
    cy.get("li.MuiAutocomplete-option").contains(location).click();
  }

  doAddProduct(product) {
    cy.contains("Tambah Baru").click();
    cy.get(
      '[data-index="0"] > [style="height: 74px;"] > .css-1rjpksd > .flex-row'
    )
      .find("div div")
      .contains(product)
      .should("be.visible")
      .click();
  }

  doSubmitOrder() {
    cy.get('[title="save"]').click({ force: true });
  }

  validateMessageAlert(message) {
    cy.get('[class="MuiAlert-message css-1w0ym84"]')
      .contains(message)
      .should("be.visible");
  }

  doSearchSalesInvoice(salesInvoice) {
    cy.get('[role="tab"]').contains("Semua").click();
    cy.get('[placeholder="Cari pesanan"]').type(salesInvoice + "{enter}");
  }

  validateSearchResult(salesInvoice) {
    cy.get('[id="table-content"]')
      .find("tbody tr td span a div span")
      .contains(salesInvoice)
      .should("be.visible");
  }
}
