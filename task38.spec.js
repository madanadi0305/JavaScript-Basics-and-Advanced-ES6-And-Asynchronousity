const chai = require("chai");
const expect = chai.expect;
const ex10 = require("../task38");

let result = ex10.checkFn(100);

describe("task 38 test running", () => {
  it("should be able to replace even elements of fibonacci series #end_test", () => {
    for (var num of result) {
      expect(num).to.be.an("array");
    }
    expect(num).eql([0, 1, 1, 0, 3, 5, 0, 13, 21, 0, 55, 89]);
  });
});
