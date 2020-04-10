const chai = require("chai");
const expect = chai.expect;
const ex4 = require("../task32");
var arry = [];
describe("task 32 test running", () => {
  it("should be able to iterate over 50 Even Numbers ", () => {
    for (var num of ex4.evenNumberFn()) {
      expect(num).to.be.a("number");

      if (num <= 50) {
        arry.push(num);
      } else {
        break;
      }
    }
  });
  it("should have 0 as starting value", () => {
    expect(arry[0]).to.equal(0);
  });
  it("should have 50 at the end", () => {
    expect(arry[arry.length - 1]).to.equal(50);
  });
  it("anonymous test #end_test ", () => {
    expect(arry.length).to.equal(26);
  });
});
