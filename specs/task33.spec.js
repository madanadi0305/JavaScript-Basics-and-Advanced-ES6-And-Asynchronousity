const chai = require("chai");
const expect = chai.expect;
const ex5 = require("../task33");
var arry = [];
describe("task 33 test running", () => {
  it("should be able to iterate over 50 odd Numbers ", () => {
    for (var num of ex5.oddNumberFn()) {
      expect(num).to.be.a("number");

      if (num <= 50) {
        arry.push(num);
      } else {
        break;
      }
    }
  });
  it("should have 1 as starting value", () => {
    expect(arry[0]).to.equal(1);
  });
  it("should have 49 at the end", () => {
    expect(arry[arry.length - 1]).to.equal(49);
  });
  it("anonymous test #end_test ", () => {
    expect(arry.length).to.equal(25);
  });
});
