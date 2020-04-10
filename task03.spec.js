const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../task03");

describe("task 03 test running", () => {
  it("should perform division operation using callback", () => {
    expect(ex1.div(4, 4, ex1.call)).to.equal(1);
  });
  it("should perform division operation using callback #end_test", () => {
    expect(ex1.div(4, 0, ex1.call)).to.equal("num2 shouldn't be zero");
  });
});
