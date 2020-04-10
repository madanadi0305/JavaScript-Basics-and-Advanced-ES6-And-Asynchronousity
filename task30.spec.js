const chai = require("chai");
const expect = chai.expect;
const ex2 = require("../task30");

describe("task 30 test running", () => {
  it("should be able to iterate over 1000 natural numbers #end_test", () => {
    for (let num of ex2.nn()) {
      if (num > 1000) {
        expect(num).to.equal(1001);
        break;
      }
    }
  });
});
