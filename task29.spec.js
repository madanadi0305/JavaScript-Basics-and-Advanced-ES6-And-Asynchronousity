const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../task29");

describe("task 29 test running", () => {
  it("should be able to yield Hello World", () => {
    let gen = ex1.generatorFn();
    expect(gen.next().value.trim()).to.equal("Hello World!!!");
  });
  it("should be able to yield more stopping points #end_test", () => {
    let gen = ex1.generatorFn();
    while (!gen.next().done) {
      expect(gen.next().value).to.be.an("string");
    }
  });
});
