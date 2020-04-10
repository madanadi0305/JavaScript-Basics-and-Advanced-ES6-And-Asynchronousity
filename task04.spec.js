const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../task04");

describe("task 04 test running", () => {
  it("should perform addition operation using callback", () => {
    let output = ex1.calc(10, 5, ex1.add);
    expect(output).to.equal(15);
  });
  it("should perform subtraction operation using callback #end_test", () => {
    let output = ex1.calc(10, 5, ex1.sub);
    expect(output).to.equal(5);
  });
});
