const chai = require("chai");
const expect = chai.expect;
const ex6 = require("../task34");
var fib = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
var arry = [];
describe("task 34 test running", () => {
  it("should be able to iterate Maximun Element 90 ", () => {
    for (var num of ex6.fibonacciFn()) {
      expect(num).to.be.a("number");
      if (num <= 90) {
        arry.push(num);
      } else {
        break;
      }
    }
  });
  it("should have 0 as starting value", () => {
    expect(arry[0]).to.equal(0);
  });
  it("should have 89 at the end", () => {
    expect(arry[arry.length - 1]).to.equal(89);
  });
  it("anonymous test ", () => {
    expect(arry.length).to.equal(fib.length);
  });
  it("anonymous test 2 #end_test ", () => {
    expect(arry).eql(fib);
  });
});
