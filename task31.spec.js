const chai = require("chai");
const expect = chai.expect;
const ex2 = require("../task31");
var arry = [];
describe("task 31 test running", () => {
  it("should be able to iterate over Counter value 50 ", () => {
    for (var num of ex2.generatorFn(50)) {
      arry.push(num);
      expect(num).to.be.a("number");
    }
  });
  it("should have 49 as starting value for 50 count ", () => {
    expect(arry[0]).to.equal(49);
  });
  it("should have 0 at the end for 50 count ", () => {
    expect(arry[arry.length - 1]).to.equal(0);
  });
  it("anonymous test #end_test ", () => {
    expect(arry.length).to.equal(50);
  });
});
