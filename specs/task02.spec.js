const chai = require("chai");
const expect = chai.expect;
const ex1 = require("../task02");

describe("task 02 test running", () => {
  it("should perform addition operation using callback #end_test", () => {
    let output = ex1.data(10, 5, ex1.add);
    expect(output).to.equal(15);
  });
});
