const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../task01");

describe("task 01 test running", () => {
  it("should print Hello!!! using callback #end_test", () => {
    expect(ex1.first(ex1.second)).to.equal("Hello!!!");
  });
});