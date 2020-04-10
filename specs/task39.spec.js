const chai = require("chai");
const expect = chai.expect;
const ex3 = require("../task39");

describe("task 39 test running", () => {
  it("should be able to fetch random no. #end_test", async function() {
    this.timeout(4000);
    for await (let num of ex3.asyncRandomNumbers()) {
      if (num) {
        console.log(num);
        expect(num).to.be.an("number");
        break;
      }
    }
  });
});
