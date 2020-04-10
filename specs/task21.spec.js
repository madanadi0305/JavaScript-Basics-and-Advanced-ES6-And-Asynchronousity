const chai = require("chai");
const expect = chai.expect;
const ex4 = require("../task21");
var time = Date.now();
var time2 = 0;
describe("task 21 test running", () => {
  it("should be able to print the sum ", function(done) {
    this.timeout(6500);
    ex4
      .sum(1, 2, 3)
      .then(res => {
        time2 = Date.now();
        expect(res).to.equal(12);
        done();
      })
      .catch(error => {
        console.log(error.message);
      });
  });
  it("Should take 5 sec delay #end_test", function(done) {
    expect(time2 - time).to.above(5000);
    done();
  });
});
