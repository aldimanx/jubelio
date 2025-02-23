import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { stateStore } from "../helper.js";
import { SalesPage } from "../pages/sales-page.js";

const d = new Date();
const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const salesPage = new SalesPage();

Given("I already on Sales Page", () => {
  salesPage.validateSalesPage();
});

And("I open Sales page", () => {
  salesPage.doAddSales();
});

And("I validate sales form page", () => {
  salesPage.validateFormPage();
});

And("I write {string} as order number", (invoice_number) => {
  let pad = "000000";
  let x = Math.floor(Math.random() * 1000000 + 1).toString();
  let number = pad.substring(0, pad.length - x.length) + x;
  stateStore[invoice_number] = `INV/${d.getFullYear()}/${
    monthNames[d.getMonth()]
  }/${number}`;
  salesPage.doInputOrderNo(stateStore[invoice_number]);
});

And("I select {string} as customer", (customer) => {
  salesPage.doSelectCustomer(customer);
});

And("I select {string} as location", (location) => {
  salesPage.doSelectLocation(location);
});

And("I select {string} as product", (product) => {
  salesPage.doAddProduct(product);
});

And("I submit sales form", (customer) => {
  salesPage.doSubmitOrder(customer);
});

And("I validate sales invoice created", () => {
  salesPage.validateSalesInvoiceCreated();
});

And(
  "I search {string} as sales invoice that created before",
  (invoice_number) => {
    salesPage.doSearchSalesInvoice(stateStore[invoice_number]);
  }
);

And(
  "I validate {string} as sales invoice that created before",
  (invoice_number) => {
    salesPage.validateSearchResult(stateStore[invoice_number]);
  }
);
