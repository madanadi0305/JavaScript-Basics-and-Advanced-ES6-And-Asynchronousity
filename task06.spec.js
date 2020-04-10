const chai = require("chai");
const expect = chai.expect;
const ex2 = require("../task06");

var arr = [1, 2, 3, 4, 5, 6, 5, 5, 5, 1, 2, 2, 10, 10, 12, 10, 10, 1, 1, 1, 10];

describe("task 06 test running", () => {
  it("should filter  operation using callback", () => {
    expect(ex2.fil(arr, ex2.five)).to.deep.equal([
      1,
      2,
      3,
      4,
      6,
      1,
      2,
      2,
      10,
      10,
      12,
      10,
      10,
      1,
      1,
      1,
      10
    ]);
  });
  it("should perform addition operation using callback #end_test", () => {
    expect(ex2.fil(arr, ex2.ten)).to.deep.equal([
      1,
      2,
      3,
      4,
      5,
      6,
      5,
      5,
      5,
      1,
      2,
      2,
      12,
      1,
      1,
      1
    ]);
  });
});

// console.log(ex2.five([1,2,3,4,5,6,5,5,5,1,2,2,10,10,12,10,10,1,1,1,10]));
// console.log(ex2.ten([1,2,3,4,5,6,5,5,5,1,2,2,10,10,12,10,10,1,1,1,10]));

// console.log(ex2.fil(arr,ex2.five));

// console.log(ex2.fil(arr,ex2.ten));
