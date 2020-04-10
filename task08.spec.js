const chai = require("chai");
const expect = chai.expect;
const ex2 = require("../task08");

var arr = [1, 2, 3, 4, 5, 6, 5, 5, 5, 1, 2, 2, 10, 10, 12, 10, 10, 1, 1, 1, 10];

describe("task 08 test running", () => {
  it("should perform addition operation using callback #end_test", () => {
    expect(ex2.first(5, ex2.call)).to.equal(0.5);
  });
});

// console.log(ex2.first(5, ex2.call));
