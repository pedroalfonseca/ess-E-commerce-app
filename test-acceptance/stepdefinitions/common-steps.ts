import { defineSupportCode } from "cucumber";
import { browser, $, element, by, ExpectedConditions } from "protractor";
let chai = require("chai").use(require("chai-as-promised"));
let expect = chai.expect;
let assert = chai.assert;

defineSupportCode(function ({ Given, When, Then }) {
  Then(
    /^eu vejo uma mensagem do tipo "(.*)" por conta de "(.*)"$/,
    async function (tipoMsg, motivoMsg) {
      await assert.eventually.equal(
        element(by.name((<string>tipoMsg).toLowerCase())).getText(),
        <string>motivoMsg,
        `A mensagem não foi encontrada ou não possui o valor esperado!`
      );
    }
  );
});
